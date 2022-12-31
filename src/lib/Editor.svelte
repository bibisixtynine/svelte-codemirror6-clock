<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import {oneDark} from "@codemirror/theme-one-dark"

    let value = "";
    let counter = 0

    setInterval( ()=> {
        counter++
    },1000)
</script>

<div class="title">CodeMirror6 Editor {counter}</div>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<style>
    .title {
        text-align: center;
    }
</style>