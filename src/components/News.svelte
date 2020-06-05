<script>
    import { onMount } from "svelte";

    const API_KEY = "6fb8a769aee04be38d2c3e7c14e4d77c";
    const URL = `http://newsapi.org/v2/everything?q=coronavirus&from=2020-05-20&to=2020-06-20&sortBy=popularity&apiKey=${API_KEY}`;
        let articles = [];


    onMount(async () => {
        try {
        const response = await fetch(URL);
        const json = await response.json();
        articles = json["articles"];
        console.log(articles)
        } catch(err) {
            console.log(err)
        }
    });

    const filterCountry = id => {
        list = listen.filter()
    }

    
</script>

<h1>De største nyhetene angående Corona viruset fra ulike nyhets kilder !</h1>

<div class="konteiner">
        {#each articles as article}
            <div class="card">
                <img alt="artikkel bilder"src="{article.urlToImage}">
                <div class="card-body">
                    <h3>{article.title}</h3>
                    <p> {article.description} </p>
                    <a href="{article.url}">Les artikkelen</a>
                </div>
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
.konteiner > .card img {
    max-width: 100%;
}
</style>