# Testing Patterns and Best Practices

Common patterns for writing effective tests in the Mocean project.

## Table of Contents

1. [AAA Pattern](#1-aaa-pattern)
2. [Test Naming](#2-test-naming)
3. [Factory Usage](#3-factory-usage)
4. [HTTP Testing](#4-http-testing)
5. [Mock Patterns](#5-mock-patterns)
6. [Error Testing](#6-error-testing)
7. [Schema Testing](#7-schema-testing)
8. [Async Testing](#8-async-testing)

---

## 1. AAA Pattern

Always use **Arrange-Act-Assert** structure:

```typescript
it("should delete provider successfully", async () => {
  // Arrange: Set up test data
  const provider = await providerFactory.create(prisma, { name: "Test" });

  // Act: Execute the code being tested
  const response = await app.request(`/customApi/providers/${provider.id}`, {
    method: "DELETE",
  });

  // Assert: Verify expected outcome
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.id).toBe(provider.id);
});
```

---

## 2. Test Naming

Use descriptive "should..." format:

```typescript
// ✅ Good - descriptive and explicit
it("should return 200 and all providers", async () => {});
it("should return 404 for non-existent provider", async () => {});
it("should throw when provider has associated models", async () => {});
it("should toggle enabled status from true to false", async () => {});

// ❌ Bad - vague
it("works", async () => {});
it("test provider", async () => {});
```

---

## 3. Factory Usage

### Basic Factory Usage

```typescript
// Create with defaults
const provider = await providerFactory.create(prisma);

// Create with overrides
const provider = await providerFactory.create(prisma, {
  name: "Custom Provider",
  enabled: false,
});

// Access auto-created relations
const provider = await providerFactory.create(prisma);
const defaultGroup = provider.groups[0]; // Auto-created
```

### Chaining Factories

```typescript
// Create provider → group → model chain
const provider = await providerFactory.create(prisma);
const group = provider.groups[0];
const model = await modelFactory.create(prisma, group.id, {
  name: "gpt-4",
});

// Create agent with groups and knowledge bases
const agent = await agentFactory.create(prisma, {
  name: "Test Agent",
  groups: { connect: [{ id: group.id }] },
});
```

### Build vs Create

```typescript
// build() - Returns data object (no DB write)
const data = providerFactory.build({ name: "Test" });
// Useful for testing request payloads

// create() - Persists to DB with relations
const provider = await providerFactory.create(prisma);
// Useful for setting up test data
```

---

## 4. HTTP Testing

### Basic Request

```typescript
const response = await app.request("/customApi/providers");

expect(response.status).toBe(200);
const data = await response.json();
```

### POST with Body

```typescript
const response = await app.request("/customApi/providers", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "OpenAI",
    type: "openai",
    apiKey: "sk-test",
  }),
});
```

### Path Parameters

```typescript
const response = await app.request(`/customApi/providers/${provider.id}`, {
  method: "DELETE",
});
```

### Query Parameters

```typescript
const response = await app.request(
  "/customApi/providers/type/openai?enabled=true"
);
```

### Response Assertions

```typescript
// Status code
expect(response.status).toBe(200);
expect(response.status).toBe(404);
expect(response.status).toBe(400); // Validation error
expect(response.status).toBe(409); // Conflict

// JSON body
const data = await response.json();
expect(data).toHaveLength(3);
expect(data[0].name).toBe("OpenAI");

// Text body (for errors)
const text = await response.text();
expect(text).toContain("not found");
```

---

## 5. Mock Patterns

### Creating Mock Prisma

```typescript
function createMockPrisma() {
  return {
    provider: {
      findMany: vi.fn(),
      findUnique: vi.fn(),
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      count: vi.fn(),
    },
  };
}
```

### Mocking Return Values

```typescript
// Success case
mockPrisma.provider.findUnique.mockResolvedValue({
  id: "p1",
  name: "Test",
  groups: [],
});

// Not found case
mockPrisma.provider.findUnique.mockResolvedValue(null);

// Error case
mockPrisma.provider.delete.mockRejectedValue(new Error("DB error"));
```

### Verifying Mock Calls

```typescript
// Verify method was called
expect(mockPrisma.provider.delete).toHaveBeenCalledWith({
  where: { id: "p1" },
});

// Verify method was NOT called
expect(mockPrisma.provider.delete).not.toHaveBeenCalled();

// Verify call count
expect(mockPrisma.provider.findMany).toHaveBeenCalledTimes(1);
```

---

## 6. Error Testing

### Testing Exception Throwing

```typescript
it("should throw when provider has models", async () => {
  // Arrange
  const provider = await providerFactory.create(prisma);
  await modelFactory.create(prisma, provider.groups[0].id);

  // Act & Assert
  await expect(service.deleteProvider(provider.id)).rejects.toThrow(
    "Cannot delete provider with associated models"
  );
});
```

### Testing HTTP Error Responses

```typescript
it("should return 404 for non-existent provider", async () => {
  const response = await app.request("/customApi/providers/non-existent");

  expect(response.status).toBe(404);
  const text = await response.text();
  expect(text).toContain("not found");
});

it("should return 400 for invalid apiHost", async () => {
  const response = await app.request("/customApi/providers", {
    method: "POST",
    body: JSON.stringify({
      name: "Test",
      type: "openai",
      apiHost: "not-a-valid-url",
    }),
  });

  expect(response.status).toBe(400);
});
```

---

## 7. Schema Testing

### Zod Schema Validation

```typescript
import { createProviderSchema } from "../../../router/providers";

describe("createProviderSchema", () => {
  it("should reject empty name", () => {
    const result = createProviderSchema.safeParse({ name: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toContain("required");
    }
  });

  it("should apply default enabled=true", () => {
    const result = createProviderSchema.parse({
      name: "Test",
      type: "openai",
    });
    expect(result.enabled).toBe(true);
  });

  it("should accept valid provider data", () => {
    const result = createProviderSchema.safeParse({
      name: "OpenAI",
      type: "openai",
      apiKey: "sk-test",
      apiHost: "https://api.openai.com",
    });
    expect(result.success).toBe(true);
  });
});
```

---

## 8. Async Testing

### Always Use async/await

```typescript
// ✅ Good
it("should create provider", async () => {
  const provider = await providerFactory.create(prisma);
  expect(provider.id).toBeDefined();
});

// ❌ Bad - missing await
it("should create provider", async () => {
  const provider = providerFactory.create(prisma); // Promise, not provider
  expect(provider.id).toBeDefined(); // Fails or gives wrong result
});
```

### Promise Rejection

```typescript
// ✅ Good
await expect(service.deleteProvider("id")).rejects.toThrow();

// ❌ Bad - no await
expect(service.deleteProvider("id")).rejects.toThrow();
```

### Multiple Async Operations

```typescript
// Run in parallel (independent operations)
const [provider1, provider2] = await Promise.all([
  providerFactory.create(prisma, { name: "P1" }),
  providerFactory.create(prisma, { name: "P2" }),
]);

// Run sequentially (dependent operations)
const provider = await providerFactory.create(prisma);
const group = provider.groups[0];
const model = await modelFactory.create(prisma, group.id);
```

---

## Quick Reference

### Test Structure Template

```typescript
import { beforeEach, describe, expect, it } from "vitest";
import { getTestPrisma } from "../../setup/database";
import { createTestApp } from "../../helpers/test-app";
import { myRouter } from "../../../router/my-router";
import { myFactory } from "../../helpers/factories";

describe("My Router", () => {
  let prisma: Awaited<ReturnType<typeof getTestPrisma>>;
  const app = createTestApp(myRouter);

  beforeEach(async () => {
    prisma = await getTestPrisma();
  });

  it("should...", async () => {
    // Arrange
    const data = await myFactory.create(prisma);

    // Act
    const response = await app.request("/path");

    // Assert
    expect(response.status).toBe(200);
  });
});
```

### Common Assertions

```typescript
// Status codes
expect(response.status).toBe(200);  // OK
expect(response.status).toBe(201);  // Created
expect(response.status).toBe(400);  // Bad Request
expect(response.status).toBe(404);  // Not Found
expect(response.status).toBe(409);  // Conflict

// Data structure
expect(data).toHaveLength(3);
expect(data).toHaveProperty("id");
expect(data).toMatchObject({ name: "Test" });

// Arrays
expect(data).toContainEqual({ id: "p1", name: "Test" });
expect(data.find((d) => d.id === "p1")).toBeDefined();

// Negation
expect(data).not.toBe([]);
expect(response.status).not.toBe(404);
```
