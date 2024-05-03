import 'reflect-metadata';
import { MikroORM, type Options } from '@mikro-orm/core';
import Post from '$lib/entities/Post';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const config: Options = {
	dbName: 'db',
	driver: PostgreSqlDriver,
	clientUrl: 'postgresql://user:wachtwoord@localhost:5432/db?schema=public',
	entities: [Post],

	migrations: {
		emit: 'js'
	},

	debug: true
};

const orm = await MikroORM.init(config);
// Create the new migrations, then apply them
// const migrator = orm.getMigrator();
// await migrator.createMigration();
// await migrator.up();

// Export the orm as default
export default orm;
