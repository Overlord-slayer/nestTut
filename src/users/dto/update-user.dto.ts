import { CreateUserDto } from "./create-user.dto"
import { PartialType } from "@nestjs/mapped-types"

// Crear una clase con los mismos atributos de la clase CreateUserDto (Herencia), pero los campos no son requeridos
export class UpdateUserDto extends PartialType(CreateUserDto){

}