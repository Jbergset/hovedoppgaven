<script>
    import {onMount} from "svelte";
    import {db} from "../firebase.js";

    
    let hilsen
    let hilsener = []

    onMount(
        async () => {
            hilsen = db.collection("hilsen")
            hilsen.onSnapshot(snap => {
                hilsener = snap.docs
            })
        }
    )
</script>

<h1>Hilsninger fra rundt omkring i landet</h1>
<div class="konteiner">
    {#each hilsener as hils}
        <div class="card">
            <h2>{hils.data().tittel}</h2>     
            <p>{hils.data().text}</p>
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