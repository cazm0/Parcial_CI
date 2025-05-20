const sumar = require('./main');

test('suma 2 + 3 para dar 5', () => {
  expect(sumar(2, 3)).toBe(5);
});
