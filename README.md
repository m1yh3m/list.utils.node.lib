# list.utils.node.lib

## installation

```bash

npm i @m1yh3m/list.utils.node.lib

```

## usage

### foldr

```javascript

f.foldr((i, j) => i + j, 0, [1, 2, 3, 4, 5, 6])
// 21

f.foldr((i, j) => i + j, '|', ['str', 'can', 'be', 'concatenated', 'too', 'you', 'know'])
// 'strcanbeconcatenatedtooyouknow|'

```

```javascript

from(0).take(10).next(i => i + 1)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

from(0).next(i => i + 1).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

take(10).next(i => i * i).from(0)
    // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    .next(i => i * i).from(0).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

```

```javascript

for (i of l.next(prev => prev * prev).take(10).from(2)) console.log(i)
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

for (i of l.from(-1).next(prev => prev * 2).take(5)) console.log(i)
// -1
// -2
// -4
// -8
// -16
// undefined

for (i of l.take(10).from(-1).next(prev => prev * 2)) console.log(i)
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

```javascript
const {from, take, next} = require("./select.js");

for (const x of from(1).take(10).next(prev => 2 * prev)) console.log(x)
// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512

for (const x of from(0).take(10).next(prev => prev % 2 === 0 ? prev : 2 * prev)) console.log(x)
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0
// 0

for (const x of from(1).take(10).next(prev => prev % 2 === 0 ? prev : 2*prev + 1)) console.log(x)
1
3
7
15
31
63
127
255
511
1023

```
