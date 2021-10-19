const Manager = require('../lib/Manager');
test('Creates a Manager object', () => {
  const manager = new Manager('Manager','Kyle', '22', 'kyle@.com');

  expect(manager.role).toBe('Manager');
  expect(manager.name).toBe('Kyle');
  expect(manager.id).toBe('22');
  expect(manager.email).toBe('kyle@.com');
});