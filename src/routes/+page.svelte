<div class="content">
	<main>
		<h1>it's levi r.</h1>
		<p>i make things, every once in a while</p>
		<div class="links">
			<a href="/portfolio" class="button primary"><span>see them</span></a>
			<a href="/hire" class="button"><span>hire me</span></a>
		</div>
	</main>
</div>

<style>
	.content {
		width: 100vw;
		height: 100vh;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	h1 {
		font-size: 3rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
	}
	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;

		width: 90%;
	}

	.button {
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		background-color: rgba(17, 25, 40, 0.75);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.125);

		text-decoration: none;
		color: inherit;

		transition: all 0.2s ease-in-out;
	}
	.button.primary {
		background-color: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.25);
	}

	.button span {
		padding: 0.5rem 1rem;
		display: inline-block;
		font-weight: 600;
	}

	.button:hover {
		background-color: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.25);
	}
</style>
