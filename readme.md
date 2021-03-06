# issue 1 - in prod mode, CSS is missing

- `npm run dev` will launch Vite dev mode, interact with the editor - it works as expected (but see issue 2 below)

- `npm run build && npm run serve` then open http://localhost:500 - notice that the editor is bugged, and pretty much unusable. This is due to missing CSS (specifically the `assets/editor.main.[hash].css file is not loaded)

NOTE: `node_modules/editor` is installed manually. If it were symlinked (e.g. by using "editor": "file:./editor" in package.json) things would work as expected. Presumbly because vite changes behaviour based on whether the dependency is local to the monorepo, or external (e.g. downloaded from npm registry)

# issue 2 - in dev mode, every CSS file from `monaco-editor-core` is a separate HTTP request

When prebundling external dependencies (using esbuild?), a single CSS bundle is not created. Instead, each referenced CSS file creates a new discrete HTTP request. This is unexpected, as esbuild supports creating a CSS bundle when bundling a JS entrypoint file.

It also slows down the page, given the overhead associated with each CSS HTTP request. This is especially noticeable when Chrome DevTools are open.

# issue 3 - importer of worker chunk is bundled inside worker chunk

Editor.svelte imports a worker via `import MonacoWorker from 'monaco-editor-core/esm/vs/editor/editor.worker?worker'`

As expected, this creates a new chunk, however the transpiled Editor.svelte code is also included in the new chunk (only), and not in the main chunk. The CSS in Editor.svelte is also bundled inside a "worker.css" file.
