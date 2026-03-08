import { ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";
import { DeviceDto } from "src/device/dtos/device.dto";

export class CommandDto {
    @ApiResponseProperty({ example: 1, type: Number })
    id: number;
    
    @ApiResponseProperty({ example: "CHECK LOG" })
    command: string;
    
    @ApiPropertyOptional({ readOnly: true, example: "" })
    response?: string;

    @ApiPropertyOptional({ readOnly: true, example: 0 })
    return?: number;

    @ApiResponseProperty({ example: false, type: Boolean })
    executed: boolean;
    
    @ApiResponseProperty({ example: false, type: Boolean })
    successful: boolean;
    
    @ApiResponseProperty({ example: "2025-07-12T19:30:15.123Z", type: Date })
    created_at: Date;
    
    @ApiResponseProperty({ example: "2025-07-12T19:30:15.123Z", type: Date })
    transferred_at?: Date;
    
    @ApiPropertyOptional({ readOnly: true, example: "2025-07-12T19:30:15.123Z", type: Date })
    executed_at?: Date;
    
    @ApiResponseProperty({ example: "86e3e77c-0125-49cd-bd7b-a0045e9fe808" })
    device_id: string;

    @ApiResponseProperty({ type: () => DeviceDto })
    device: DeviceDto;
}