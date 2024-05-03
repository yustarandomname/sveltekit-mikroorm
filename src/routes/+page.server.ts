import orm from '$lib/database';
import Post from '$lib/entities/Post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const em = orm.em.fork();

	const posts = await em.find(Post, {});

	const postList = posts.map((post) => post.toPOJO());

	return { posts: postList };
};
