const Engineer = require('../lib/Engineer');
test('Creates a Engineer object', () => {
  const engineer = new Engineer('engineer','Keith', '22', 'keith@.com');

  expect(engineer.role).toBe('engineer');
  expect(engineer.name).toBe('Keith');
  expect(engineer.id).toBe('22');
  expect(engineer.email).toBe('keith@.com');
})