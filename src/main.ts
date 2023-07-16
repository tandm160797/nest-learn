import { type INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { type NestExpressApplication } from '@nestjs/platform-express';

import AppModule from 'AppModule';

const bootstrap = async () => {
	const app: INestApplication = await NestFactory.create<NestExpressApplication>(AppModule);
	await app.listen(3000);
};

void bootstrap();
