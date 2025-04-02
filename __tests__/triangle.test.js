// __tests__/triangle.test.js

const triangleType = require("../triangle-validation");

test("Return invalido if 3 inputs are below 0", () => {
  expect(triangleType(-1, -1, -1)).toBe("Invalido");
});

test("Return invalido if inputs are not in the range", () => {
  expect(triangleType(2, 3, 20)).toBe("Invalido");
  expect(triangleType(2, 30, 5)).toBe("Invalido");
  expect(triangleType(10, 2, 3)).toBe("Invalido");
});

test(`Return "Equilatero"`, () => {
  expect(triangleType(3, 3, 3)).toBe("Equilatero");
});

test(`Return "Isosceles"`, () => {
  expect(triangleType(2, 2, 3)).toBe("Isosceles");
});

test(`Return "Escaleno"`, () => {
  expect(triangleType(2, 3, 4)).toBe("Escaleno");
});
