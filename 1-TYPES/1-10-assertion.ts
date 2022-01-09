{
  /**
   * Type Assertions 💩 Not great!
   */

  function jsStrFunc(): any {
    return 'hello';
  }

  const result = jsStrFunc();
  console.log((result as string).length);
  // same result----> console.log((<string>result).length);
  //

  function jsStrFuncWrong(): any {
    return 2;
  }
  const result1 = jsStrFuncWrong();
  console.log((result1 as string).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱😱😱😱😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers.push(2); // error
  numbers!.push(2); // 😱

  // e.g
  const button = document.querySelector('class');
  if (button) {
    button.nodeValue;
  }
  const button = document.querySelector('class')!; // if you're 100% sure
}
