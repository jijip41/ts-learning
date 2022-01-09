{
  /**
   * Type Inference
   */

  let text = 'hello';
  text = 'hi';
  text = 1; // error
  // if the type is obvious, can just skip it

  // but for functions - if you don't implicitly say what type it should be, it's set for 'any' and it's bad
  function print(message) {
    console.log(message);
  }

  print('hello');
  print(1);

  function print1(message = 'hello') {
    console.log(message);
  }
  print1('hi');
  print2(1); // error

  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
