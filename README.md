# pg-game setup

- Everything gets built into a file called `bundle.js` which adds a function `pg()` to the window, which is called in `index.html`. If you open that html file, everything should run once it's built.
- `npm install` to get the dev dependencies
- `npm run build` within the directory to persistently build while editing
- I use `python -m SimpleHTTPServer 8000` and hit `localhost:8000` to serve it up easily
