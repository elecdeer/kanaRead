import { product } from "./productUtil";

export const sum = (...a: number[]): number => a.reduce((acc, val) => acc + val, 0);

console.log("hello, world!");
console.log(sum(0, 1, 2, 3));
console.log(await product(1, 2, 3, 4, 5, 6));
