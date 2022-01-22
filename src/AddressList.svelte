<script>
    export let school = undefined;
    export let subject = "";
    export let noSchool = false;

    function email(address) {
        if (noSchool) {
            return `mailto://${address}?subject=${encodeURI(subject)}`;
        } else {
            return `mailto://${address}?cc=rmic8ek00l@istruzione.it&subject=${encodeURI(subject)}`;
        }
    }
</script>

{#if school}
    <ul>
        {#if ["primaria", "secondaria"].includes(school)}
            <li>
                <a href={email("covidquaranta@icannacelli.edu.it")}>Quaranta (Balduino Geppina)</a>
            </li>
        {/if}
        {#if ["primaria", "secondaria"].includes(school)}
            <li>
                <a href={email("covidpiccinini@icannacelli.edu.it")}>Piccinini (Latini Maria Teresa)</a>
            </li>
        {/if}
        {#if ["primaria", "infanzia"].includes(school)}
            <li>
                <a href={email("covidsantoro@icannacelli.edu.it")}>Santoro (Cerasi Maria Grazia)</a>
            </li>
        {/if}
        {#if ["infanzia"].includes(school)}
            <li>
                <a href={email("covidsabin@icannacelli.edu.it")}>Sabin (Neri Giuseppa)</a>
            </li>
        {/if}
    </ul>
{/if}
