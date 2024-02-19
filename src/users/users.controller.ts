import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
/**
 * El orden es importante, pues como una cascada, se debe de colocar en la parte superior
 * las rutas estaticas y abajo, las rutas dinamicas
 */

@Controller('users')
export class UsersController {
    // Inyectando el servicio en el controlador. Esta es la logica para las peticiones definidas abajo
    constructor(private readonly usersService: UsersService) {}

    @Get() // GET users
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return this.usersService.findAll(role)
    }
    
    @Get('interns') // GET users/interns
    findAllInterns() {
        return []
    }

    @Get(':id') // GET users/:id
    findOne(@Param('id', ParseIntPipe) id: number){ // ParseIntPipe transforma la data, en este caso, la castea a entero el endpoint id
        return this.usersService.findOne(id) 
    }

    @Post() // POST /users
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id') // PATCH users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.delete(id)// operador unario que convierte la cadena a numero (+<parametro>)
    }
}
