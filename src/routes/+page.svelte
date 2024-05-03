<script lang="ts">
	export let data;

	async function add() {
		const response = await fetch('/', {
			method: 'POST'
		});

		if (response.ok) {
			const res = await response.json();

			console.log(res.post);

			data.posts = [...data.posts, res.post];
		}
	}
</script>

<h1>List of Posts ({data.posts.length})</h1>

{#each data.posts as post}
	<h2>{post.title}</h2>
	<p>{post.body}</p>
{/each}

<button on:click={add}>Add</button>
