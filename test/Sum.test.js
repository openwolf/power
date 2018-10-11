const sum = require('./Sum.js')

test('test 1 plus 2 result', () => {
  expect(sum(1 , 2)).toBe(3);
})


test('test 2 plus 2 should equal 4', () => {
  expect(sum(2 , 2)).toBe(4);
})

test('object', () => {
  expect({a:1}).toEqual({a:1,b:2});
})

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
})