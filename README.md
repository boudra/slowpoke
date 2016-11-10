# Slowpoke

Minimal spinner react component

See a [live demo](https://cdn.rawgit.com/boudra/slowpoke/master/example/index.html)

See an [example](https://github.com/boudra/slowpoke/tree/master/example)

## How to use?

Install the package trough npm:


```sh
npm install --save react-slowpoke
```

Then you embed it into your react component like this:

```js
<SlowPoke type="round" show={true} />
```

Setting the `show` prop according to your needs.

At the moment only the `round` type is available, but there are some options you can pass as props to customize:

```js
{
  speed: 4,
  size: 30,
  weight: 19,
  foreground: 'rgba(0,0,0,0.7)',
  background: 'rgba(0,0,0,0.2)'
}
```
