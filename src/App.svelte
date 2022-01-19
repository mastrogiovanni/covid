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
</Alert>

<Alert color="secondary">
	<h3>Scuola Primaria</h3>
</Alert>

<FormGroup>
	<Input
		bind:checked={rappresentante}
		id="rappresentante"
		type="checkbox"
		label="Sono un rappresentante"
	/>
</FormGroup>

<Questions {rappresentante} questions={primaria} />
