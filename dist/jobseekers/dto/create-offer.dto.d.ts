export default class CreateOrderDto {
    readonly offerID: number;
    readonly employerID: number;
    readonly income: number;
    readonly deadline: Date;
    readonly minExp: number;
    readonly category: number;
    readonly priority: number;
}
