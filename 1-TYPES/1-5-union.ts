{
  // Union Types: OR

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }

  move('right');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success, fail

  // my practice 🤷‍♀️
  /**
    type Status = 'success' | 'fail';
    function login(status: Status) {
      return 'success' ? console.log('seccess') : console.log('fail');
      }
   */

  // solution 💡
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLogin(state)
  // success -> 🎉 body
  // fail => 😭 reason

  function printLogin(state: LoginState): void {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
    login();
  }

  login();
}
