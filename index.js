var mapObj = require('map-obj');

var mapObjectRecursive = function mapObjectRecursive (object, mappingFunction) { 'use strict';
    return mapObj(object, mapObjectRecursive._mapOrRecurse(mappingFunction));
    };

mapObjectRecursive._mapOrRecurse = function mapOrRecurse (mappingFunction) { 'use strict';
    return function mappingOrRecursing (key, value, object) {
        // If `value` is a plain object, recurse.
        if (  typeof value == 'object'
           && !(value instanceof Array)
           ) return [key, mapObj(value, mappingOrRecursing)];

        // Else invoke the mappingFunction.
        else return mappingFunction (key, value, object);
        };
    };


module.exports = mapObjectRecursive;
