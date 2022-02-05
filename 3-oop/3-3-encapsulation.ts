{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected - can assess from child
  class coffeeMachine {
    private static BEANS_GRAMS_PER_SHOT: number = 7; // class level
    private beansGram: number = 0; // instance (object) level

    private constructor(beansGram: number) {
      this.beansGram = beansGram;
    }

    static makeMachine(coffeeBeans: number): coffeeMachine {
      return new coffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value of beans should be greater than 0');
      }
      this.beansGram += beans;
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

  // const maker = new coffeeMachine(21); - not valid anymore as constructor changed to private
  const maker = coffeeMachine.makeMachine(3);

  maker.fillCoffeeBeans(20);

  console.log(maker);
}
