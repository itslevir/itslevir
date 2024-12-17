<script lang="ts">
</script>

<div>
	<main class="h-full w-full p-12">
		<div class="flex w-full justify-center">
			<h1 class="text-8xl text-yellow-300">photos</h1>
		</div>
		<div class="flex flex-col md:flex-row p-4">
			<section class=" one flex w-full flex-col justify-center">
				<a href="/photography/portraits">
					<div class="flex h-full flex-col justify-center">
						<h2 class="text-4xl text-yellow-300">portraits</h2>
					</div>
					<div class="flex h-full flex-col justify-between">
						<img
							class="highlight-image"
							src="https://imagedelivery.net/SDam0YHzoAIFkmPQPhJQIg/41f30828-d5d4-4562-2b57-567b6f64f700/q=75,w=400,h=268,fit=cover"
							alt="portrait"
						/>
					</div>
				</a>
			</section>
			<section class=" two flex w-full flex-col justify-center">
				<a href="/photography/landscapes">
					<div class="flex h-full flex-col justify-center">
						<h2 class="text-4xl text-yellow-300">landscapes</h2>
					</div>
					<div class="flex h-full flex-col justify-between">
						<img
							class="highlight-image"
							src="https://imagedelivery.net/SDam0YHzoAIFkmPQPhJQIg/85157ed4-6ffb-42a4-d418-4f339292df00/q=75,w=400,h=268"
							alt="landscape"
						/>
					</div>
				</a>
			</section>
			<section class="three flex w-full flex-col justify-center">
				<a href="/photography/flicks">
					<div class="flex h-full flex-col justify-center">
						<h2 class="text-4xl text-yellow-300">flicks</h2>
					</div>
					<div class="flex h-full flex-col justify-between">
						<img
							class="highlight-image"
							src="https://imagedelivery.net/SDam0YHzoAIFkmPQPhJQIg/27b37316-9255-4c0a-a4e2-740036f37900/q=75,w=400,h=268"
							alt="flicks"
						/>
					</div>
				</a>
			</section>
		</div>
	</main>
</div>

<style>
	a {
		text-decoration: none;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 33.33%;
		height: 70%;
		margin: 0 10px;

		transition: width 0.5s;
	}

	.highlight-image {
		width: 100%;
		height: 100%;
		object-fit: cover;

		border-radius: 2rem;
	}

	section.one:hover {
		width: 80%;
	}
	section.two:hover {
		width: 80%;
	}
	section.three:hover {
		width: 80%;
	}

	@media (max-width: 768px) {
		section {
			width: 100%;
			margin: 10px 0;
			flex-direction: column !important;
		}

		section.one:hover {
			width: 100%;
		}
		section.two:hover {
			width: 100%;
		}
		section.three:hover {
			width: 100%;
		}
	}
</style>
