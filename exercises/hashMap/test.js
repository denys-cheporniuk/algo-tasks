const { HashMap } = require('./index');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });


  test('should set key-value pair correctly', () => {
    hashMap.set("name", "John");
    expect(hashMap.get("name")).toBe("John");
  });


  test('should return correct value for a given key', () => {
    hashMap.set("age", 25);
    expect(hashMap.get("age")).toBe(25);
  });

  test('should return null for a non-existent key', () => {
    expect(hashMap.get("nonExistent")).toBeNull();
  });


  test('should handle hash collisions correctly', () => {
    hashMap.set("age", 25);
    hashMap.set("ega", 30);  // 'age' and 'ega' are designed to collide for simplicity
    expect(hashMap.get("age")).toBe(25);
    expect(hashMap.get("ega")).toBe(30);
  });


  test('should delete a key-value pair correctly', () => {
    hashMap.set("name", "John");
    hashMap.delete("name");
    expect(hashMap.get("name")).toBeNull();
  });

  test('should return null when deleting a non-existent key', () => {
    expect(hashMap.delete("nonExistent")).toBeNull();
  });
});
