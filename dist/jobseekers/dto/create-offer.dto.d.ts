export default class CreateOrderDto {
    readonly income: number;
    readonly deadline: Date;
    readonly minExp: number;
    readonly category: string;
    readonly priority: number;
}
