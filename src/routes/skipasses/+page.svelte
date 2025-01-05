<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const passesOfInterest = data.passes.filter(
		(p: { MountainPassId: number }) =>
			p.MountainPassId === 5 || p.MountainPassId === 11 || p.MountainPassId === 10
	);
</script>

<main>
	{#each passesOfInterest as pass}
		<div class="card">
			<div class="card--header flex flex-row">
				<span>
					<h1>{pass.MountainPassName}</h1>
					<small
						>Last Updated: {new Date(
							Number(
								pass.DateUpdated.replaceAll('/', '')
									.replace('Date', '')
									.replace('(', '')
									.replace(')', '')
									.split('-')[0]
							)
						).toDateString()}</small
					>
				</span>
				<div class="chip">
					{#if pass.TemperatureInFahrenheit <= 32}
						<span class="chip green">
							{pass.TemperatureInFahrenheit}°
						</span>
					{:else}
						<span class="chip red">
							{pass.TemperatureInFahrenheit}°
						</span>
					{/if}
				</div>
			</div>
			<div class="card--contents">
				<p>Weather: {pass.WeatherCondition}</p>

				<p>Road: {pass.RoadCondition}</p>
			</div>
		</div>
	{/each}
</main>

<style>
	h1 {
		color: white;
		font-size: 2rem;
		font-weight: 700;
	}

	h2 {
		color: white;
		font-size: 1.5rem;
		font-weight: 500;
	}

	main {
		width: 100vw;
		height: 100vh;
		background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.chip {
		border-radius: 12px;
		padding: 0.5em 1em;
		margin-left: 1em;
	}

	.chip.red {
		background-color: #ff4d4d;
	}

	.chip.yellow {
		background-color: #ffcc00;
	}

	.chip.green {
		background-color: #00cc66;
	}

	.card {
		backdrop-filter: blur(25px) saturate(180%);
		-webkit-backdrop-filter: blur(25px) saturate(180%);
		background-color: rgba(17, 25, 40, 0.8);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.125);
		padding: 2em;
		width: 30%;
	}

	.card--header {
		border-bottom: 2px solid rgba(255, 255, 255, 0.125);
	}

	.card--contents {
		padding: 1em;
	}
</style>
