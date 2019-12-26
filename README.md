# list.utils.node.lib

## installation

```bash

npm i @m1yh3m/list.utils.node.lib

```

## usage

```javascript

startingFrom(0).take(10).asNextIs(i => i + 1)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

startingFrom(0).asNextIs(i => i + 1).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

take(10).asNextIs(i => i * i).startingFrom(0)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

.asNextIs(i => i * i).startingFrom(0).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// ... so on

```

```javascript

for(i of l.asNextIs(i => i*i).take(10).startingFrom(2)) console.log(i)
// 2
// 4
// 16
// 256
// 65536
// 4294967296
// 18446744073709552000
// 3.402823669209385e+38
// 1.157920892373162e+77
// 1.3407807929942597e+154
// undefined

for(i of l.startingFrom(-1).asNextIs(i => i * 2).take(5)) console.log(i)
// -1
// -2
// -4
// -8
// -16
// undefined

for(i of l.take(10).startingFrom(-1).asNextIs(i => i * 2)) console.log(i)
// -1
// -2
// -4
// -8
// -16
// -32
// -64
// -128
// -256
// -512
// undefined

```
