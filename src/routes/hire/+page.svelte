<script lang="ts">
	import SveltyPicker from 'svelty-picker';
	import type { PageProps } from './$types';

	let { data, form }: PageProps = $props();

	let currentPage = $state(1);
</script>

<main>
	<h1>hire me</h1>
	<p>I take stunning photos that are sure to stand out. flexible pricing and scheduling.</p>

	<form method="POST">
		<div class="page-1-of-3 {currentPage === 1 ? 'active' : ''}">
			<h2>First, about you.</h2>
			<div class="names">
				<input type="text" placeholder="First Name" name="firstName" />
				<input type="text" placeholder="Last Name" name="lastName" />
			</div>
			<input type="email" placeholder="Your email" name="email" />
			<button type="button" onclick={() => (currentPage = 2)}>Next</button>
		</div>
		<div class="page-2-of-3 {currentPage === 2 ? 'active' : ''}">
			<h2>Next, about your photos.</h2>
			<label for="details">What is this for? <span class="color-red">*</span></label>
			<input type="text" name="details" placeholder="(e.g. family portrait, senior photos)" />
			<label for="style">What style are you going for?</label>
			<input type="text" name="style" placeholder="(e.g. light & airy, cold & moody)" />
			<label for="location">Where do you want to shoot?</label>
			<input type="text" name="location" placeholder="If you don't know, just leave this blank" />
			<label for="additional">Anything else I should know?</label>
			<textarea name="additional" placeholder="Special requests, styles, questions"></textarea>
			<button type="button" onclick={() => (currentPage = 3)}>Next</button>
		</div>
		<div class="page-3-of-3 {currentPage === 3 ? 'active' : ''}">
			<h2>Finally, your availability.</h2>
			<SveltyPicker
				name="date"
				mode="datetime"
				pickerOnly={true}
				formatType="php"
				format="U"
				displayFormatType="standard"
				displayFormat="M"
				hourOnly={true}
				placeholder="Select a date and time"
			></SveltyPicker>
			<button type="submit">Submit</button>
		</div>
	</form>
</main>

<style>
	:global(:root) {
		--sdt-bg-main: rgb(0, 15, 63);
		--sdt-radius: 4px;
		--sdt-shadow-color: none;
		--sdt-color: rgb(255, 255, 255);
		--sdt-color-selected: rgb(0, 10, 25);
		--sdt-header-color: rgb(255, 255, 255);
		--sdt-header-btn-bg-hover: rgb(0, 10, 25);
		--sdt-bg-selected: #286090;
		--sdt-today-bg: #1e486d; /** date picker today button hover background color */
		--sdt-today-color: var(--sdt-bg-main); /** date picker today button text & border color */
		--sdt-clear-color: #dc3545; /** clear button text & border color */
		--sdt-clear-bg: transparent; /** clear button background color */
		--sdt-clear-hover-color: var(--sdt-bg-main); /** clear button hover text color */
		--sdt-clear-hover-bg: #dc3545; /** clear button hover background color */

		--sdt-clock-bg: rgba(0, 45, 194, 0.8); /** time picker inner circle background color */
		--sdt-clock-color: var(--sdt-color); /** time picker text color (watch "--sdt-color") */

		--sdt-table-bg: transparent; /** date picker inner table background color */
	}

	h1 {
		font-size: 3rem;
		font-weight: 800;
		margin-bottom: 0.5rem;
	}

	p {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	input[type='text'],
	input[type='email'] {
		padding: 0.5rem;
		margin: 0.25rem;
		font-size: 1rem;
		border: 1px solid #fff;
		border-radius: 4px;
		background-color: inherit;
		color: inherit;
		font-family: inherit;
	}

	textarea {
		padding: 0.5rem;
		margin: 0.25rem;
		font-size: 1rem;
		border: 1px solid #fff;
		border-radius: 4px;
		background-color: inherit;
		color: inherit;
		font-family: inherit;
		resize: vertical;
		min-height: 100px;
	}

	button {
		padding: 0.75rem;
		margin-top: 1rem;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		background-color: #0070f3;
		color: #fff;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	.page-1-of-3,
	.page-2-of-3,
	.page-3-of-3 {
		display: none;
		animation: slide 0.5s ease-in-out;
	}

	.page-1-of-3.active,
	.page-2-of-3.active,
	.page-3-of-3.active {
		display: flex;
		flex-direction: column;
	}

	.names {
		display: flex;
		flex-direction: row;
	}

	.color-red {
		color: red;
	}

	@keyframes slide {
		from {
			opacity: 0;
			transform: translateX(100%);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
