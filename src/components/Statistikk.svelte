<script>
    import {onMount} from "svelte";

    const URL = 'https://api.covid19api.com/summary'
    let countries = []
        

    onMount(async () => {
        try {
        const response = await fetch(URL);
        const json = await response.json();
            countries = json["Countries"];
            console.log(countries)
        } catch(err) {
            console.log(err)
        }
    });

    


</script>

<h1> Statistikk over antall Corona caser i verden</h1>

<div class="konteiner">
    {#each countries as country}
        <div class="card">
            <h1>{country.Country}</h1>
            <p>New Confirmed: {country.NewConfirmed}</p>
            <p>Total Confirmed: {country.TotalConfirmed}</p>
            <p>New Death: {country.NewDeaths}</p>
            <p>Total Deaths: {country.TotalDeaths}</p>
            <p>New Recovered: {country.NewRecovered}</p>
            <p>Total Recovered: {country.TotalRecovered}</p>
        </div>
    {/each}
</div>



<style>

    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 22px;
    }
     .konteiner {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-auto-rows: auto;
        grid-gap: 1rem;
    }
        
    .card {
        border: 2px solid #e7e7e7;
        border-radius: 4px;
        padding: .5rem;
    }  
</style>