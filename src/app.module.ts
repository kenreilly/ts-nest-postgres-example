import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { DbService } from './db/db.service';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import path = require('path');

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '..', 'web'),
			exclude: ['/service*'],
		}),
		ConfigModule.forRoot({ envFilePath: path.join(__dirname, '../.env') }),
		DbModule,
	],
	controllers: [AppController],
	providers: [AppService, DbService],
})

export class AppModule {}
