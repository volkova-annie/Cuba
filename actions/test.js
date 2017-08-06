export function updateTest(test) {
  return {
    type: 'test/UPDATE_TEST',
    test: {...test}
  }
}
