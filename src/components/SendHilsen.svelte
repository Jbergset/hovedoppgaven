<script>
    import {onMount} from "svelte"
    import {db} from "../firebase.js";
    import firebase from "firebase/app"

    
    let hilsenTittel
    let textID
    let hilsen
    let hilsener = []
    let tittel

    let text

    //let tid
    


    onMount(
        async () => {
            
            hilsen = db.collection("hilsen")
            hilsen.onSnapshot(snap => {
                hilsener = snap.docs
            })
        }
    )
    const regHilsen = () => {
        hilsen
            .doc()
            .set({
                tittel: hilsenTittel,
                text: textID,
                tid: firebase.firestore.FieldValue.serverTimestamp()
        })
            tittel = ""
            text = ""
    }

</script>
<h1>Her kan du sende din hilsen til resten av landet</h1>
<div class="konteiner">
    <form on:submit|preventDefault={regHilsen}>
        <input bind:value={hilsenTittel} id="textTittel"placeholder="Tittel på din hilsning" required>
        <br> 
        <input type="text" id="textHilsen" bind:value={textID} placeholder="Skriv noe hyggelig her" required>
        <br>
        <button>Send din hilsen</button>
    </form>
</div>

<style>
    h1 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 22px;
    }

    .konteiner {
        display: grid;
        grid-template-columns: minmax(305px, 1fr);
    }
    #textHilsen {
        height: 220px;
        width: 60%;
        border-radius: 5px;
    }
    #textTittel {
        height: 50px;
        width: 350px;
        border-radius: 5px;
        font-size: 18px;
    }

</style>