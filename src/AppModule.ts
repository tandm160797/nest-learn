import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import AppController from 'AppController';
import AppService from 'AppService';
import ErrorsInterceptor from 'interceptors/ErrorsInterceptor';
import TransformInterceptor from 'interceptors/TransformInterceptor';

@Module({
	imports: [],
	controllers: [AppController],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: TransformInterceptor
		},
		{
			provide: APP_INTERCEPTOR,
			useClass: ErrorsInterceptor
		},
		AppService
	]
})
class AppModule {}

export default AppModule;
