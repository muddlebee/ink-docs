---
title: 'useEvents'
description: 'React hook for subscribing to events for a specific contract.'
---

# useEvents

A hook for subscribing to events for a specific contract. Only events emitted after the
subscription has been established will be available. See
[configuration](/frontend/configuration#configprops) to learn more about setting dApp defaults for how
long events should live in state before being removed.

## Usage

```tsx
import { useEvents } from 'useink'
import metadata from 'metadata.json'

const CONTRACT_ADDRESS = '..'

export const MyContractView: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata, 'rococo-contracts-testnet')
  useEvents(contract) // subscribe to events for a contract one time
  const ev = useEventFilter(CONTRACT_ADDRESS) // get events state for a contract

  return (
    <ul>
      {ev.map(e => (
        <li key={e.id}>
          {JSON.stringify(e)}
        </li>
      ))}
    </ul>
  )
}
```

## Return Value

```tsx
{
  events: DEFAULT_EVENTS,
  addEvent: () => void,
  removeEvent: (payload: { eventId: string, contractAddress: string }) => void,
}
```