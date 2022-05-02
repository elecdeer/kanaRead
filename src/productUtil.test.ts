import { product } from "./productUtil";

test("basic", async () => {
  expect(await product()).toBe(1);
});

test("basic again", async () => {
  expect(await product(1, 2)).toBe(2);
});

test("basic again again", async () => {
  expect(await product(1, 2, 3, 4)).toBe(24);
});
