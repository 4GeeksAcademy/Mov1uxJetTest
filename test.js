/*const { sum } = require('./app.js');

test("suma de 10 + 9 = a 19", ()=> {
    let total = sum(10,9)
    expect(total).toBe(19);
});
*/
test("1 euro tiene que ser 1.07 dolares", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("1 dolar tienen que ser 292.52 yenes", function() {
    const { fromDollarToYen } = require('./app.js');

    const dollars = fromDollarToYen(2);

    const expected = 2 * 20;

    expect(dollars).toBe(292.5233644859813); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test("10 yen tienen que ser 0.011 pound", function() {
    
    const { fromYenToPound } = require('./app.js');

    const yen = fromYenToPound(2);

    const expected = 2 * 20;

    expect(yen).toBe(0.011118210862619809); 
});