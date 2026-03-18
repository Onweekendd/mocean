---
name: mocean-testing
description: Comprehensive testing guide for Mocean project using Vitest + Prisma + Hono stack. Use when writing tests, debugging test failures, setting up test infrastructure, or creating test data factories. Covers integration tests (router layer), unit tests (server layer with mocks), schema validation tests, factory patterns, database setup, and common pitfalls. Trigger when user asks to write tests, fix failing tests, add test coverage, create test factories, or troubleshoot test infrastructure issues.
---

# Mocean Testing

## Stack

- **Runner**: Vitest with `singleFork: true` (serial execution, no parallelism)
- **DB**: SQLite file-based (NOT `:memory:`) via Prisma
- **HTTP**: Hono with `createTestApp()` helper
- **Patterns**: Factory (build/create), AAA

## Test Structure

```
__tests__/
├── setup/
│   ├── database.ts       # DB lifecycle: init, clear, close
│   └── vitest.setup.ts   # Global hooks + PrismaClient mock injection
├── helpers/
│   ├── factories.ts      # Data factories for all models
│   └── test-app.ts       # createTestApp() helper
├── unit/
│   ├── schema/           # Zod schema validation tests
│   └── server/           # Service layer tests with mocked Prisma
└── integration/
    └── router/           # Full HTTP tests with real DB
```

## Integration Tests (Router Layer)

**Location**: `__tests__/integration/router/*.test.ts`

```typescript
import { beforeEach, describe, expect, it } from "vitest";
import { providersRouter } from "../../../router/providers";
import { providerFactory } from "../../helpers/factories";
import { createTestApp } from "../../helpers/test-app";
import { getTestPrisma } from "../../setup/database";

describe("Providers Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(providersRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  it("should return 200 and all providers", async () => {
    await providerFactory.create(prisma, { name: "Provider 1" });

    const response = await app.request("/customApi/providers");

    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toHaveLength(1);
  });

  it("should return 404 for non-existent provider", async () => {
    const response = await app.request("/customApi/providers/non-existent");
    expect(response.status).toBe(404);
  });
});
```

## Unit Tests (Server Layer)

**Location**: `__tests__/unit/server/*.test.ts`

```typescript
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createProviderService } from "../../../server/provider";

function createMockPrisma() {
  return {
    provider: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  };
}

describe("Provider Service", () => {
  let mockPrisma: ReturnType<typeof createMockPrisma>;
  let service: ReturnType<typeof createProviderService>;

  beforeEach(() => {
    mockPrisma = createMockPrisma();
    service = createProviderService(mockPrisma as any);
  });

  it("should throw when provider has models", async () => {
    mockPrisma.provider.findUnique.mockResolvedValue({
      id: "p1",
      groups: [{ models: [{ id: "m1" }] }],
    });

    await expect(service.deleteProvider("p1")).rejects.toThrow();
    expect(mockPrisma.provider.delete).not.toHaveBeenCalled();
  });
});
```

## Schema Tests

**Location**: `__tests__/unit/schema/*.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import { createProviderSchema } from "../../../router/providers";

describe("createProviderSchema", () => {
  it("should reject empty name", () => {
    const result = createProviderSchema.safeParse({ name: "" });
    expect(result.success).toBe(false);
  });

  it("should apply default enabled=true", () => {
    const result = createProviderSchema.parse({ name: "Test", type: "openai" });
    expect(result.enabled).toBe(true);
  });
});
```

## Factory Pattern

**Location**: `__tests__/helpers/factories.ts`

Available factories: `providerFactory`, `groupFactory`, `modelFactory`, `assistantFactory`, `agentFactory`, `mcpServerFactory`, `mcpToolFactory`

```typescript
// build() - returns data object (no DB write)
const data = providerFactory.build({ name: "Custom" });

// create() - persists to DB and returns with relations
const provider = await providerFactory.create(prisma, { name: "Custom" });
const group = provider.groups[0]; // default group auto-created

// Chain dependencies
const model = await modelFactory.create(prisma, group.id);
const assistant = await assistantFactory.create(prisma, model.id);
```

**Adding a new factory**:
```typescript
export const myFactory = {
  build: (overrides?: Partial<MyModel>) => ({
    name: "Default Name",
    enabled: true,
    ...overrides,
  }),
  create: async (prisma: PrismaClient, overrides?: Partial<MyModel>) => {
    const data = myFactory.build(overrides);
    return await prisma.myModel.create({ data, include: { relations: true } });
  },
};
```

## Key Rules

1. **Always use `getTestPrisma()`** in `beforeEach` (not `beforeAll`) for integration tests
2. **Never instantiate `new PrismaClient()`** in tests — use the injected mock
3. **Route order matters**: register specific paths (`/with-models`) before parameterized ones (`/:id`)
4. **`createTestApp()` takes `RouteDefinition[]`** — check the router export format
5. **DB is cleared between tests** via `beforeEach` in `vitest.setup.ts` — no manual cleanup needed

## Troubleshooting

See [references/test-setup-guide.md](references/test-setup-guide.md) for the full 8-layer guide covering:
- Table not found errors (in-memory vs file DB)
- Prisma CLI parameter issues (--skip-generate removed)
- Tests hitting production DB (PrismaClient mocking)
- Route registration errors (object vs Hono instance)
- Route ordering conflicts (exact paths before parameterized)
- Missing data transformations (flattening groups)
- Parallel execution data races (singleFork: true)

## Patterns & Best Practices

See [references/patterns.md](references/patterns.md) for detailed testing patterns:
- AAA (Arrange-Act-Assert) pattern
- Test naming conventions
- Factory usage (build vs create, chaining)
- HTTP testing (requests, assertions)
- Mock patterns (Prisma, verification)
- Error testing (exceptions, HTTP errors)
- Schema testing (Zod validation)
- Async testing (async/await, parallel operations)
