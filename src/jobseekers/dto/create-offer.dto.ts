import { ApiProperty } from '@nestjs/swagger';

export default class CreateOrderDto {

    @ApiProperty({type: "number", description:"Offer ID", maxLength: 500})
    readonly offerID: number;

    @ApiProperty({type: "number", description:"Employer ID"})
    readonly employerID: number;

    @ApiProperty({type: "number", description:"Offer income"})
    readonly income: number;

    @ApiProperty({type: "Date", description:"Offer deadline"})
    readonly deadline: Date;

    @ApiProperty({type: "number", description:"Offer minimum experience"})
    readonly minExp: number;

    @ApiProperty({type: "number", description:"Offer category"})
    readonly category: number;

    @ApiProperty({type: "number", description:"Offer priority"})
    readonly priority: number;


}