<script lang="ts">
	import {
		SIGNIFICATO_QUARANTENA,
		ALUNNO_POSITIVO,
		BIMBO_48_ORE,
		DOPO_T0,
		DOPO_T5,
		FIGLIO_POSITIVO,
		POSSO_RIENTRARE,
		QUANDO_APPLICHI_QUARANTENA_SORVEGLIANZA,
		REFERENTE_MANDA_T0_T5,
		SECONDO_POSITIVO,
		SERVE_PRESCRIZIONE,
		SORVEGLIANZA_TESTING,
		T0_TIPO,
		T5_TIPO,
		USCITA_QUARANTENA,
		REFERENTE_MANDA_QUARANTENA,
		ALUNNO_POSITIVO_INFANZIA,
		FIGLIO_POSITIVO_INFANZIA,
		TAMPONE_RIENTRO_QUARANTENA,
		FIGLIO_POSITIVO_SECONDARIA,
		QUANDO_APPLICHI_QUARANTENA_INFANZIA,
		REFERENTE_SECONDARIA_ALUNNO_DUE,
		REFERENTE_SECONDARIA_ALUNNO_TRE,
		FIGLIO_POSITIVO_SECONDARIA_UNO,
		FIGLIO_POSITIVO_SECONDARIA_DUE,
		FIGLIO_POSITIVO_SECONDARIA_TRE,
		REFERENTE_SECONDARIA_ALUNNO_UNO,
		QUANDO_APPLICHI_QUARANTENA_AUTOSORVEGLIANZA,
		SIGNIFICATO_AUTOSORVEGLIANZA,
	} from "./constant";
	import Questions from "./Questions.svelte";
	import Primaria from "./Primaria.svelte";
	import Infanzia from "./Infanzia.svelte";
	import {
		Button,
		FormGroup,
		Input,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
	} from "sveltestrap";
	import SvelteSeo from "svelte-seo";
	import { Alert } from "sveltestrap";
	import { onMount } from "svelte";

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
	<Alert color="danger">
		<h1>Guida rapida per la gestione Covid a scuola</h1>
		<small>Siamo lavorando per aggiornare il sito in base alle nuove regole ministeriali</small>
	</Alert>
{:else if school === "infanzia"}
	<Infanzia {school} {rappresentante}></Infanzia>
{/if}

