import { Body, Controller, Param, Post, Put, Get, Delete} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateSkillDto from './dto/create-skill.dto';
import UpdateEmployerDto from './dto/update-employer.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOfferDto from './dto/update-offer.dto';
import UpdateSkillDto from './dto/update-skill.dto';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {
  constructor(private readonly jobseekersService: JobseekersService) {}

  @ApiResponse({ status: 200, description: "Create employer" })
  @Post('employers')
  postEmployer( @Body() employer: CreateEmployerDto) {
    return this.jobseekersService.insertEmployer(employer);
  }

  @ApiResponse({ status: 200, description: "Update employer" })
  @Put('employers')
  putEmployer( @Body() employer: UpdateEmployerDto) {
    return this.jobseekersService.updateEmployer(employer);
  }

  @ApiResponse({ status: 200, description: "Retrieve employers" })
  @Get('employers')
  getEmployers() {
    return this.jobseekersService.getAllEmployers();
  }
  @ApiResponse({ status: 200, description: "Create freelancer" })
  @Post('freelancers')
  postFreelancer( @Body() freelancer: CreateFreelancerDto) {
    return this.jobseekersService.insertFreelancer(freelancer);
  }

  @ApiResponse({ status: 200, description: "Update freelancer" })
  @Put('freelancers')
  putFreelancer( @Body() freelancer: UpdateFreelancerDto) {
    return this.jobseekersService.updateFreelancer(freelancer);
  }

  @ApiResponse({ status: 200, description: "Retrieve freelancers" })
  @Get('freelancers')
  getFreelancers() {
    return this.jobseekersService.getAllFreelancers();
  }

  @ApiResponse({ status: 200, description: "Create offer for employerID" })
  @Post('employers/offers')
  postOffer( @Body() offer: CreateOfferDto) {
    return this.jobseekersService.insertOffer(offer);
  }

  @ApiResponse({ status: 200, description: "Update offer" })
  @Put('employers/offers')
  putOffer( @Body() offer: UpdateOfferDto) {
    return this.jobseekersService.updateOffer(offer);
  }

  @ApiResponse({ status: 200, description: "Create skill for freelancerID" })
  @Post('freelancers/skills')
  postSkill( @Body() skill: CreateSkillDto) {
    return this.jobseekersService.insertSkill(skill);
  }

  @ApiResponse({ status: 200, description: "Update skill" })
  @Put('freelancers/skills')
  putSkill( @Body() skill: UpdateSkillDto) {
    return this.jobseekersService.updateSkill(skill);
  }

  @ApiResponse({ status: 200, description: "Retrieve skills" })
  @Get('freelancers/skills')
  getSkills() {
    return this.jobseekersService.getAllSkills();
  }

}