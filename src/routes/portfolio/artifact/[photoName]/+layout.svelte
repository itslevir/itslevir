<script lang="ts">
	import type { LayoutProps } from './$types';
	import { photos } from '$lib/photos.json';

	let { data, params, children }: LayoutProps = $props();

	let photo = photos.find((p) => p.title === decodeURIComponent(params.photoName));
	if (!photo) {
		throw new Error('Photo not found');
	}
</script>

<div class="content">
	<h1>artifact: {photo.title}</h1>

	<p>description: {photo.alt}</p>
	<div class="tags-list">
		{#each photo.tags as tag}
			<span class="tag">{tag}</span>
		{/each}
	</div>
	<main>
		<article class="photo-detail">
			<img
				src={photo.src}
				alt={photo.alt}
				oncontextmenu={(e) => {
					e.preventDefault();
					const element = document.createElement('a');
					element.setAttribute('href', photo.src);
					element.setAttribute('download', `${photo.title}.jpg`);
					element.style.display = 'none';
					document.body.appendChild(element);
					element.click();
				}}
			/>
		</article>
		<div class="details">
			<div class="location">
				<iframe
					title="location"
					width="450"
					height="250"
					frameborder="0"
					style="border:0"
					referrerpolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBIyVM2McHFBPNdRdG223CYEt4ziGnxC0U&center={photo
						.location.lat},{photo.location.lon}&zoom=12"
					allowfullscreen
				>
				</iframe>
			</div>
			<div class="details">
				<p>taken: {new Date(Number(photo.date) * 1000).toLocaleDateString()}</p>
				<p>play related audio</p>
			</div>
		</div>
		{@render children()}
	</main>
</div>

<style>
	:global(html) {
		overflow: scroll !important;
		height: auto !important;
		width: 100% !important;
	}

	:global(.content, main) {
		padding: 2em;
		margin: 0;
		width: 100% !important;
		height: auto !important;
	}

	h1 {
		margin: 0;
	}

	article {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 16px;
	}

	img {
		width: 80vw;
		max-width: 800px;
		height: auto;
		max-height: 80vh;
		object-fit: cover;
		border-radius: 8px;
		margin: 16px 0;
	}

	.tags-list {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding: 0 16px;
	}

	.tag {
		background-color: rgb(0, 0, 0);
		border-radius: 25em;
		padding: 4px 8px;
		font-size: 0.9em;
	}

	.details {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 32px;
		padding: 16px;
		flex-wrap: wrap;
	}
</style>
