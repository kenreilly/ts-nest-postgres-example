import { IsInt, IsString } from 'class-validator';

export class NewItemDto {

	@IsString()
	readonly name;

	@IsString()
	readonly description;
}