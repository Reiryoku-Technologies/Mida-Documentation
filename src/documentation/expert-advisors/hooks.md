# Hooks
## onStart()
Called before the actual start of the expert advisor.

## configure()
Called before the actual start of the expert advisor once per instance. The hook can be used
as asynchronous constructor.

## onTick()
Called by the internal market watcher when a new market tick is available for a watched symbol.

## onPeriodClose()
Called by the internal market watcher when a new period is closed for a watched symbol.

## onMarketClose()
Called by the internal market watcher when the market of a watched symbol is closed.

## onMarketOpen()
Called by the internal market watcher when the market of watched symbol opens.

## onBeforePlaceOrder()
Called before a order is placed by the EA, can be used to change or filter the order directives before
the order is sent to the broker.

## onClosingDeal()
Called when the volume of a position created by the EA is closed.

## onOpeningDeal()
Called when a new position is created or new volume is added to a position created by the EA.
