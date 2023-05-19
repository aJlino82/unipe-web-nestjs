import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ApiModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //mysql
      port: 5432, // 3306
      host: 'localhost',
      username: 'contratos',
      password: 'suporte1234',
      database: 'nest_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      migrationsRun: false,
      migrationsTableName: 'history',
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
