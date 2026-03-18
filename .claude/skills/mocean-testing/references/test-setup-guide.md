# Test Setup Troubleshooting Guide

Complete guide to fixing 8 layers of test infrastructure issues in the Mocean project.

## Table of Contents

1. [Database Table Not Found](#1-database-table-not-found)
2. [Prisma CLI Parameter Incompatibility](#2-prisma-cli-parameter-incompatibility)
3. [Tests Querying Production Database](#3-tests-querying-production-database)
4. [Route Registration Method Errors](#4-route-registration-method-errors)
5. [Route Ordering Causing Path Conflicts](#5-route-ordering-causing-path-conflicts)
6. [Missing Data Transformation](#6-missing-data-transformation)
7. [Parallel Execution Data Races](#7-parallel-execution-data-races)

---

## 1. Database Table Not Found

**Symptom**:
```
The table `main.Provider` does not exist in the current database.
```

**Cause**: Using in-memory database (`:memory:`). The `prisma db push` command runs in a separate subprocess, creating its own in-memory database that's inaccessible to the test process.

**Fix**: Use file-based database in `__tests__/setup/database.ts`:

```typescript
// ❌ Wrong
const TEST_DB_URL = ":memory:";

// ✅ Correct
const TEST_DB_PATH = join(TEST_DB_DIR, "test.db");
const TEST_DB_URL = `file:${TEST_DB_PATH}`;
```

---

## 2. Prisma CLI Parameter Incompatibility

**Symptom**:
```
unknown or unexpected option: --skip-generate
```

**Cause**: Prisma v7.3.0 removed the `--skip-generate` parameter. Also need to use `--url` to specify database address.

**Fix** in `__tests__/setup/database.ts`:

```bash
# ❌ Wrong
npx prisma db push --schema "..." --skip-generate

# ✅ Correct
npx prisma db push --schema "..." --accept-data-loss --url "file:/.../test.db"
```

---

## 3. Tests Querying Production Database

**Symptom**:
```
expected [] to deeply equal []  // Should be empty but has 104 rows
expected to have length 3 but got 104
```

**Cause**: Two separate PrismaClient instances - tests write to `test.db` but server functions read from `prisma.db` (production).

**Fix** in `__tests__/setup/vitest.setup.ts`:

```typescript
// Mock server/index.ts to inject test PrismaClient
vi.mock("../../server/index", () => ({
  get prisma() {
    return getPrismaInstance(); // Returns test PrismaClient
  }
}));
```

**Why getter?** The mock factory runs before `beforeAll`, so database isn't initialized yet. Using a getter defers evaluation until actual use.

---

## 4. Route Registration Method Errors

**Symptom**:
```
Cannot read properties of undefined (reading 'map')
```

**Cause**: Routes are plain objects (`{path, method, handler}`), not Hono instances. Tests tried to use `app.route(path, route)` which expects a Hono instance.

**Fix** in test helpers:

```typescript
// ❌ Wrong
app.route(route.path, route);

// ✅ Correct
for (const route of providersRouter) {
  const method = route.method.toLowerCase() as "get" | "post" | "put" | "delete";
  app.on(method, route.path, ...(route.middleware || []), route.handler);
}
```

Use the `createTestApp()` helper from `__tests__/helpers/test-app.ts` which handles this correctly.

---

## 5. Route Ordering Causing Path Conflicts

**Symptom**:
```
GET /customApi/providers/with-models → 404
```

**Cause**: Hono matches routes in registration order. If `/:id` is registered before `/with-models`, the latter never matches.

**Fix** in router files - order routes: **exact paths first, parameterized paths last**:

```typescript
const providersRouter = [
  // 1. Exact paths (no parameters)
  getProvidersRouter,             // /providers
  getProvidersWithModelsRouter,   // /providers/with-models
  getEnabledProvidersRouter,      // /providers/enabled

  // 2. Prefix parameter paths (won't conflict with :id)
  getProvidersByTypeRouter,       // /providers/type/:type
  getProvidersByModelRouter,      // /providers/by-model/:modelId

  // 3. Parameterized paths (:id) last
  getProviderByIdRouter,          // /providers/:id
  deleteProviderRouter,           // DELETE /providers/:id
];
```

---

## 6. Missing Data Transformation

**Symptom**:
```
expected data[0].models to have length 1 but got undefined
```

**Cause**: Database structure is `Provider → groups[] → models[]`, but API expects flat `models` array. Some service functions forgot to transform.

**Fix** in `server/provider.ts`:

```typescript
// ❌ Wrong
return providers;

// ✅ Correct
return providers.map((provider) => ({
  ...provider,
  models: extractModelsFromGroups(provider.groups),
  _count: { models: countModelsFromGroups(provider.groups) }
}));
```

---

## 7. Parallel Execution Data Races

**Symptom**: Tests pass individually but fail randomly when run together. Different tests fail each run (non-deterministic).

**Cause**: Multiple fork processes reading/writing the same database file concurrently:

```
Fork 1: INSERT 3 rows → SELECT (expects 3) → gets 2 (Fork 2 deleted 1)
Fork 2: DELETE all → INSERT 2 rows → SELECT (expects 2) → gets 3 (Fork 1 inserted 3)
```

**Fix** in `vitest.config.ts`:

```typescript
{
  fileParallelism: false,  // Don't parallelize test files
  pool: "forks",
  poolOptions: {
    forks: {
      singleFork: true     // Use only one fork process
    }
  },
  maxConcurrency: 1        // Serial execution within files
}
```

This ensures all tests share one process, one PrismaClient, and one database connection with strict serial execution.

---

## Troubleshooting Checklist

```
1. Tables/Schema exist?
   → Check for "table does not exist" errors
   → Verify prisma db push succeeded

2. Where is data written? Where is it read?
   → Compare test PrismaClient vs business PrismaClient connection strings
   → Unexpected data count (too many/too few) = "write A read B"

3. Can routes match?
   → 404 response = route not registered or shadowed by another route
   → Check registration method and order

4. Is return structure correct?
   → undefined = wrong field name or missing transformation
   → Compare schema definition vs actual return value

5. Are tests interfering?
   → Pass individually, fail together = isolation problem
   → Non-deterministic failures = concurrency race
   → Check process model and database connection sharing
```
