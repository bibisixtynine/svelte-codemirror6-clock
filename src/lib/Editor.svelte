<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
    let counter = 0

    setInterval( ()=> {
        counter++
    },1000)
</script>

<div class="title">CodeMirror6 Editor {counter}</div>

<CodeMirror bind:value lang={javascript()} />

<style>
    .title {
        text-align: center;
    }
</style>