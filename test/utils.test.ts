import {add} from "../src"

describe("My test", () => {
  it("tests (1+i) + (2+2i) = (3+3i)", () => {
    expect(add({a: 1, b: 1}, {a: 2, b: 2})).toEqual({a: 3, b: 3})
  })
})
