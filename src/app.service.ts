import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';
import { NewItemDto } from './dto/new-item.dto';

@Injectable()
export class AppService {

	constructor(private readonly db: DbService) { }

	getHello(): string {
		return 'Hello World!';
	}

	async getItems() {
		
		return new Promise<any>((resolve, reject) => {

			let sql = "select id, name, description from items"
			this.db.query(sql, []).then((res) => { resolve(res)} )
		})
	}

	async addItem(item: NewItemDto) {

		return new Promise<any>((resolve, reject) => {

			let sql = "insert into items (name, description) values ($1, $2) RETURNING id"
			let values = [item.name, item.description]
			this.db.query(sql, values).then((res) => { resolve(res[0]) })
		})
	}
}
