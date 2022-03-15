<script lang="ts">
	
	import Primaria from "./Primaria.svelte";
	import Infanzia from "./Infanzia.svelte";
	import Secondaria from "./Secondaria.svelte";
	
	import {
		Button,
		FormGroup,
		Input,
	} from "sveltestrap";

	import SvelteSeo from "svelte-seo";
	
	import { Alert } from "sveltestrap";

	let rappresentante = false;

	let school = "primaria";

	function choose(s) {
		school = s;
		if (localStorage) {
			localStorage.setItem("school", school);
		}
	}
</script>

<SvelteSeo
	twitter={{
		site: "@mastrogiovanni",
		title: "FAQ Covid Scuola",
		description: "Risposta a domande frequenti per il Covid a scuola",
		image: "https://covid-celli.netlify.com/imgs/covid.png",
		imageAlt: "FAQ Covid Scuola",
	}}
	openGraph={{
		title: "FAQ Covid Scuola",
		description: "Risposta a domande frequenti per il Covid a scuola",
		type: "article",
		url: "https://covid-celli.netlify.com/",
		article: {
			publishedTime: "2022-01-18T19:00:00Z",
			modifiedTime: "2022-01-18T19:00:00Z",
			expirationTime: "2025-01-18T19:00:00Z",
			section: "FAQ",
			tags: ["covid", "scuola"],
		},
		images: [
			{
				url: "https://covid-celli.netlify.com/imgs/covid.png",
				width: 1958,
				height: 1966,
				alt: "Covid",
			},
		],
	}}
/>

<Alert color="primary">
	<h1>Guida rapida per la gestione Covid a scuola</h1>
	<small>Scegli la scuola di appartenenza</small>
</Alert>

<div class="row">
	<div
		class="col"
		on:click={() => {
			choose("infanzia");
		}}
	>
		<Alert
			color={school === "infanzia" ? "primary" : "secondary"}
			style="padding: 4px; text-align: center;"
		>
			<h6>Infanzia</h6>
			<small
				>{#if school !== "infanzia"}seleziona{:else}-{/if}</small
			>
		</Alert>
	</div>

	<div
		class="col"
		on:click={() => {
			choose("primaria");
		}}
	>
		<Alert
			color={school === "primaria" ? "primary" : "secondary"}
			style="padding: 4px; text-align: center;"
		>
			<h6>Primaria</h6>
			<small
				>{#if school !== "primaria"}seleziona{:else}-{/if}</small
			>
		</Alert>
	</div>

	<div
		class="col"
		on:click={() => {
			choose("secondaria");
		}}
	>
		<Alert
			color={school === "secondaria" ? "primary" : "secondary"}
			style="padding: 4px; text-align: center;"
		>
			<h6>Secondaria</h6>
			<small
				>{#if school !== "secondaria"}seleziona{:else}-{/if}</small
			>
		</Alert>
	</div>
</div>

<FormGroup>
	<Input
		bind:checked={rappresentante}
		id="rappresentante"
		type="checkbox"
		label="Sono un rappresentante"
	/>
</FormGroup>

{#if school === 'primaria'}
	<Primaria {school} {rappresentante}></Primaria>
{:else if school === "secondaria"}
	<Secondaria {school} {rappresentante}></Secondaria>
{:else if school === "infanzia"}
	<Infanzia {school} {rappresentante}></Infanzia>
{/if}

