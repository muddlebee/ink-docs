---
title: decodeError
hide_title: true
description: A utility function to easily decode an error.
---

# decodeError

```tsx
export const MyContract: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata);
  const foo = useCall<MoodResult>(contract, 'foo');

  // Call foo once when dApp loads
  useEffect(() => { 
    foo?.send();
  }, []);

  // If result.ok is false then one of two things happened.
  // 1. One of many pallets in the Substrate runtime threw an error.
  // 2. Your contract called panic!
  // 3. Your contract called assert! and it failed
  if (!foo.result.ok) {
    return (
      <div>
        <p>An error occurred in runtime, not our contract function.</p>
        <p>
          {decodeError(getMood, {
            ContractTrapped: 'We just know something went wrong...', 
          })}
        </p>
      </div>
    )
  }

  return <p>all good...</p>
}
```
//...
```