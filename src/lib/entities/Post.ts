import { Entity, Property, PrimaryKey } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export default class Post {
	@PrimaryKey({ type: 'string' })
	id: string = v4();

	@Property({ type: 'string' })
	title: string = '';

	@Property({ type: 'string' })
	body: string;

	constructor(title: string, body: string) {
		this.title = title;
		this.body = body;
	}

	toPOJO() {
		return {
			id: this.id,
			title: this.title,
			body: this.body
		};
	}
}
