<script>
  import Editor from 'editor/Editor.svelte'

  let source = 'console.log("test");\n'
</script>

<h1>Editor</h1>
<div class="editor">
  <Editor bind:source />
</div>

<style>
  .editor {
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    position: relative;
  }
</style>
