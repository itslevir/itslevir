<script lang="ts">
	import '../app.css';
	import '$lib/hoefler-text.ttf';
	let { children } = $props();
</script>

<div class="h-screen w-screen bg-black text-white">
	{@render children()}
</div>

<style>
	@font-face {
		font-family: 'Hoefler Text';
		src: url('/hoefler-text.ttf') format('truetype');
	}

	div {
		font-family: 'Hoefler Text', serif;
	}
</style>
