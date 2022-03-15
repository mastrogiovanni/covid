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
                Fino a quattro casi di positività nella stessa classe,
                l'attività educativa e didattica prosegue in presenza per tutti.
            </li>
            <li>
                E’ previsto l'utilizzo di mascherine Ffp2 fino al decimo giorno
                successivo alla conoscenza dell’ultimo caso accertato, per
                docenti e alunni che abbiano superato i sei anni di età.
            </li>
            <li>
                In caso di comparsa di sintomi, è obbligatorio effettuare un
                test antigenico (rapido o autosomministrato) o un test
                molecolare. Se si è ancora sintomatici, il test va ripetuto al
                quinto giorno successivo alla data dell'ultimo contatto.
            </li>
            <li>
                In caso di utilizzo del test antigenico autosomministrato
                l’esito negativo è attestato tramite autocertificazione dei
                genitori dell’alunno.
            </li>
            {#if rappresentante}
                <li>
                    Tranquillizzare i genitori, la procedura è presa in carico
                    dalla scuola
                </li>
            {/if}
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
                L’attività didattica prosegue in presenza con autosorveglianza e
                utilizzo di mascherine FFP2 fino al decimo giorno successivo
                all’ultimo caso accertato, per gli alunni che: abbiano
                completato il ciclo vaccinale primario da meno di 120 giorni,
                siano guariti da meno di 120 giorni, siano guariti dopo aver
                completato il ciclo vaccinale primario, abbiano effettuato la
                dose di richiamo (booster), siano esenti dalla vaccinazione.
            </li>
            <li>
                Per i 5 giorni successivi all’ultimo caso accertato è prevista
                la verifica del Green pass.
            </li>
            <li>
                Per coloro che posseggano un’idonea certificazione di esenzione
                dalla vaccinazione, l’attività didattica prosegue in presenza,
                su richiesta di coloro che esercitano la responsabilità
                genitoriale.
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
                L’attività didattica prosegue in presenza con autosorveglianza e
                utilizzo di mascherine FFP2 fino al decimo giorno successivo
                all’ultimo caso accertato, per gli alunni che:
                <ul>
                    <li>
                        abbiano completato il ciclo vaccinale primario da meno
                        di 120 giorni,
                    </li>
                    <li>siano guariti da meno di 120 giorni,</li>
                    <li>
                        siano guariti dopo aver completato il ciclo vaccinale
                        primario,
                    </li>
                    <li>abbiano effettuato la dose di richiamo (booster),</li>
                    <li>siano esenti dalla vaccinazione.</li>
                </ul>
            </li>
            <li>
                Per i 5 giorni successivi all’ultimo caso accertato è prevista
                la verifica del Green pass.
            </li>
            <li>
                Per coloro che posseggano un’idonea certificazione di esenzione
                dalla vaccinazione, l’attività didattica prosegue in presenza,
                su richiesta di coloro che esercitano la responsabilità
                genitoriale.
            </li>
            <li>
                L’attività didattica prosegue tramite DID, per 5 giorni, per gli
                alunni:
                <ul>
                    <li>non vaccinati,</li>
                    <li>
                        che non abbiano completato il ciclo vaccinale primario,
                    </li>
                    <li>
                        che abbiano completato il ciclo vaccinale primario da
                        più di 120 giorni,
                    </li>
                    <li>che siano guariti da più di 120 giorni.</li>
                    <li>
                        Tali alunni sono sottoposti a quarantena precauzionale.
                        Per la riammissione in classe è necessario esibire
                        l’esito negativo di un test molecolare o antigenico. Per
                        i 5 giorni successivi al rientro è obbligatorio l’uso
                        della mascherina FFP2.
                    </li>
                </ul>
            </li>
        </ul>
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
        <h4 class="m-0" slot="header">Cosa significa autosorveglianza?</h4>
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
            Nella scuola primaria l’attività didattica si mantiene sempre in presenza,
            in regime di autosorveglianza e indipendentemente dal numero di casi
            positivi identificati nella classe, per gli alunni che rientrano nei
            seguenti casi: ciclo vaccinale primario da meno di 120 gg; guariti da
            meno di 120 gg; guariti dopo aver completato il ciclo vaccinale primario;
            hanno effettuato la dose di richiamo.
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Quale è il criterio per il conteggio dei casi positivi in classe?
        </h4>
        L’accertamento dei casi di positività, idonei a determinare le misure sanitarie
        e didattiche da applicare, deve avvenire con un intervallo massimo di 5 giorni
        dall’accertamento del caso precedente, quindi ad esempio se il caso 1 di
        positività viene riscontrato in data 10 Febbraio allora per fare incrementare
        il conteggio il secondo caso deve avvenire entro il 15 Febbraio. A partire
        dal 16 Febbraio riparte il conteggio. Non rientrano nel conteggio i casi
        di positività del personale educativo e scolastico.
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Quali altre disposizioni occorre considerare?
        </h4>
        La condizione sanitaria che consente la didattica in presenza nella scuola
        primaria può essere controllata dalle istituzioni scolastiche mediante l’applicazione
        mobile per la verifica delle certificazioni verdi COVID-19. Le disposizioni
        relative al distanziamento raccomandato di 2 metri durante il consumo del
        pasto sono revocate.
    </AccordionItem>
</Accordion>
