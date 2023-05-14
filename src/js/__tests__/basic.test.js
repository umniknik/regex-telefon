import normator from '../app';

test('Сhecking of holding a phone number to a uniform style', () => {
  const result = normator('8 (927) 000-00-00');
  expect(result).toBe('+79270000000');
});

test('Сhecking of holding a phone number to a uniform style', () => {
  const result = normator('+7 960 000 00 00');
  expect(result).toBe('+79600000000');
});

test('Сhecking of holding a phone number to a uniform style', () => {
  const result = normator('+86 000 000 0000');
  expect(result).toBe('+860000000000');
});
