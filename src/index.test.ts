import { bodysuit } from ".";

describe("bodysuit", () => {
  it("works", () => {
    const result = bodysuit();

    expect(result.message).toBe("Hello, Bodysuit!");
  });
});
