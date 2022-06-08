# Introduction
Mida Playground is the plugin providing a local trading platform for paper trading and backtesting trading systems.

## The plugin
```javascript
import { Mida, } from "@reiryoku/mida";
import { PlaygroundPlugin, } from "@reiryoku/mida-playground";

Mida.use(new PlaygroundPlugin());
```

## Login example
The playground is a simulation of a local trading platform and offers the same interfaces
as any trading plaform.
```javascript
const myAccount = await Mida.login("Playground", {});
```

