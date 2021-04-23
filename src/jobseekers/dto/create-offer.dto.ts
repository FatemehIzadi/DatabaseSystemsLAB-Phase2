import { ApiProperty } from '@nestjs/swagger';

export default class CreateOfferDto {

    @ApiProperty({type: "number", description: "Employer ID"})
    readonly employerID: number;

    @ApiProperty({type: "number", description: "Offer income"})
    readonly income: number;

    @ApiProperty({type: "Date", description: "Offer deadline"})
    readonly deadline: Date;

    @ApiProperty({type: "number", description: "Offer minimum experience"})
    readonly minExp: number;

    @ApiProperty({type: "string", description: "Offer description"})
    readonly descr: string;

    @ApiProperty({type: "string", description: "Offer category"})
    readonly category: string;

    @ApiProperty({type: "number", description: "Offer priority"})
    readonly priority: number;


}