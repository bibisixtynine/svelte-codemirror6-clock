<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import {oneDark} from "@codemirror/theme-one-dark"

    let value = `
// press 'run' button to execute the code!
const node = document.getElementById('toto')
node.style.color = 'red'
node.style.textAlign = 'center'
`
    let counter = 0
    let errorState = "no error"

    function evaluate(code,fromId) {
        const fn = new Function(["myId"], code);
        let result = "ok";
        try {
            errorState = "NO ERROR"
            fn(fromId);
        } catch (error) {
            console.error("#ERROR# in Editor.svelte :", error);
            errorState = "ERROR"
        }
    };

/*
    setInterval( ()=> {
        counter++
        console.log({value})

    },1000)*/
</script>

<div class="title">CodeMirror6 {counter}<br>{errorState}</div>
<div class='run-button'>
    <button on:click={evaluate(value,"null")}>run</button>
</div>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<div id='toto'>
toto
</div>

<style>
    .title {
        text-align: center;
    }
    .run-button {
        text-align: center;
    }
</style>