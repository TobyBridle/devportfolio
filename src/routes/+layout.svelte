<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<meta property="og:title" content="Toby Bridle's Portfolio" />
	<meta property="og:url" content="https://trika.gay" />
	<meta property="og:description" content="(◕‿◕✿)" />
	<meta property="og:image" content="https://picsum.photos/400" />
</svelte:head>

{@render children()}

<style>
</style>
