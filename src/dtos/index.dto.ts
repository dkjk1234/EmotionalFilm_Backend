import { Type } from 'class-transformer';
import { IsEmail, IsString, IsNotEmpty, MinLength, MaxLength, IsArray, ValidateNested, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Message, MessageRole } from '@/interfaces/chat.interface';

export class ChatDto {
    @IsArray({
        message: "올바른 배열이 아닙니다"
    })
    public messages: Message[]

    @IsOptional()
    @IsNumber({}, {
        message: "올바른 숫자가 아닙니다"
    })
    public temperature: number

    @IsOptional()
    @IsNumber({}, {
        message: "올바른 숫자가 아닙니다"
    })
    public max_tokens: number

    @IsOptional()
    @IsNumber({}, {
        message: "올바른 숫자가 아닙니다"
    })
    public top_p: number

    @IsOptional()
    @IsNumber({}, {
        message: "올바른 숫자가 아닙니다"
    })
    public presence_penalty: number

    @IsOptional()
    @IsNumber({}, {
        message: "올바른 숫자가 아닙니다"
    })
    public frequency_penalty: number

    @IsOptional()
    @IsString({
        message: "올바른 문자열이 아닙니다"
    })
    public model: string
}
