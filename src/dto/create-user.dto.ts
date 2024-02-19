import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    readonly username: string
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string
    @IsString()
    @IsNotEmpty()
    readonly password: string
}