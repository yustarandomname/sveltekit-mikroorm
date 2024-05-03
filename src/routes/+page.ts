import type { PageLoad } from './$types';

export const load: PageLoad = async ({ data }) => {
	console.log('+page.ts load function', data);

	return {
		posts: data.posts,
		universalMessage: 'hello from universal load function'
	};
};
