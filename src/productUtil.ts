export const product = async (...a: number[]): Promise<number> =>
  a.reduce((acc, val) => acc * val, 1);
