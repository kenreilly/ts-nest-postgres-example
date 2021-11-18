import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { NewItemDto } from './dto/new-item.dto';

@Controller()
export class AppController {

	constructor(private readonly appService: AppService) {}

	@Post('add-item')
	async addItem(@Body() item: NewItemDto): Promise<string> {

		console.log(item)
		return this.appService.addItem(item)
	}

	@Get('get-items')
	async getItems(): Promise<Array<any>> {

		return this.appService.getItems();
	}
}
