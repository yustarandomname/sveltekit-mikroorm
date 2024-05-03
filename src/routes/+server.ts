import orm from '$lib/database';
import Post from '$lib/entities/Post';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const em = orm.em.fork();

	const posts = await em.find(Post, {});

	return json({ posts });
};
