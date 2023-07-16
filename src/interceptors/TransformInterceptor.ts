import {
	Injectable,
	type CallHandler,
	type ExecutionContext,
	type HttpStatus,
	type NestInterceptor
} from '@nestjs/common';
import { type Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface SuccessResponse<T> {
	statusCode: HttpStatus;
	message: string;
	data: T | T[];
}

export interface ErrorResponse<T> {
	statusCode: HttpStatus;
	message: string;
	error: T | T[];
}

export interface Response<T> {
	statusCode: HttpStatus;
	message: string;
	data: T | T[];
}

@Injectable()
class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
	intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
		console.log(context.switchToHttp().getResponse());

		return next.handle().pipe(map(data => ({ statusCode: 200, message: '', data })));
	}
}

export default TransformInterceptor;
