// 数组的约束方式
// let nums = [1, 2, 3];

//
// let nums: Array<number> = [1, 2, 3];

// function printValues(obj: object) {
//   Object.values(obj).forEach(item => {
//     console.log(item);
//   });
// }

// let obj: object = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// printValues(obj);

// let n: number = null;

// let n: string = undefined;

// console.log(n);

// 联合类型
// let name: string | undefined;

// 联合类型, 类型提示小时, 配合类型保护, 确定变量的实际类型
// if (typeof name === "string") {
//   // 类型保护
// }

// let nums2: number[] = [1, 2, 3];
// let nums2: Array<number> = [1, 2, 3];

// function throwError(msg: string): never {
//   throw new Error(msg);
//   console.log("hellow");
// }

// let gender: "男" | "女"; // 只能赋值为 "男"|"女"

// let nums: []; // 字面量约束, 空数组

// let user: {
//   name: string;
//   age: number;
// };

// user = {
//   name: "王",
//   age: 1,
// };

// type Gender = "男" | "女";
// type User = {
//   name: string;
//   age: number;
//   gender: Gender;
// };

// let u: User;
// u = {
//   name: "王",
//   age: 18,
//   gender: "男",
// };
// function getUsers(g: Gender): User[] {
//   return [];
// }

// getUsers("男");

// /**
//  * 得到 a * b 的结果
//  * @param a
//  * @param b
//  */
// function combine(a: number, b: number): number;
// /**
//  * 得到 a 拼接的结果
//  * @param a
//  * @param b
//  */
// function combine(a: string, b: string): string;
// function combine(a: number | string, b: number | string): number | string {
//   if (typeof a === "number" && typeof b === "number") {
//     return a * b;
//   } else if (typeof a === "string" && typeof b === "string") {
//     return a + b;
//   }
//   throw new Error("a.b类型必须相同");
// }

// const res1 = combine(3, 3);
// const res2 = combine("3", "3");
// // const res3 = combine(3, "3"); ts 检查报错

function sum(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  } else {
    return a + b;
  }
}

sum(3, 4);
