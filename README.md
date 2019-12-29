# list.utils.node.lib

## installation

```bash

npm i @m1yh3m/list.utils.node.lib

```

## usage

```javascript

from(0).take(10).next(i => i + 1)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

from(0).next(i => i + 1).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

take(10).next(i => i * i).from(0)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

.next(i => i * i).from(0).take(10)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// ... so on

```

```javascript

for(i of l.next(i => i*i).take(10).from(2)) console.log(i)
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

for(i of l.from(-1).next(i => i * 2).take(5)) console.log(i)
// -1
// -2
// -4
// -8
// -16
// undefined

for(i of l.take(10).from(-1).next(i => i * 2)) console.log(i)
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
