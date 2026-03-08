import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';
import { AttendanceDto, AttendanceCrudDto } from './dtos/attendance.dto';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Controller('attendance')
@ApiTags('Attendance')
@UseGuards(ApiKeyGuard)
@ApiBearerAuth()
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all attendance records',
    description: 'Retrieve all attendance records',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance records retrieved successfully',
    type: [AttendanceDto],
  })
  findAll(): Promise<AttendanceDto[]> {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get attendance record by ID',
    description: 'Retrieve a specific attendance record by its UUID',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance record retrieved successfully',
    type: AttendanceDto,
  })
  @ApiResponse({ status: 404, description: 'Attendance record not found' })
  findOne(@Param() params: UuidParamDto): Promise<AttendanceDto> {
    return this.attendanceService.findOne(params.id);
  }

  @Get('user/:userPin')
  @ApiOperation({
    summary: 'Get attendance records by user PIN',
    description: 'Retrieve attendance records for a specific user',
  })
  @ApiResponse({
    status: 200,
    description: 'User attendance records retrieved successfully',
    type: [AttendanceDto],
  })
  findByUserPin(@Param('userPin') userPin: string): Promise<AttendanceDto[]> {
    return this.attendanceService.findByUserPin(userPin);
  }

  @Get('device/:deviceId')
  @ApiOperation({
    summary: 'Get attendance records by device ID',
    description: 'Retrieve attendance records for a specific device',
  })
  @ApiResponse({
    status: 200,
    description: 'Device attendance records retrieved successfully',
    type: [AttendanceDto],
  })
  findByDeviceId(@Param() params: UuidParamDto): Promise<AttendanceDto[]> {
    return this.attendanceService.findByDeviceId(params.id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create new attendance record',
    description: 'Record a new attendance entry in the system',
  })
  @ApiResponse({
    status: 201,
    description: 'Attendance record created successfully',
    type: AttendanceDto,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  create(@Body() attendanceDto: AttendanceCrudDto): Promise<AttendanceDto> {
    return this.attendanceService.create(attendanceDto);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Update attendance record',
    description: 'Update an existing attendance record',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance record updated successfully',
    type: AttendanceDto,
  })
  @ApiResponse({ status: 404, description: 'Attendance record not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  update(
    @Param() params: UuidParamDto,
    @Body() attendanceDto: AttendanceCrudDto,
  ): Promise<AttendanceDto> {
    return this.attendanceService.update(params.id, attendanceDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete attendance record',
    description: 'Remove an attendance record from the system',
  })
  @ApiResponse({
    status: 200,
    description: 'Attendance record deleted successfully',
  })
  @ApiResponse({ status: 404, description: 'Attendance record not found' })
  delete(@Param() params: UuidParamDto): Promise<void> {
    return this.attendanceService.delete(params.id);
  }
}
