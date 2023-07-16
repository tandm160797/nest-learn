import { BadGatewayException, HttpException, Injectable } from '@nestjs/common';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
class ErrorsInterceptor {
	intercept(context, next) {
		return next.handle().pipe(
			catchError(error => {
				console.log(error);
				console.log(error instanceof HttpException);

				return throwError(() => new BadGatewayException());
			})
		);
	}
}

export default ErrorsInterceptor;
