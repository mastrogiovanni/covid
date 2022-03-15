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
            Un alunno della classe è positivo, che devo fare?
        </h4>
        L’attività didattica prosegue in presenza, con l’utilizzo di dispositivi
        di protezione delle vie respiratorie di tipo FFP2 (docenti e alunni) fino
        al decimo giorno successivo alla data dell’ultimo contatto con il soggetto
        confermato positivo al COVID-19.
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            2 o più alunni della classe sono positivi, che devo fare?
        </h4>
        <ul>
            <li>
                L’attività didattica prosegue in presenza con autosorveglianza e
                con l’utilizzo di dispositivi di protezione delle vie
                respiratorie di tipo FFP2 da parte dei docenti e degli alunni
                fino al decimo giorno successivo alla data dell’ultimo contatto
                con l’ultimo soggetto confermato positivo al COVID-19, per gli
                alunni che:

                <ul>
                    <li>
                        diano dimostrazione di avere concluso il ciclo vaccinale
                        primario;
                    </li>
                    <li>
                        siano guariti da meno di centoventi giorni o dopo aver
                        completato il ciclo vaccinale primario;
                    </li>
                    <li>abbiano effettuato la dose di richiamo;</li>
                    <li>
                        posseggano un’idonea certificazione di esenzione dalla
                        vaccinazione, su richiesta di coloro che esercitano la
                        responsabilità genitoriale.
                    </li>
                </ul>
            </li>
            <li>
                Per tutti gli altri alunni si applica la DID per la durata di
                cinque giorni. Tali alunni sono sottoposti a quarantena
                precauzionale. Per la riammissione in classe è necessario
                esibire l’esito negativo di un test molecolare o antigenico. Per
                i 5 giorni successivi al rientro è obbligatorio l’uso della
                mascherina FFP2.
            </li>
        </ul>
    </AccordionItem>

    <AccordionItem>
        <h4 class="m-0" slot="header">
            Come si effettua il tampone di rientro dalla quarantena
            precauzionale?
        </h4>
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
            Quando si applicano la quarantena precauzionale e
            l’autosorveglianza?
        </h4>
        Si applicano solo se il caso positivo Covid 19 ha frequentato la scuola:
        <ul>
            <li>
                nei 2 giorni precedenti l’insorgenza dei sintomi per il soggetto
                positivo sintomatico
            </li>
            <li>
                nei 2 giorni precedenti l’esecuzione del tampone positivo per il
                soggetto positivo asintomatico
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
        Nella scuola secondaria l’attività didattica si mantiene sempre in presenza,
        in regime di autosorveglianza e indipendentemente dal numero di casi positivi
        identificati nella classe, per gli alunni che rientrano nei seguenti casi:
        ciclo vaccinale primario da meno di 120 gg; guariti da meno di 120 gg; guariti
        dopo aver completato il ciclo vaccinale primario; hanno effettuato la dose
        di richiamo.
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
