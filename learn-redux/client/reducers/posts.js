// a reducer takes in 2 things

// 1. the action (info about what happened)
// 2. copy of current state

// Every reducer runs anytime there is an action.
// Whether it changes state is up to you.

function posts(state = [], action) {
  console.log('the post will change');
  console.log(state, action);
  return state;
}

export default posts;
