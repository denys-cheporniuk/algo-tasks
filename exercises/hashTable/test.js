const HashTable = require('./index');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  // Test for set() method
  test('should correctly set a key-value pair', () => {
    hashTable.set('name', 'John');
    expect(hashTable.get('name')).toBe('John');
  });

  test('should update value if key already exists', () => {
    hashTable.set('name', 'John');
    hashTable.set('name', 'Doe');
    expect(hashTable.get('name')).toBe('Doe');
  });

  // Test for get() method
  test('should correctly retrieve value by key', () => {
    hashTable.set('age', 25);
    expect(hashTable.get('age')).toBe(25);
  });

  test('should return null for a non-existent key', () => {
    expect(hashTable.get('nonExistent')).toBeNull();
  });

  // Test for delete() method
  test('should correctly delete a key-value pair', () => {
    hashTable.set('name', 'John');
    hashTable.delete('name');
    expect(hashTable.get('name')).toBeNull();
  });

  test('should return false when deleting a non-existent key', () => {
    expect(hashTable.delete('nonExistent')).toBe(false);
  });

  test('should return true when deleting an existing key', () => {
    hashTable.set('name', 'John');
    expect(hashTable.delete('name')).toBe(true);
  });
});
