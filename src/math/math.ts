import {ImaginaryNumber} from "@/interface/imaginary-number";

export function add(x: ImaginaryNumber, y: ImaginaryNumber): ImaginaryNumber {
  return {a: x.a + y.a, b: x.b + y.b};
}

export function sub(x: ImaginaryNumber, y: ImaginaryNumber): ImaginaryNumber {
  return {a: x.a - y.a, b: x.b - y.b};
}
