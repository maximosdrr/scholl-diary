import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import path = require('path');
import { UserModule } from './modules/user/user.module';
import { SchollModule } from './modules/scholl/scholl.module';
import { ClassRoomModule } from './modules/class-room/class-room.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { SubjectModule } from './modules/subject/subject.module';
import { NotebookModule } from './modules/notebook/notebook.module';
import { EvaluationModule } from './modules/evaluation/evaluation.module';
import { PresenceModule } from './modules/presence/presence.module';
import { IndexModule } from './modules/index/index.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['src/env-files/.database.env', 'src/env-files/.jwt.env'],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('HOST'),
        port: configService.get<number>('PORT'),
        username: configService.get<string>('USER'),
        password: configService.get<string>('PASS'),
        database: configService.get<string>('DBNAME'),
        entities: [path.join(__dirname, '../dist/**/*.entity{.ts,.js}')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    SchollModule,
    ClassRoomModule,
    TeacherModule,
    StudentModule,
    SubjectModule,
    NotebookModule,
    EvaluationModule,
    PresenceModule,
    IndexModule,
  ],
  controllers: [],
})
export class AppModule {}
