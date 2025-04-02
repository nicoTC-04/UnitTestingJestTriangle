function triangleType(a, b, c) {
  // Verifica si los lados pueden formar un triángulo
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Invalido";
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalido";
  }

  // Determina el tipo de triángulo
  if (a === b && b === c) {
    return "Equilatero";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Escaleno";
  }
}

module.exports = triangleType;
