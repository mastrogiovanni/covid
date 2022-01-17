<script lang="ts">
	import { Accordion, AccordionItem } from "sveltestrap";
</script>

<h1>Sceglia la domanda che ti sta più a cuore</h1>

<Accordion>

	<AccordionItem>
		<h4 class="m-0" slot="header">Chi sono i referenti COVID?</h4>
		Sono persone dedicate a gestire le situazioni legate al COVID.
		Sono:
		<ul>
			<li>Santoro: <a href="mailto://cerasi.mariagrazia.dsp@icannacelli.edu.it">Cerasi MariaGrazia</a></li>
		</ul>
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Mio figlio è positivo, che devo fare?</h4>
		Invia il risultato del tampone alla referente Covid per email
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">C'è un positivo in classe: che devo fare?</h4>
		Aspetta che la referente Covid ti dica che fare:
		<ul>
			<li>o ti dirà di fare un tampone rapido antigenico (T0) se tuo figlio ha avuto contatti con il positivo nelle ultime 48 ore</li>
			<li>oppure non devi fare nulla</li>
		</ul>
	</AccordionItem>
	
	<AccordionItem>
		<h4 class="m-0" slot="header">La referente covid mi ha mandato una email dicendo di fare il tampone</h4>
		Fallo e mandale il risultato per email
	</AccordionItem>
	
	<AccordionItem>
		<h4 class="m-0" slot="header">Tampone T0: rapido o molecolare?</h4>
		Rapido antigenico
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Tampone T5: rapido o molecolare?</h4>
		Rapido antigenico
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Serve la ricetta?</h4>
		No
	</AccordionItem>

	<AccordionItem>
		<h4 class="m-0" slot="header">Dove posso fare il tampone?</h4>
		<ul>
			<li>In farmacia piazza Balsamo Crivelli</li>
			<li>Oppure fai la richiesta alla ASL2 <a href="http://tamponecovid-aslroma2.accetta.info/">qui</a> e poi vai al drive-in scelto (può volerci più tempo)</li>
		</ul>
	</AccordionItem>
</Accordion>



