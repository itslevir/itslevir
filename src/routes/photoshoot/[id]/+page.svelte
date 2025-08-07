<script lang="ts">
	import type { PageProps } from './$types';

	let { params }: PageProps = $props();
</script>

<div class="photo-shoot">
	<h1>Your Photos:</h1>
</div>

<style>
	.photo-shoot {
		padding: 2rem;
	}
</style>
