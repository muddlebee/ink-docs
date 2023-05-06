---
title: Transaction State Helpers
hide_title: true
description: Helper functions for checking the state of a transaction.
---

# Transaction State Helpers

There are a number of helper functions to check the status of a transaction. See
[useTx](/frontend/core/hooks/contracts/use-tx#transaction-state) for a full list of
Transaction state values and descriptions.

## shouldDisable

This function that returns `true` if a transaction state is `DryRun`, `PendingSignature`,
or `Broadcast`. It is good practice to disable a button that triggers a transaction unless
it has fully resolved. In a successful transaction, `Broadcast` state comes immediately
before `InBlock`, which is when contracts emit events and the transaction is most likely
to succeed. See `shouldDisableStrict` if you want to disable a button until it is
`Finalized`, which may be more appropriate for high stake dApps.

```tsx
import { shouldDisable } from 'useink';

export const Flipper = (contract) => {
    const flipTx = useTx(contract, 'flip');

    return (
        <button
            onClick={flipTx.signAndSend}
            disabled={shouldDisable(flipTx)}
        >
            {shouldDisable(flipTx) ? 'Flipping' : 'Flip!'}
        </button>
    )
}
```

## shouldDisableStrict

This function that returns `true` if a transaction state is `DryRun`, `PendingSignature`,
`Broadcast`, or `InBlock`. It is good practice to disable a button that triggers a
transaction unless it has fully resolved.

```tsx
import { shouldDisableStrict } from 'useink';

//... React code omitted
<button
    onClick={flipTx.signAndSend}
    disabled={shouldDisableStrict(flipTx)}
>
    {shouldDisableStrict(flipTx) ? 'Flipping' : 'Flip!'}
</button>
```

## hasAny

Returns a boolean if the transaction status has any of the arguments you pass in. Arguments must be of type `Status`;

```tsx
import { hasAny } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(hasAny(['Broadcast', 'Finalized']));
```

## isPendingSignature

Returns a boolean if the transaction status is `PendingSignature`. `PendingSignature` is
set when you call `signAndSend()` on a transaction, which opens up a browser wallet
extension modal for a user to sign. 

```ts
import { isPendingSignature } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');
flipTx.signAndSend();

console.log(isPendingSignature(flipTx));
```

## isNone

Returns a boolean if the transaction status is `None`.

```tsx
import { isNone } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isNone(flipTx));
```

## isDryRun

Returns `true` if the transaction status is `DryRun`. `DryRun` occurs immediately before a
transaction is sent to verify if it will succeed.

```ts
import { isDryRun } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isDryRun(flipTx));
```
