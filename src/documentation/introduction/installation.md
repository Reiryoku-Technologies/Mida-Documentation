# Installation
The Mida core is necessary to get started.
```console
npm i @reiryoku/mida
```

The Mida core comes with no plugins, trading platforms or other integrations installed.
It's necessary to install the plugin according to the trading platforms intended to use.

- `@reiryoku/mida-ctrader` is the Mida plugin allowing to use any cTrader broker

The Mida core comes with no default plugins or integrations.
Installing the plugin is necessary to use cTrader brokers.

Plugins must be registered in the application main entry point.

- **Binance Example**
```javascript
import { Mida, } from "@reiryoku/mida";

Mida.use(await import("@reiryoku/mida-binance"));
```
- **Kraken Example**
```javascript
import { Mida, } from "@reiryoku/mida";

Mida.use(await import("@reiryoku/mida-kraken"));
```
- **cTrader Example**
```javascript
import { Mida, } from "@reiryoku/mida";

Mida.use(await import("@reiryoku/mida-ctrader"));
```
