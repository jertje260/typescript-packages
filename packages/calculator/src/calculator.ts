import { Add } from '@jeroen/add'
import { Subtract } from '@jeroen/subtract'

export class Calculator {
	public Add = Add;
	public Subtract = Subtract;
	public Multiply(a: number, b: number): number {
		return a * b;
	}
}