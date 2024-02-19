import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/create-user.dto';
/**
 * El orden es importante, pues como una cascada, se debe de colocar en la parte superior
 * las rutas estaticas y abajo, las rutas dinamicas
 */

@Controller('users')
export class UsersController {
    @Get() // GET users
    findAll(@Query("role") role?: "INTERN" | "ENGINEER" | "ADMIN") {
        return []
    }
    
    @Get('interns') // GET users/interns
    findAllInterns() {
        return []
    }

    @Get(':id') // GET users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    @Post() // POST /users
    create(@Body() user: {}){
        return user
    }

    @Patch(':id') // PATCH users/:id
    update(@Param('id') id: string, @Body() userUpdate: {}){
        return { id, ...userUpdate }
    }

    @Delete(':id')
    delete(@Param("id") id: string) {
        return { id }
    }
}
