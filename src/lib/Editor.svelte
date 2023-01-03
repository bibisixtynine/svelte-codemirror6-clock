<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import {oneDark} from "@codemirror/theme-one-dark"
	import { onMount } from 'svelte';


    let value = `// press 'run' button to execute the code!
const node = document.getElementById('toto')
node.style.color = 'red'
node.style.textAlign = 'center'
let counter = 0
function print(param, n = node) {
  node.innerHTML += param
}
setInterval( ()=> {
  node.innerHTML = counter++
  print('<br>coucou')
}, 1000)
    `

    let code = undefined
    let counter = 0
    let errorState = "no error"
    let mounted = false

    onMount( ()=> {
        code = loadFromBrowserLocalStorage()

        if (code) {
            value = code;
        }
        mounted = true
    })

    $: evaluateCode(value)

    ///////////////////
    //
    // utils...
    //
    function loadFromBrowserLocalStorage() {
        if ( typeof localStorage !== 'undefined') {
            let code = localStorage.getItem("mysupercomputer-code")
            console.log('#########')
            console.log("# LOADED #")
            console.log("#########")
            console.log("###")
            console.log("##")
            console.log("#")
            console.log(code)
            return code
        }

    }

    function saveToBrowserLocalStorage(code) {
        if ( typeof localStorage !== 'undefined') {
            localStorage.setItem("mysupercomputer-code", code);
            console.log('#########')
            console.log("# SAVED #")
            console.log("#########")
            console.log("###")
            console.log("##")
            console.log("#")
            console.log(code)
        }
    }


    function resetUI() {
        return;
        let ui = document.getElementById('toto');
        removeChildren(ui)
        //ui.style.overflowY = '';
        //ui.style.height = '';
    }

    function resetTimers() {
        let maxId = setTimeout(function () {}, 0);

        for (var i = 0; i < maxId; i += 1) {
        clearTimeout(i);
        }
    }

    const evaluateCode = (code) => {
        if (!mounted) return

        resetUI();
        resetTimers();
        saveToBrowserLocalStorage(code)

        try {
            errorState = '✅ NO ERROR ✅'
            Function(code)(window);
        } catch (err) {
            errorState = '❌ ERROR ❌!'
            console.log('#########################')
            console.log('# EDITOR EVALUATE ERROR #')
            console.log('#########################')
            console.log('###')
            console.log('##')
            console.log('#')
            console.error(err);
        }
    };
    //
    // utils...
    //
    ///////////////////

</script>

<div class="title">CodeMirror6 {counter}<br>{errorState}</div>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />

<div id='toto'>
toto
</div>

<style>
    .title {
        text-align: center;
    }
</style>