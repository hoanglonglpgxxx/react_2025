# States, Events and Forms Interactive Cpns

## 1. Not using func call in event handler cause it will run func right when the code is built

## 2. State is data that cpn can hold over time

## 3. Mechanic of state

- Dont do direct DOM manipulations cause React is declarative
- A CPN view is updated by **re-rendering** the CPN
- State is preserved thoughout re-renders (completely remove old view and create new view after state updated)
- So to update a view, we update state
