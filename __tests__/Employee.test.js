
const Employee = require('../lib/Employee');
test('Creates a Employee object', () => {
  const employee = new Employee('Employee','Paul', '23', 'pab@.com');

  expect(employee.role).toBe('Employee');
  expect(employee.name).toBe('Paul');
  expect(employee.id).toBe('23');
  expect(employee.email).toBe('pab@.com');
});