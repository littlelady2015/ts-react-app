/* 不可改变的数据*/
interface Point {
  readonly x: number;
  readonly y: number;
}
/* 可选的数据 */
interface SquarConfig {
    color?: string;
    width?: number;
    [propName: string]: any
}
/* 函数接口定义*/
interface SearchFunc {
   (source: string, subString: string) : boolean;
}
/* 索引类型定义*/

export function createSquare(config: SquarConfig) : { color: string; area: number} {
  let newSquare = { color: 'white', area: 1000 };
  if(config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  /* 不可改变的数组*/
  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  return newSquare;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  return subString > source;
}
export { mySearch }
