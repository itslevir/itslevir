<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="content">{@render children()}</div>

<style>
	.content {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
