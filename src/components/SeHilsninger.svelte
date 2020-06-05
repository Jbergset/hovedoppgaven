<script>
    import {onMount} from "svelte";
    import {db} from "../firebase.js";


    let hilsener = []

    onMount(
        async () => {
            try {
            db.collection("hilsen")
            .orderBy("tid", "desc")
            .onSnapshot(snap => {
                hilsener = snap.docs
                console.log(hilsener)
            })
            }catch(err){
                console.log(err)
            }
        }
    )

    const filterCountry = (e) => {

    }
</script>

<h1>Hilsninger fra rundt omkring i landet</h1>
<div class="konteiner">
    {#each hilsener as hils}
        <div class="card">
            <h2>{hils.data().tittel}</h2>     
            <p>{hils.data().text}</p>
            <p>{hils.data().tid}</p>
        </div>
    {:else}
        <dv>Loading...</dv>
    {/each}
</div>

<style>
   /* .tittel {
        font-display: bold;
        font-size: 35
    }
    */
    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 22px;
    }

    .konteiner {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
        grid-gap: 15px;
        
    }
    .card {
        border-style: dashed;
        margin: 5px;
    }
</style>