{
  // Type Aliases

  type Text = string;
  const name: Text = 'ellie';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: String;
    age: number;
  };

  const student: Student = {
    name: 'dog',
    age: 1,
  };

  // String Literal Types

  type Name = 'name';
  let jihyeName: Name;
  jihyeName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';
}
