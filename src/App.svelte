<script lang="ts">
	import { Accordion, AccordionItem } from "sveltestrap";
	import SvelteSeo from "svelte-seo";
	import { Alert } from 'sveltestrap';
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

<Alert color="primary">
	<h1>Guida rapida per la gestione Covid a scuola</h1>
</Alert>

<Alert color="secondary">
	<h3>Scuola Primaria</h3>
</Alert>


<Accordion>
	<AccordionItem>
		<h4 class="m-0" slot="header">Chi sono i referenti COVID?</h4>
		<ul>
			<li>
				Piccinini: <a href="mailto://covidpiccinini@icannacelli.edu.it"
					>Latini Maria Teresa</a
				>
			</li>
			<li>
				Sabin: <a href="mailto://covidsabin@icannacelli.edu.it"
					>Neri Giuseppa</a
				>
			</li>
			<li>
				Santoro: <a href="mailto://covidsantoro@icannacelli.edu.it"
					>Cerasi Maria Grazia</a
				>
			</li>
			<li>
				Quaranta: <a href="mailto://covidquaranta@icannacelli.edu.it"
					>Balduino Geppina</a
				>
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Mio figlio è positivo, che devo fare?</h4>
		<ul>
			<li>
				Comunicare subito la positività alla scuola
				(rmic8ek00l@istruzione.it) e alla referente Covid (vedi sopra)
				tramite email.
			</li>
			<li>
				Comunicare al medico/pediatra la positività per attivare la
				Quarantena del bambino.
			</li>
			<li>
				Richiedere l'attivazione della DAD alla scuola (<a
					href="https://www.icannacelli.edu.it/area-personale/circolari-2021-2022/1320-circolare-n-211-attivazione-did-e-dad"
					>vedi circ. n. 211</a
				>)
			</li>
			<li>
				Un test antigenico positivo non necessita di conferma con
				tampone molecolare
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Un bambino della classe è positivo, che devo fare?
		</h4>
		<ul>
			<li>
				Attendere che la scuola comunichi il caso di positività alla
				classe
			</li>
			<li>
				Attendere che il/la rappresentante dia comunicazione di come
				procedere
			</li>
			<li>
				La comunicazione della scuola viene inviata all'account
				dell'alunno
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			La referente Covid ha mandato una email alla classe dicendo di fare
			il tampone T0 e T5. Cosa fare?
		</h4>
		<ul>
			<li>
				Si prenota, entro 24h dalla ricezione della mail, un tampone
				tramite sito della Regione Lazio oppure nei centri e farmacie
				autorizzate
			</li>
			<li>
				Tramite auto-prenotazione sul <a
					href="https://tamponecovid-aslroma2.accetta.info/"
					>sito della ASL Roma 2</a
				>
			</li>
			<li>
				Tramite punti/centri autorizzati dalla Regione, incluse le
				farmacie, o sul sito <a
					href="www.salutelazio.it/prenota-drive-in"
					>Prenota Drive-In</a
				>
			</li>
			<li>
				Chi decide di non effettuare il tampone va in quarantena per 10
				giorni
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Tampone T0: rapido o molecolare?</h4>
		Rapido antigenico o molecolare
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Tampone T5: rapido o molecolare?</h4>
		Rapido antigenico o molecolare
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Serve la prescrizione medica/pediatra?
		</h4>
		Con o senza prescrizione medica
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			In attesa di un referto (tampone molecolare o antigenico) posso
			rientrare a scuola?
		</h4>
		No
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Dopo il T0 cosa fare?</h4>
		<ul>
			<li>
				Tutti i genitori inviano referto al referente Covid della scuola
				(vedi sopra)
			</li>
			<li>
				Il rappresentante comunica alla referente Covid negatività
				dell'intero gruppo o eventuale secondo positivo
			</li>
			<li>
				Il gruppo classe rientra in contemporanea, solo con tutti i
				referti inviati e con copia sul cellulare da far visionare
				all'ingresso
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Dopo il T5 cosa fare?</h4>
		<ul>
			<li>
				Tutti i genitori inviano referto al referente Covid della scuola
				(vedi sopra)
			</li>
			<li>
				Il rappresentante comunica al referente Covid negatività
				dell'intero gruppo o eventuale secondo positivo
			</li>
			<li>
				Il gruppo classe rientra in contemporanea, solo con tutti i
				referenti inviati e con copia sul cellulare da far visionare
				all'ingresso
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Cosa succede col 2° caso positivo?</h4>
		<ul>
			<li>Quarantena per tutti di 10 giorni</li>
			<li>La scuola attiva la DAD</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Come si esce dalla quarantena?</h4>
		<ul>
			<li>Tampone negativo rapido o molecolare dopo 10 giorni</li>
			<li>Comunicazione del referto via e-mail (vedi sopra)</li>
			<li>
				Ognuno rientra dopo aver comunicato referto negativo e con copia
				sul cellulare da far visionare all'ingresso
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Un bambino della classe è positivo ma è assente da scuola da più di
			48h. Cosa devo fare?
		</h4>
		La classe non è coinvolta, ma i bambini devono comunque monitorare l'eventuale
		comparsa di sintomi
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Quando si applica la Quarantena, la Sorveglianza con testing e
			l'Auto-sorveglianza?
		</h4>
		Si applicano solo se il caso positivo Covid 19 ha frequentato la scuola:
		<ul>
			<li>
				nei 2 giorni precedenti l'insorgenza dei sintomi per il soggetto
				positivo sintomatico
			</li>
			<li>
				nei 2 giorni precedenti l'esecuzione del tampone positivo per il
				soggetto positivo asintomatico
			</li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Cosa significa sorveglianza con testing?
		</h4>
		La sorveglianza con testing prevede l'effettuazione di un test T0 e, nel
		caso in cui non si riscontrino ulteriori positività, un test T5 da effettuare
		5 giorni dopo il test T0. Evitare assembramenti, attività sportive in gruppo,
		partecipazione a feste, ecc. Chi non procede con i test T0 e T5 deve fare
		la quarantena e informare il Referente scolastico
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Cosa significa Quarantena?</h4>
		Durante il periodo di quarantena si deve rimanere a casa, non si può uscire
		e non si devono ricevere visite per i 10 giorni previsti. Fatte salve le
		norme di distanziamento e quelle igienico sanitarie.
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">
			Si può andare a scuola in attesa del tampone T0 e del T5?
		</h4>
		No. L'attività in presenza è sospesa in attesa dell'esecuzione del test T0
		e T5 da parte del gruppo classe
	</AccordionItem>
</Accordion>
