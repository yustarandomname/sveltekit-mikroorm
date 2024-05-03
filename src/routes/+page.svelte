<script lang="ts">
	import type Post from '$lib/entities/Post';
	import { onMount } from 'svelte';

	// src/routes/index.svelte
	export let posts: Post[] = [];

	onMount(() => {
		fetch('/')
			.then((res) => res.json())
			.then((data) => {
				posts = data;
			});
	});
</script>

<h1>List of Posts ({posts.length})</h1>

{#each posts as post}
	<h2>{post.title}</h2>
	<p>{post.body}</p>
{/each}

<form method="POST">
	<label for="title">Title</label>
	<input type="text" name="title" placeholder="Post Title" />
	<br />
	<textarea name="body" placeholder="Post Content"></textarea>
	<br />
	<input type="submit" value="New Post" />
</form>
