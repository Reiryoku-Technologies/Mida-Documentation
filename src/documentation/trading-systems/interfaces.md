# Interfaces
## configure()
Called before the start of the trading bot and once per instance. The hook should be used
as asynchronous constructor.

## onStart()
Called before the start of the trading bot.

## onTick()
Called when a new market tick is available for a watched symbol.

## onPeriodClose()
Called when a new candlestick is closed for a watched symbol.

## onMarketClose()
Called when the market of a watched symbol closes.

## onMarketOpen()
Called when the market of watched symbol opens.

## onTrade()
Called when a trade is executed.
