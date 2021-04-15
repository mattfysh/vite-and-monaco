<script context="module">
import MonacoWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker'
window.MonacoEnvironment = {
  getWorker() {
    return new MonacoWorker()
  },
}
const monacoPromise = import('monaco-editor-core')
</script>

<script>
import { onMount } from 'svelte'
import debounce from 'lodash/debounce'

export let source

let container
let monaco
let editor

onMount(async () => {
  monaco = await monacoPromise

  editor = monaco.editor.create(container, {
    value: source,
  })

  editor.onDidChangeModelContent(() => {
    source = editor.getValue()
  })
})


const handleResize = debounce(() => {
  if (editor) {
    editor.layout()
  }
}, 200)
</script>

<svelte:window on:resize={handleResize} />

<div class="editor" bind:this={container} />

<style>
.editor {
  width: 100%;
  height: 100%;
}
</style>
