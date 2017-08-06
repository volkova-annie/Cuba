export function test(state = {}, action) {
  switch (action.type) {
    case 'test/UPDATE_TEST': {
      return {...action.test}
    }
    default: {
      return state
    }
  }
}
