<script>
    import { Accordion, AccordionItem } from "sveltestrap";
    import {
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
        SIGNIFICATO_QUARANTENA,
        SORVEGLIANZA_TESTING,
        T0_TIPO,
        T5_TIPO,
        USCITA_QUARANTENA,
    } from "./constant";

    export let rappresentante = false;
    export let questions = [];
</script>

<Accordion>
    {#if questions.includes(FIGLIO_POSITIVO)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Mio figlio è positivo, che devo fare?
            </h4>
            <ul>
                <li>
                    Comunicare subito la positività al referente Covid e in
                    copia alla segreteria tramite email:
                    <ul>
                        <li>
                            <a
                                href="mailto:covidpiccinini@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Comunicazione%20Posititivà"
                                >Piccinini (Latini Maria Teresa)</a
                            >
                        </li>
                        <li>
                            <a
                                href="mailto:covidsantoro@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Comunicazione%20Posititivà"
                                >Santoro (Cerasi Maria Grazia)</a
                            >
                        </li>
                    </ul>
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
    {/if}

    {#if questions.includes(ALUNNO_POSITIVO)}
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
                {#if rappresentante}
                    <li>
                        Tranquillizzare i genitori, la procedura è presa in
                        carico dalla scuola
                    </li>
                    <li>
                        Per accelerare la procedura di attivazione del testing
                        T0/T5, inviare una mail a supporto alla referente
                        Covid:
                        <ul>
                            <li>
                                <a
                                    href="mailto:covidpiccinini@icannacelli.edu.it"
                                    >Piccinini (Latini Maria Teresa)</a
                                >
                            </li>
                            <li>
                                <a href="mailto:covidsantoro@icannacelli.edu.it"
                                    >Santoro (Cerasi Maria Grazia)</a
                                >
                            </li>
                        </ul>
                    </li>
                {/if}
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(REFERENTE_MANDA_T0_T5)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                La referente Covid ha mandato una email alla classe dicendo di
                fare il tampone T0 e T5. Cosa fare?
            </h4>
            <ul>
                <li>
                    Si prenota, entro 24h dalla ricezione della mail, un tampone
                    tramite sito della Regione Lazio oppure nei centri e
                    farmacie autorizzate
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
                        href="https://www.salutelazio.it/prenota-drive-in"
                        >Prenota Drive-In</a
                    >
                </li>
                <li>
                    Chi decide di non effettuare il tampone va in quarantena per
                    10 giorni
                </li>
                {#if rappresentante}
                    <li>
                        Si evidenzia alla classe che è bene muoversi in
                        contemporanea sulla giornata per garantire il rientro in
                        contemporanea delliintero gruppo. Senza tutti i tamponi
                        non si può rientrare
                    </li>
                {/if}
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(T0_TIPO)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Tampone T0: rapido o molecolare?</h4>
            Rapido antigenico o molecolare
        </AccordionItem>
    {/if}

    {#if questions.includes(T5_TIPO)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Tampone T5: rapido o molecolare?</h4>
            Rapido antigenico o molecolare
        </AccordionItem>
    {/if}

    {#if questions.includes(SERVE_PRESCRIZIONE)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Serve la prescrizione medica/pediatra?
            </h4>
            Con o senza prescrizione medica
        </AccordionItem>
    {/if}

    {#if questions.includes(POSSO_RIENTRARE)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                In attesa di un referto (tampone molecolare o antigenico) posso
                rientrare a scuola?
            </h4>
            No
        </AccordionItem>
    {/if}

    {#if questions.includes(DOPO_T0)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Dopo il T0 cosa fare?</h4>
            <ul>
                <li>
                    Tutti i genitori inviano referto al referente Covid e in
                    copia alla segreteria tramite email:
                    <ul>
                        <li>
                            <a
                                href="mailto:covidpiccinini@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Piccinini (Latini Maria Teresa)</a
                            >
                        </li>
                        <li>
                            <a
                                href="mailto:covidsantoro@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Santoro (Cerasi Maria Grazia)</a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    Il rappresentante comunica la negatività dell'intero gruppo
                    o parziale (indicando i nomi mancanti), o eventuale secondo
                    positivo, alla referente Covid e in copia alla segreteria e
                    sul gruppo Whatsapp delle maestre
                </li>
                <li>
                    Il gruppo classe rientra in contemporanea, solo con tutti i
                    referti negativi inviati e con copia sul cellulare o
                    cartacea da far visionare all'ingresso
                </li>
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(DOPO_T5)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Dopo il T5 cosa fare?</h4>
            <ul>
                <li>
                    Tutti i genitori inviano referto al referente Covid e in
                    copia alla segreteria tramite email:
                    <ul>
                        <li>
                            <a
                                href="mailto:covidpiccinini@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Piccinini (Latini Maria Teresa)</a
                            >
                        </li>
                        <li>
                            <a
                                href="mailto:covidsantoro@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Santoro (Cerasi Maria Grazia)</a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    Il rappresentante comunica al referente Covid negatività
                    dell'intero gruppo o eventuale secondo positivo (Vedi T0)
                </li>
                <li>
                    Il gruppo classe rientra in contemporanea, solo con tutti i
                    referti negativi inviati e con copia sul cellulare o
                    cartacea da far visionare all'ingresso dal genitore. Per
                    rafforzare il controllo si raccomanda il genitore di
                    presentare copia sul cellulare o cartacea da far visionare
                    all'ingresso
                </li>
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(SECONDO_POSITIVO)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Cosa succede col 2° caso positivo?
            </h4>
            <ul>
                <li>Quarantena per tutti di 10 giorni</li>
                <li>La scuola attiva la DAD</li>
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(USCITA_QUARANTENA)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Come si esce dalla quarantena?</h4>
            <ul>
                <li>Tampone negativo rapido o molecolare dopo 10 giorni</li>
                <li>
                    Comunicazione del referto al referente Covid e in
                    copia alla segreteria tramite email:
                    <ul>
                        <li>
                            <a
                                href="mailto:covidpiccinini@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Piccinini (Latini Maria Teresa)</a
                            >
                        </li>
                        <li>
                            <a
                                href="mailto:covidsantoro@icannacelli.edu.it?cc=rmic8ek00l@istruzione.it&subject=Referto%20Covid"
                                >Santoro (Cerasi Maria Grazia)</a
                            >
                        </li>
                    </ul>
                </li>
                <li>
                    Ognuno rientra dopo aver comunicato referto negativo e con
                    copia sul cellulare o cartaceo da far visionare all'ingresso
                </li>
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(BIMBO_48_ORE)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Un bambino della classe è positivo ma è assente da scuola da più
                di 48h. Cosa devo fare?
            </h4>
            Si deve attendere disposizione della ASL
        </AccordionItem>
    {/if}

    {#if questions.includes(QUANDO_APPLICHI_QUARANTENA_SORVEGLIANZA)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Quando si applica la Quarantena, la Sorveglianza con testing e
                l'Auto-sorveglianza?
            </h4>
            Si applicano solo se il caso positivo Covid 19 ha frequentato la scuola:
            <ul>
                <li>
                    nei 2 giorni precedenti l'insorgenza dei sintomi per il
                    soggetto positivo sintomatico
                </li>
                <li>
                    nei 2 giorni precedenti l'esecuzione del tampone positivo
                    per il soggetto positivo asintomatico
                </li>
            </ul>
        </AccordionItem>
    {/if}

    {#if questions.includes(SORVEGLIANZA_TESTING)}
        <AccordionItem>
            <h4 class="m-0" slot="header">
                Cosa significa sorveglianza con testing?
            </h4>
            La sorveglianza con testing prevede l'effettuazione di un test T0 e,
            nel caso in cui non si riscontrino ulteriori positività, un test T5 da
            effettuare 5 giorni dopo il test T0. Evitare assembramenti, attività
            sportive in gruppo, partecipazione a feste, ecc. Chi non procede con
            i test T0 e T5 deve fare la quarantena e informare il Referente scolastico
        </AccordionItem>
    {/if}

    {#if questions.includes(SIGNIFICATO_QUARANTENA)}
        <AccordionItem>
            <h4 class="m-0" slot="header">Cosa significa Quarantena?</h4>
            Durante il periodo di quarantena si deve rimanere a casa, non si può
            uscire e non si devono ricevere visite per i 10 giorni previsti. Fatte
            salve le norme di distanziamento e quelle igienico sanitarie.
        </AccordionItem>
    {/if}
</Accordion>
