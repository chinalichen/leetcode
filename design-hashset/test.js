const MyHashSet = require('./app');
const assert = require('../utils/assert');

var hashMap = new MyHashSet();
hashMap.add(1);
hashMap.add(2);
assert.deepEqual(true, hashMap.contains(1), `MyHashSet get 1:`);            // 返回 1
assert.deepEqual(false, hashMap.contains(3), `MyHashSet get 3:`);            // 返回 -1 (未找到)
hashMap.add(2, 1);         // 更新已有的值
assert.deepEqual(true, hashMap.contains(2), `MyHashSet get 2:`);            // 返回 1 
hashMap.remove(2);         // 删除键为2的数据
assert.deepEqual(false, hashMap.contains(2), `MyHashSet get 2:`);            // 返回 -1 (未找到) 
