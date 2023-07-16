import { Injectable } from '@nestjs/common';

@Injectable()
class AppService {
	getHello(): string {
		const x: any = '18';
		return x.ji().toString();
		// throw new HttpException('asjk', 400);
		// return 'Hello World!';
	}
}

export default AppService;
