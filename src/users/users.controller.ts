import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
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
    findOne(@Param('id') id: string){
        return this.usersService.findOne(+id) // operador unario que convierte la cadena a numero (+<parametro>)
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: 'INTER'| 'ENGINEER' | 'ADMIN'}){
        return this.usersService.create(user)
    }

    @Patch(':id') // PATCH users/:id
    update(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersService.update(+id, userUpdate)
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return this.usersService.delete(+id)// operador unario que convierte la cadena a numero (+<parametro>)
    }
}
