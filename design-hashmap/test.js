const MyHashMap = require('./app');
const assert = require('../utils/assert');

var hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
assert.deepEqual(1, hashMap.get(1), `MyHashMap get 1:`);            // 返回 1
assert.deepEqual(-1, hashMap.get(3), `MyHashMap get 3:`);            // 返回 -1 (未找到)
hashMap.put(2, 1);         // 更新已有的值
assert.deepEqual(1, hashMap.get(2), `MyHashMap get 2:`);            // 返回 1 
hashMap.remove(2);         // 删除键为2的数据
assert.deepEqual(-1, hashMap.get(2), `MyHashMap get 2:`);            // 返回 -1 (未找到) 
