import CreateEmployerDto from './create-employer.dto';
export default class UpdateEmployerDto extends CreateEmployerDto {
    readonly employerID: number;
}
