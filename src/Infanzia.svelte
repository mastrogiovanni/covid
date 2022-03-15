<script>
    import AddressList from "./AddressList.svelte";
    import { Accordion, AccordionItem } from "sveltestrap";

    export let school;
    export let rappresentante;
</script>

<Accordion>
    <AccordionItem>
        <h4 class="m-0" slot="header">Mio figlio è positivo, che devo fare?</h4>
        <ul>
            <li>
                Comunicare subito la positività al referente Covid e in copia
                alla segreteria tramite email:
                <AddressList {school} subject="Comunicazione Positività" />
            </li>
            <li>
                Comunicare al medico/pediatra la positività per attivare la
                quarantena precauzionale di 5gg.
            </li>
            <li>
                Richiedere l'attivazione della DID alla scuola (<a
                    href="https://www.icannacelli.edu.it/area-personale/circolari-2021-2022/1320-circolare-n-211-attivazione-did-e-dad"
                    >vedi circ. n. 211</a
                >)
            </li>
            <li>
                Un test antigenico positivo <b>non necessita</b> di conferma con
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
                Fino a quattro casi di positività nella stessa classe,
                l'attività educativa e didattica prosegue in presenza per tutti,
                con autosorveglianza.
            </li>
            <li>
                È previsto l'utilizzo di mascherine Ffp2 da parte dei docenti e
                degli educatori fino al decimo giorno successivo alla conoscenza
                dell'ultimo caso di positività.
            </li>
            <li>
                In caso di comparsa di sintomi, è obbligatorio effettuare un
                test antigenico (rapido o autosomministrato) o un test
                molecolare. Se si è ancora sintomatici, il test va ripetuto al
                quinto giorno successivo alla data dell'ultimo contatto.
            </li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            La referente Covid ha mandato una email alla classe dicendo che in
            classe ci sono 5 o più casi di positività. Cosa fare?
        </h4>
        <ul>
            <li>
                Il calcolo dei positivi viene effettuato escludendo docenti e
                personale scolastico e il 5° caso deve essere registrato a
                distanza di 5 gg dal 4°.
            </li>
            <li>
                L'attività educativa e didattica è sospesa per cinque giorni. La
                sospensione delle attività in presenza avviene se l’accertamento
                del quinto caso di positività si verifica entro cinque giorni
                dall’accertamento del caso precedente.
            </li>
            <li>La scuola attiva la DAD per 5 gg.</li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Come si rientra dalla sospensione di 5 gg?
        </h4>
        Alunni che:
        <ul>
            <li>
                abbiano completato il ciclo vaccinale primario da meno di 120
                giorni,
            </li>
            <li>siano guariti da meno di 120 giorni,</li>
            <li>
                siano guariti dopo aver completato il ciclo vaccinale primario,
            </li>
            <li>abbiano effettuato la dose di richiamo (booster),</li>
            <li>siano esenti dalla vaccinazione.</li>
        </ul>
        effettuano autosorveglianza di 5 giorni e effettuano test se compaiono sintomi.
        <br />
        Per tutti gli altri casi è prevista quarantena precauzionale di 5 giorni
        + tampone di uscita negativo. La riammissione in classe avviene con test
        antigenico o molecolare negativo effettuato in T5 (dopo 5gg) presso i centri
        accreditati.
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">Dove si effettuano i tamponi?</h4>
        <ul>
            <li>
                Si prenota un tampone tramite sito della Regione Lazio oppure
                nei centri e farmacie autorizzate.
            </li>
            <li>
                Tramite auto-prenotazione sul sito della ASL Roma 2
                https://tamponecovid-aslroma2.accetta.info/
            </li>
            <li>
                Tramite punti/centri autorizzati dalla Regione, incluse le
                farmacie, o sul sito www.salutelazio.it/prenota-drive-in.
            </li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Serve la prescrizione medico/pediatra?
        </h4>
        <ul>
            <li>Con o senza prescrizione medica.</li>
            <li>
                Con la prescrizione medica è possibile eseguire il test
                gratuitamente anche nei centri e farmacie autorizzate
            </li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            In attesa di un referto (tampone molecolare o antigenico) posso
            rientrare a scuola?
        </h4>
        <ul>
            <li>No</li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Come si esce dalla quarantena precauzionale?
        </h4>
        <ul>
            <li>Tampone negativo rapido o molecolare</li>
            <li>Comunicazione del referto via e-mail (vedi sopra).</li>
            <li>
                Ognuno rientra dopo aver comunicato referto negativo e con copia
                sul cellulare o cartaceo da far visionare all’ingresso.
            </li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Cosa significa quarantena precauzionale?
        </h4>
        Durante il periodo di quarantena si deve rimanere a casa, non si può uscire
        e non si devono ricevere visite per i 5 giorni previsti. Fatte salve le norme
        di distanziamento e quelle igienico sanitarie.
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">Cosa significa sorveglianza?</h4>
        <ul>
            <li>monitoraggio dei sintomi,</li>
            <li>
                alla prima comparsa di un sintomo effettuazione di un tampone
                (anche autosomministrato),
            </li>
            <li>
                evitare assembramenti, attività sportive in gruppo,
                partecipazione a feste, ecc.
            </li>
        </ul>
    </AccordionItem>
</Accordion>
