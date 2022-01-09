{
  // Challenge 1

  // JavaScript 💩
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript ✨
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // challenge 2

  // // JavaScript 💩
  // function jsFetchNum(id) {
  //   // Code ...
  //   // Code ...
  //   // Code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript ✨
  // function tsFetchNum(id: string): Promise<number> {
  //   //Code ...
  //   //Code ...
  //   //Code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript ✨ => TypeScript
  // Optional Parameter ✨✨✨✨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName + ' ' + lastName);
  }

  printName('Steve', 'Jobs');
  printName('Jihye');
  printName('ji', undefined);

  // Default Parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...nums: number[]): number {
    return nums.reduce((prev, curr) => prev + curr);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
