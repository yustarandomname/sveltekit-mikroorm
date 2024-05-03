import orm from '$lib/database';
import Post from '$lib/entities/Post';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const em = orm.em.fork();

	const posts = await em.find(Post, {});

	console.log('+server.ts GET function', posts);

	return json({ posts });
};

export const POST: RequestHandler = async () => {
	const em = orm.em.fork();

	const post = new Post('Hello World', 'This is the first post');

	em.persist(post);
	await em.flush();

	return json({ post });
};
