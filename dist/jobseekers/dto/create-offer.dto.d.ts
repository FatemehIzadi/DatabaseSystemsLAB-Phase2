export default class CreateOfferDto {
    readonly employerID: number;
    readonly income: number;
    readonly deadline: Date;
    readonly minExp: number;
    readonly descr: string;
    readonly category: string;
    readonly priority: number;
}
