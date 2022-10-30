# UntitledUI for Vue 3

UI for Vue3 from https://www.untitledui.com/

## Setup

```bash
# install dependencies
npm install @ksharonov/untitled-ui
```

## How it works

### Components

```ts
import { Text } from "@ksharonov/untitled-ui"

export default defineComponent({
    name: "MyComponent",
    components: {
        Text
    },
});
```

### Styling

```js
import "@ksharonov/untitled-ui/dist/style.css";
```