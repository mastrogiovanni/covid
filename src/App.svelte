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

	let open = false;

	function toggle() {
		open = !open;
	}

	onMount(() => {
		let event = new Event("beforeinstallprompt");
		window.dispatchEvent(event);
	});

	const primaria = [
		FIGLIO_POSITIVO,
		ALUNNO_POSITIVO,
		REFERENTE_MANDA_T0_T5,
		T0_TIPO,
		T5_TIPO,
		SERVE_PRESCRIZIONE,
		POSSO_RIENTRARE,
		DOPO_T0,
		DOPO_T5,
		SECONDO_POSITIVO,
		USCITA_QUARANTENA,
		BIMBO_48_ORE,
		QUANDO_APPLICHI_QUARANTENA_SORVEGLIANZA,
		SORVEGLIANZA_TESTING,
		SIGNIFICATO_QUARANTENA,
	];

	const infanzia = [
		FIGLIO_POSITIVO_INFANZIA,
		ALUNNO_POSITIVO_INFANZIA,
		REFERENTE_MANDA_QUARANTENA,
		TAMPONE_RIENTRO_QUARANTENA,
		SERVE_PRESCRIZIONE,
		POSSO_RIENTRARE,
		USCITA_QUARANTENA,
		BIMBO_48_ORE,
		QUANDO_APPLICHI_QUARANTENA_INFANZIA,
		SIGNIFICATO_QUARANTENA,
	];

	const secondaria = [
		FIGLIO_POSITIVO,
		FIGLIO_POSITIVO_SECONDARIA_UNO,
		FIGLIO_POSITIVO_SECONDARIA_DUE,
		FIGLIO_POSITIVO_SECONDARIA_TRE,
		REFERENTE_SECONDARIA_ALUNNO_UNO,
		REFERENTE_SECONDARIA_ALUNNO_DUE,
		REFERENTE_SECONDARIA_ALUNNO_TRE,
		TAMPONE_RIENTRO_QUARANTENA,
		USCITA_QUARANTENA,
		BIMBO_48_ORE,
		QUANDO_APPLICHI_QUARANTENA_AUTOSORVEGLIANZA,
		SIGNIFICATO_AUTOSORVEGLIANZA,
		SIGNIFICATO_QUARANTENA,
	];

	let school = "primaria";

	let questions = [];
	let preview = false;

	onMount(() => {
		/*
		let s = localStorage?.getItem("school");
		if (['infanzia', 'primaria', 'secondaria'].includes(s)) {
			school = s;
		}
		else {
			school = "primaria"
		}
		*/
		if (new URLSearchParams(window.location.search).get("preview")) {
			preview = true;
			school = "secondaria";
		}
	});

	$: {
		if (school === "infanzia") {
			questions = infanzia;
		} else if (school === "primaria") {
			questions = primaria;
		} else if (school === "secondaria") {
			questions = secondaria;
		}
	}

	function choose(s) {
		school = s;
		if (localStorage) {
			localStorage.setItem("school", school);
		}
	}
</script>

<!--
<svelte:head>
	<script src='/index.js'></script>
</svelte:head>
-->

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
			/*
      authors: [
        "https://www.example.com/authors/@firstnameA-lastnameA",
        "https://www.example.com/authors/@firstnameB-lastnameB",
      ],
	  */
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

<Modal class="modal-install" isOpen={open} {toggle}>
	<ModalHeader {toggle}>Istalla</ModalHeader>
	<ModalBody>
		Questa pagina può essere istallata come applicazione. Vuoi procedere?
	</ModalBody>
	<ModalFooter>
		<Button color="primary" class="install-btn" on:click={toggle}
			>Do Something</Button
		>
		<Button color="secondary" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>

<Alert color="primary">
	<h1>Guida rapida per la gestione Covid a scuola</h1>
	<small>Scegli la scuola di appartenenza</small>
</Alert>

<div class="row">
	{#if preview}
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
	{/if}

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

	{#if preview}
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
	{/if}
</div>

<!--
<div class="row">
	<div class="col" style="{school === 'infanzia' ? 'background-color: green' : '' }; text-align:center; border-radius: 15px; margin: 10px; padding-top: 10px;" on:click={() => {school = 'infanzia'}}>
		<Alert color="primary" >
			<h3>Infanzia</h3>
			<small>{#if school !== 'infanzia'}clicca qui per selezionare{:else}-{/if}</small>
		</Alert>
	</div>
	<div class="col" style="{school === 'primaria' ? 'background-color: green' : '' }; text-align:center; border-radius: 15px; margin: 10px; padding-top: 10px;" on:click={() => {school = 'primaria'}}>
		<Alert color="secondary">
			<h3>Primaria</h3>
			<small>{#if school !== 'primaria'}clicca qui per selezionare{:else}-{/if}</small>
		</Alert>
	</div>
	<div class="col" style="{school === 'secondaria' ? 'background-color: green' : '' }; text-align:center; border-radius: 15px; margin: 10px; padding-top: 10px;" on:click={() => {school = 'secondaria'}}>
		<Alert color="success">
			<h3>Secondaria</h3>
			<small>{#if school !== 'secondaria'}clicca qui per selezionare{:else}-{/if}</small>
		</Alert>
	</div>
</div>
-->

<FormGroup>
	<Input
		bind:checked={rappresentante}
		id="rappresentante"
		type="checkbox"
		label="Sono un rappresentante"
	/>
</FormGroup>

<Questions {rappresentante} {questions} {school} />
