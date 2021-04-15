# issue 1 - css missing in prod mode only

- `npm run dev` will launch Vite dev mode, interact with the editor - it works as expected

next

- `npm run build && npm run serve` then open http://localhost:500 - notice that the editor is bugger, and no longer behaves as expected. This is due to missing CSS (specifically the `assets/editor.main.[hash].css file is not loaded)

NOTE: `node_modules/editor` is installed manually. If it were symlinked (e.g. by using "editor": "file:./editor" in package.json) things would work as expected. This is most likely due to Vite checking for local monorepo vs external.

# issue 2
