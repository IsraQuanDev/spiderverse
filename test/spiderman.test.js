
const Spiderman = require('./../app/spiderman');

// describe("Test Suite Dummy Description", () => {
//     test('Case 1 Dummy', () => {
//       const resultOfSomething = 1 + 2
//       expect(resultOfSomething).toBe(3);
//     });
//   })

describe("Unit Tests for Spiderman class", ()=>{
  test("1) Create an spiderman object",()=>{
    // Código a usar
    //Instanciar un objeto Spiderman 
    const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"sonny")

    //Validamos que este código funcione de la forma esperada
    expect(andrewGarfield.name).toBe("Spiderman Sony")
    expect(andrewGarfield.age).toBe(31)
    expect(andrewGarfield.actor).toBe("Andrew Garfield")
    expect(andrewGarfield.movies).toBe(2)
    expect(andrewGarfield.cine).toBe("sonny");
  

  });
})
