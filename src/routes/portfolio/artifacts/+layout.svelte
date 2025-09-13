<script lang="ts">
	import type { LayoutProps } from './$types';
	import { photos } from '$lib/photos.json';

	let { data, children, params }: LayoutProps = $props();
</script>

<div class="content">
	<main>
		{#if params.photoType}
			<h1>{params.photoType} photos</h1>
		{:else}
			<h1>all photos</h1>
		{/if}
		<div class="gallery">
			{#each photos as photo}
				{#if !params.photoType || photo.tags.includes(params.photoType)}
					<a href="/portfolio/artifact/{encodeURIComponent(photo.title)}" class="photo-item">
						<figure>
							<img src={photo.src} alt={photo.alt} />
							<figcaption>
								<h2>{photo.title}</h2>
								<p>{photo.alt}</p>
							</figcaption>
						</figure>
					</a>
				{/if}
			{/each}
		</div>
	</main>
	{@render children()}
</div>

<style>
	:global(html) {
		overflow: scroll !important;
		height: auto !important;
		width: 100% !important;
	}

	:global(.content, main) {
		padding: 0;
		margin: 0;
		width: 100% !important;
		height: auto !important;
	}
	a {
		text-decoration: none;
		color: inherit;
	}

	img {
		width: 256px;
		height: 256px;
		object-fit: cover;
		border-radius: 8px;
	}
	.content {
		width: 100vw;
		max-width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow-x: none !important;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
		gap: 16px;
		width: 100%;
		max-width: 100vw;
		padding: 16px;
		box-sizing: border-box;
	}
</style>
