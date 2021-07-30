## Babel plugin for using `pair` ⚡️

This is the babel plugin that allows you to use `pair` in your JavaScript code. It is very similar to `pair` in Cpp.

### Example

```
const car = pair(model, speed);

const car = pair("MG Hector", "120");

const car = pair(`${model}`, speed); // model  = "santro"

```

to

```
const car = {
  first: model,
  second: speed
}

const car = {
  first: "MG Hector",
  second: "120"
}

const car = {
  first: "santro",
  second: "60"
}
```

## To-Do

1. Publish it as a npm module
2. Restrict user from adding more keys (only first and second key should be there).

## How to run

1. Clone this repo
2. Run ```npm install```
3. Start server ```npm run start```
4. Check the result in console

## Note

This is not a published plugin. It is just a demonstration of how ```pair``` can be used in JavaScript.

**It is still in development phase. A lot of things are still need to be added. 🥲**