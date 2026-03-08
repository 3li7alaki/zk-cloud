import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CommandService } from './command.service';
import { CommanderService } from './commander.service';
import { DeviceService } from '../device/device.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { FindCommandsDto } from './dtos/find-commands.dto';
import { UuidParamDto } from 'src/common/dtos/uuid-param.dto';
import { IdParamDto } from 'src/common/dtos/id-param.dto';
import { CommandDto } from './dtos/command.dto';
import { SimpleCommandDto } from './dtos/simple-command.dto';
import { AttendanceFilterDto } from './dtos/attendance-filter.dto';
import {
  GetFingerprintsDto,
  EnrollFingerprintDto,
} from './dtos/fingerprint-operations.dto';
import { DeleteOperationDto } from './dtos/delete-operations.dto';
import { SyncUserDto, SyncFingerprintDto } from './dtos/sync-operations.dto';
import { UserService } from '../user/services/user.service';
import { BiodataService } from '../user/services/biodata.service';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';

@Controller('commands')
@ApiTags('Commands Management')
@UseGuards(ApiKeyGuard)
@ApiBearerAuth()
export class CommandController {
  constructor(
    private readonly commandService: CommandService,
    private readonly commanderService: CommanderService,
    private readonly deviceService: DeviceService,
    private readonly userService: UserService,
    private readonly biodataService: BiodataService,
  ) {}

  @Get()
  @ApiOperation({
    summary: 'Get all commands',
    description: 'Retrieve all commands with optional filtering',
  })
  @ApiResponse({
    status: 200,
    description: 'Commands retrieved successfully',
    type: [CommandDto],
  })
  async getAll(@Query() filters: FindCommandsDto): Promise<CommandDto[]> {
    return this.commandService.findAll(filters.executed);
  }

  @Get('device/:id')
  @ApiOperation({
    summary: 'Get commands by device',
    description: 'Retrieve commands for a specific device',
  })
  @ApiResponse({
    status: 200,
    description: 'Device commands retrieved successfully',
    type: [CommandDto],
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async get(
    @Param() params: UuidParamDto,
    @Query() filters: FindCommandsDto,
  ): Promise<CommandDto[]> {
    return this.commandService.findByDevice(params.id, filters.executed);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get command by ID',
    description: 'Retrieve a specific command by its ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Command retrieved successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Command not found' })
  async getOne(@Param() params: IdParamDto): Promise<CommandDto> {
    return this.commandService.findOne(params.id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete command',
    description: 'Delete a command by its ID',
  })
  @ApiResponse({ status: 200, description: 'Command deleted successfully' })
  @ApiResponse({ status: 404, description: 'Command not found' })
  async delete(@Param() params: IdParamDto): Promise<void> {
    return this.commandService.delete(params.id);
  }

  // Device Command Operations
  @Post('device/:id/simple')
  @ApiOperation({
    summary: 'Execute simple command',
    description:
      'Execute simple commands like CHECK, INFO, REBOOT, CLEAR_LOG, CLEAR_DATA',
  })
  @ApiResponse({
    status: 201,
    description: 'Simple command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @ApiResponse({ status: 400, description: 'Invalid command type' })
  async executeSimpleCommand(
    @Param() params: UuidParamDto,
    @Body() commandDto: SimpleCommandDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);

    return this.commanderService.createCommand(device, commandDto.command);
  }

  @Post('device/:id/attendance')
  @ApiOperation({
    summary: 'Get attendance records',
    description:
      'Create command to retrieve attendance records with optional filters',
  })
  @ApiResponse({
    status: 201,
    description: 'Attendance command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async getAttendance(
    @Param() params: UuidParamDto,
    @Body() filterDto?: AttendanceFilterDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    return this.commanderService.createAttendanceCommand(device, filterDto);
  }

  @Post('device/:id/fingerprints')
  @ApiOperation({
    summary: 'Get fingerprints',
    description:
      'Create command to retrieve fingerprints for all users or specific user',
  })
  @ApiResponse({
    status: 201,
    description: 'Fingerprints command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  async getFingerprints(
    @Param() params: UuidParamDto,
    @Body() dto: GetFingerprintsDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    return this.commanderService.createFingerprintsCommand(device, dto.pin);
  }

  @Post('device/:id/fingerprint/enroll')
  @ApiOperation({
    summary: 'Enroll fingerprint',
    description: 'Create command to enroll a fingerprint for a user',
  })
  @ApiResponse({
    status: 201,
    description: 'Fingerprint enrollment command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @ApiResponse({ status: 400, description: 'Invalid finger number or PIN' })
  async enrollFingerprint(
    @Param() params: UuidParamDto,
    @Body() dto: EnrollFingerprintDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    return this.commanderService.createFingerprintEnrollCommand(
      device,
      dto.pin,
      dto.finger,
    );
  }

  @Post('device/:id/fingerprint/sync')
  @ApiOperation({
    summary: 'Sync fingerprint to device',
    description: 'Create command to sync fingerprint from database to device',
  })
  @ApiResponse({
    status: 201,
    description: 'Fingerprint sync command created successfully',
    type: CommandDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Device, user, or fingerprint not found',
  })
  @ApiResponse({ status: 400, description: 'Invalid finger number or PIN' })
  async syncFingerprint(
    @Param() params: UuidParamDto,
    @Body() dto: SyncFingerprintDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    const fingerprint = await this.biodataService.findFingerprint(
      dto.pin,
      dto.finger,
    );
    return this.commanderService.createFingerprintUpdateCommand(
      device,
      dto.pin,
      dto.finger,
      fingerprint.template,
    );
  }

  @Post('device/:id/user/sync')
  @ApiOperation({
    summary: 'Sync user to device',
    description: 'Create command to sync user from database to device',
  })
  @ApiResponse({
    status: 201,
    description: 'User sync command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device or user not found' })
  @ApiResponse({ status: 400, description: 'Invalid PIN' })
  async syncUser(
    @Param() params: UuidParamDto,
    @Body() dto: SyncUserDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    const user = await this.userService.findOneByPin(dto.pin);
    return this.commanderService.createUserUpdateCommand(
      device,
      dto.pin,
      user,
      dto.with_fingerprint,
    );
  }

  @Post('device/:id/user/upload')
  @ApiOperation({
    summary: 'Upload user from device',
    description: 'Create command to upload user from device to database',
  })
  @ApiResponse({
    status: 201,
    description: 'User upload command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @ApiResponse({ status: 400, description: 'Invalid PIN' })
  async uploadUser(
    @Param() params: UuidParamDto,
    @Body() dto: SyncUserDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    return this.commanderService.createUserUploadCommand(device, dto.pin);
  }

  @Post('device/:id/delete')
  @ApiOperation({
    summary: 'Delete data',
    description: 'Create command to delete user data from specific table',
  })
  @ApiResponse({
    status: 201,
    description: 'Delete command created successfully',
    type: CommandDto,
  })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @ApiResponse({ status: 400, description: 'Invalid PIN or table' })
  async deleteData(
    @Param() params: UuidParamDto,
    @Body() dto: DeleteOperationDto,
  ): Promise<CommandDto> {
    const device = await this.deviceService.findOne(params.id);
    return this.commanderService.createDeleteCommand(
      device,
      dto.pin,
      dto.table,
    );
  }
}
