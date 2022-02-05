{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMS_PER_SHOT: number = 7;
  let beansGram: number = 21;

  function makeCoffee(shots: number): CoffeeCup {
    let consumedBeans = shots * BEANS_GRAMS_PER_SHOT;
    if (beansGram < consumedBeans) {
      throw new Error('Not enough coffee beans!');
    }

    beansGram -= consumedBeans;
    return {
      shots: shots,
      hasMilk: false,
    };
  }
  const coffee = makeCoffee(2);
  console.log(coffee);
}
