map-object-recursive
====================

**Map an object's keys and values into a new object. Deeply (tree structure doesn't change).**




Installation
------------

```sh
> npm install map-object-recursive
```




Usage
-----

```js
var mapObjectRecursive = require('map-object-recursive');

var newObject = mapObjectRecursive
    ( { foo: 'bar'
      , numbers:
        { one: 1
        , four: [4]
        }
      }
    , function (key, value, object) {
        return [key, value + value];
        }
    );
// » { foo: 'barbar'
//   , numbers:
//     { one: 2
//     , four: '44'
//     }
//   }
```




License
-------

[MIT][] © [Tomek Wiszniewski][].




<!-- Links -->
[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
