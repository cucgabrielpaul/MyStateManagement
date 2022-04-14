https://mystatemanagement.netlify.app/

The app: Write a simple react counter app with two buttons. One for incrementing, and one for decrementing the value. The value should be rendered as well.

The State manager:
- it should be generic from the counter app. (we should be able to use it on any app in theory)
- it should be able to support at least one store. A store handles the state for a specific feature or piece of business logic. (example: counter store).
- it should have a global state which can be mutated via actions.
- it should respect the single source of truth principle
- global state should be immutable

React + state manager:
- the state manager implementation should expose a custom hook which will be used in components
- components should be able to subscribe to store changes via the custom hook
- components should be able to dispatch/perform actions for changing the state with the help of the custom hook
