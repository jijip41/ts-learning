{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  class coffeeMachine {
    static BEANS_GRAMS_PER_SHOT: number = 7; // class level
    beansGram: number = 0; // instance (object) level

    constructor(beansGram: number) {
      this.beansGram = beansGram;
    }

    makeCoffee(shots: number): CoffeeCup {
      let consumedBeans = shots * coffeeMachine.BEANS_GRAMS_PER_SHOT;
      if (this.beansGram < consumedBeans) {
        throw new Error('Not enough coffee beans!');
      }

      this.beansGram -= consumedBeans;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new coffeeMachine(21);
  console.log(maker);
}
