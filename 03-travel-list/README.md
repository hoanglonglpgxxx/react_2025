# Handle states between multi CPNs

## State vs. Props

1. State: **Internal** data, owned by CPN
2. Props: **External** data, owned by parent CPN

## Global state and Local State

1. Local State

- State needed only by 1 or few CPNs
- State that is defined in a CPN and **only that CPN and child CPNs**have acccess to it (via props)

2. Global State

- State that many CPNs might need
- Shared state that is accessible to every CPN in the entire application
