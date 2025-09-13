<svelte:head>
	<link rel="preconnect" href="https://cdn.itslevir.com" />
</svelte:head>

<div class="layout">
	<slot />
</div>

<style>
	@font-face {
		font-family: 'Plus Jakarta Sans Variable';
		src: url('/plusjakartasans.ttf') format('truetype');
		font-weight: 100 900;
		font-style: normal;
	}

	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
	}

	.layout {
		font-family: 'Plus Jakarta Sans Variable', sans-serif;
		font-weight: 400;
		color: rgb(255, 255, 255);
		background-color: rgb(0, 15, 63);
	}
</style>
