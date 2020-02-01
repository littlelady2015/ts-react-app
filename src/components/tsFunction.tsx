export default (...rest: number[]) => {
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // 使用as可以对只读变量进行重写；
  ro= a.concat(6) as number[];
}

