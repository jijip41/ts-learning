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

{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('Age should not be negative');
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string) {}
  }
  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);
  user.firstName = 'Ellie';
  console.log(user.fullName);
  user.age = 10;
  user.age = -1;
}
