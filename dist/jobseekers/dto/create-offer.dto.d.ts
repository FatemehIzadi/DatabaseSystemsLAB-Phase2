export default class CreateOrderDto {
    readonly offerID: number;
    readonly income: number;
    readonly deadline: Date;
    readonly minExp: number;
    readonly category: string;
    readonly priority: number;
}
