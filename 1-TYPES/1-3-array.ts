{
  // Array
  const fruits: string[] = ['🍎', '🍌'];
  const scores: Array<number> = [1, 3, 5, 2];

  function printArray(fruits: readonly string[]) {}

  // Tuple => use interface, type alias, class instead
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  // object desstructing
  const [name, age] = student;
  console.log(name);
  console.log(age);
}
