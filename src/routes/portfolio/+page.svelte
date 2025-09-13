<div class="content">
	<main>
		<h1>photos <a href="/portfolio/artifacts">see all</a></h1>
		<div class="photo-collection">
			<a href="/portfolio/artifacts/landscape" class="photo-item">
				<img
					src="https://cdn.itslevir.com/cdn-cgi/image/quality=80,width=256,height=256,format=webp/IMG_1189.JPEG"
					alt="A snowy mountain in the distance, covered with fog. The land in front of it is dry and dusty rolling hills"
				/>
				<span>landscape / outdoors</span>
			</a>
			<a href="/portfolio/artifacts/portrait" class="photo-item">
				<img
					src="https://cdn.itslevir.com/cdn-cgi/image/quality=80,width=256,height=256,format=webp/IMG_9715.JPEG"
					alt="An expressionless male face against a black background. A glint of light shines off his face, and he his holding a bunch of white flowers in his hand."
				/>
				<span>portrait / people</span>
			</a>
		</div>
	</main>
</div>

<style>
	img {
		width: 256px;
		height: 256px;
		object-fit: cover;
		border-radius: 8px;
	}

	h1 > a {
		font-size: 1.2rem;
		color: inherit;
		text-decoration: none;
		margin-left: 8px;
	}

	.content {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.photo-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease-in-out;
	}

	.photo-item span {
		margin-top: 8px;
		font-size: 1.2rem;
	}

	.photo-item:hover {
		transform: scale(1.05);
	}
</style>
