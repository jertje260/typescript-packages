# @jeroen/calculator

This package exposes a calculator class which uses the `@jeroen/add` and `@jeroen/subtract` packages. It also has a multiply method.

Usage:
```typescript
import { Calculator } from "@jeroen/calculator";

const calc = new Calculator();

console.log(calc.Add(1,2));
console.log(calc.Subtract(1,2));
console.log(calc.Multiply(1,2));
```
