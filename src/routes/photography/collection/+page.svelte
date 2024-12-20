<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div>
	<main class="h-full w-full p-12">
		<div class="flex flex-col w-full justify-center">
			<h1 class="text-8xl">open a collection</h1>
            <input type="text" placeholder="id" class="w-1/2 p-2 m-2"/>
		</div>
	</main>
</div>
