import { Controller,  Get, UseGuards,HttpCode} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

//todo in future add roles
@ApiTags('medical-care')
@Controller('medical-care')
export class MedicalCareController {

    @Get('')
    @UseGuards(JwtAuthGuard)

    @ApiOperation({ summary: 'This action returns welcome' })
    @ApiResponse({
      status: 200,
      description: 'This action returns welcome' ,
    
    })
    @HttpCode(200)
    getprivate(){
        return 'Bem Vindo'
    }
}
