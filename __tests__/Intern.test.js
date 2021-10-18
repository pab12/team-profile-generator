const Intern = require('../lib/Intern')
test('Creates a Intern object', () => {
  const intern = new Intern('Intern','Sam', '22', 'Sam@.com');

  expect(intern.role).toBe('Intern');
  expect(intern.name).toBe('Sam');
  expect(intern.id).toBe('22');
  expect(intern.email).toBe('Sam@.com');
})