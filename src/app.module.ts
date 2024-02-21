import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'
import { DatabaseModule } from './database/database.module'
import { EmployeesModule } from './employees/employees.module'
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler'
import { APP_GUARD } from '@nestjs/core'
import { MyLoggerModule } from './my-logger/my-logger.module';

@Module({
    imports: [
        UsersModule, 
        DatabaseModule, 
        EmployeesModule,
        ThrottlerModule.forRoot([{
            name: 'short',
            ttl: 1000, // Tiempo para poder hacer n cantidad de peticiones
            limit: 3 // Cantidad de peticiones que se pueden hacer segun el tiempo delimitado
        }, {
            name: 'long',
            ttl: 60000, // Tiempo para poder hacer n cantidad de peticiones
            limit: 100 // Cantidad de peticiones que se pueden hacer segun el tiempo delimitado
        }]),
        MyLoggerModule
    ],
    controllers: [
        AppController, 
        UsersController],
    providers: [
        AppService, {
            // Disparador, en caso de realizar n+1 cantidad de pecitiones
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ],
})
export class AppModule {}
