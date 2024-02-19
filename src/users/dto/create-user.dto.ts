import { IsEmail, IsNotEmpty, IsString, IsEnum } from "class-validator"

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    readonly name: string
    
    @IsEmail()
    @IsNotEmpty()
    readonly email: string
    
    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message: "valid role required"
    })
    readonly role: "INTERN" | "ENGINEER" | "ADMIN"
}