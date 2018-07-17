var malin52045 = function(){


  //将数组分割为长度为size的+1维数组
  function chunk(array,size=1) {
    let result = []
    let temp = []
    for(let i = 0;i < array.length;i++){
      let n = i % size
      temp.push(array[i])
      if(n == size - 1){
        result.push(temp)
        temp = []
      }
    }
    if(temp[0]) result.push(temp)
    return result
  }

  function chunk(ary,size=1){
    let result = []
    let index = 0
    while(index < ary.length){
      result.push(ary.slice(index,index + size))
      index += size
    }
    return result
  }


  //移除数组中所有错误的值：false, null, 0, "", undefined, and NaN
  function compact(array){
    let result = []
    for(let i = 0;i < array.length;i++){
      if(array[i]) result.push(array.slice(i,1)[0])
    }
    return result
  }

  function compact(ary){
    let result = []
    ary.forEach(function(item,index){
      if(item) result.push(ary.slice(index,1)[0])
    })
  }

  function compact(ary){
    return ary.filter(item => item)
  }
  var compact = ary => ary.filter(item => item)


  //将数组连接，展开深度 +1
  function concat(array){
    let result = []
    for(let i = 0;i < arguments.length;i++){
      result = result.concat(arguments(i))
    }
    return result
  }


  // 找出附一个数组中不同于第二个数组的值，返回一个新的数组
  function difference(array1,array2){
    if(arguments.length == 1) return Array.from(array1)
    let result = []
    // let obj2 = {}
    // for(let i in array2){
    //   obj2[array2[i]] = 1
    // }
    for(let i = 0;i < array1.length;i++){
      // if(!(array1[i] in obj2)) result.push(array1[i])
      if(array2.indexOf(array1[i]) == -1) result.push(array1[i])
    }
    return result
  }


  //将数组通过第三个参数转化后 比较出不同的值，返会新的数组
  function differenceBy(array1,array2,iteratee){
    if(iteratee == undefined) return difference(array1,array2)
    let nums2 = array2.slice(0)
    let result = []
    if(typeof iteratee == 'function'){
      for(let i in nums2){
        nums2[i] = iteratee(nums2[i])
      }      
      // let obj2 = {}
      // for(let i in nums2){
      //   obj2[nums2[i]] = 1
      // }
      for(let i in array1){
        // if(!(iteratee(array1[i]) in obj2)) result.push(array1[i])
        if(nums2.indexOf(iteratee(array1[i])) == -1) result.push(array1[i])
      }
    }
    if(typeof iteratee == 'string'){
      for(let i in nums2){
        nums2[i] = nums2[i][iteratee]
      }
      for(let i in array1){
        if(nums2.indexOf(array1[i][iteratee]) == -1) result.push(array1[i])
      }
    }
    return result
  }


  //function differenceWith(){}



  //删除数组的前n项
  function drop(ary,n){
    if(n == undefined) return ary.slice(1)
    return ary.slice(n)
  }


  //删除数组的末尾n项
  function dropRight(ary,n){
    if(n == undefined) return ary.slice(0,ary.length - 1)
      return ary.slice(0,ary.length - n)
  }
  

  //返回不满足pre条件的数组内容
  function dropRightWhile(ary,pre){
    let result = []
    if(typeof pre == 'function'){
      for(let i in ary){
        if(!pre(ary[i])) result.push(ary[i])
      } 
    }
    if(typeof pre == 'object'){
      for(let i in ary){
        for(let j in ary[i]){
          if(!((j in pre) && (ary[i][j] == pre[j]))){
            result.push(ary[i]) 
            break
          }       
        }
      }
    }
    return result
  }


  function fill(){}


  function findIndex(){}
  function findLastIndex(){}
  function flatten(){}
  function flattenDeep(){}
  function flattenDepth(){}
  function fromPairs(){}
  function head(){}
  function indexOf(){}
  function initial(){}
  function intersection(){}
  function intersectionBy(){}
  function intersectionWith(){}
  function join(){}
  function last(){}
  function lastIndexOf(){}
  function nth(){}
  function pull(){}
  function pullAll(){}
  function pullAllBy(){}
  function pullAllWith(){}
  function reverse(){}
  function sortedIndex(){}
  function sortedIndexBy(){}
  function sortedIndexOf(){}
  function sortedLastIndex(){}
  function sortedLastIndexBy(){}
  function sortedLastIndexOf(){}
  function sortedUniq(){}
  function sortedUniqBy(){}
  function tail(){}
  function take(){}
  function takeRight(){}
  function takeRightWhile(){}
  function takeWhile(){}
  function union(){}
  function unionBy(){}
  function unionWith(){}
  function uniq(){}
  function uniqBy(){}
  function uniqWith(){}
  function unzip(){}
  function unzipWith(){}
  function without(){}
  function xor(){}
  function xorBy(){}
  function xorWith(){}
  function zip(){}
  function zipObject(){}
  function zipObjectDeep(){}
  function zipWith(){}
  function countBy(){}
  function every(){}
  function filter(){}
  function find(){}
  function findLast(){}
  function flatMap(){}
  function flatMapDeep(){}
  function flatMapDepth(){}
  function forEach(){}
  function forEachRight(){}
  function groupBy(){}
  function includes(){}
  function invokeMap(){}
  function keyBy(){}
  function map(){}
  function orderBy(){}
  function partition(){}
  function reduce(){}
  function reduceRight(){}
  function reject(){}
  function sample(){}
  function sampleSize(){}
  function shuffle(){}
  function size(){}
  function some(){}
  function sortBy(){}
  function defer(){}
  function delay(){}
  function castArray(){}
  function conformsTo(){}
  function eq(){}
  function gt(){}
  function gte(){}
  function isArguments(){}
  function isArray(){}
  function isArrayBuffer(){}
  function isArrayLike(){}
  function isArrayLikeObject(){}
  function isBoolean(){}
  function isDate(){}
  function isElement(){}
  function isEmpty(){}


  function isEqual(val1,val2){
    if(val1 === val2) return true
    if(val1 !== val1 && val2 !== val2) return true
    if(Array.isArray(val1) && Array.isArray(val2)){
      if(val1.length !== val2.length) return false
      val1.forEach(function(item,index){
        if(!(isEqual(item,val2[index]))) return false
      })
      return true
    }

    if(typeof val1 === 'object' && typeof val2 === 'object'){
      let nums1 = []
      let nums2 = []
      for(let i in val1){
        nums1.push(i)
      }
      for(let i in val2){
        nums2.push(i)
      }
      if(nums1.length !== nums2.length) return false
      for(let i of nums1){
        if(!(i in val2)) return false
        if(!(isEqual(val1[i].val2[i]))) return false
      }
      return true
    }
  }


  function isEqualWith(){}
  function isError(){}
  function isFinite(){}
  function isFunction(){}
  function isInteger(){}
  function isLength(){}
  function isMap(){}
  function isMatch(){}
  function isMatchWith(){}
  function isNaN(){}
  function isNative(){}
  function isNil(){}
  function isNull(){}
  function isNumber(){}
  function isObject(){}
  function isObjectLike(){}
  function isPlainObject(){}
  function isRegExp(){}
  function isSafeInteger(){}
  function isSet(){}
  function isString(){}
  function isSymbol(){}
  function isTypedArray(){}
  function isUndefined(){}
  function isWeakMap(){}
  function isWeakSet(){}
  function lt(){}
  function lte(){}
  function toArray(){}
  function toFinite(){}
  function toInteger(){}
  function toLength(){}
  function toNumber(){}
  function assign(){}
  function toSafeInteger(){}
  function add(){}
  function ceil(){}
  function divide(){}
  function floor(){}
  function max(){}
  function maxBy(){}
  function mean(){}
  function meanBy(){}
  function min(){}
  function minBy(){}
  function multiply(){}
  function round(){}
  function subtract(){}

  //返回数组和
  function sum(ary){
    let sum = 0
    ary.forEach(function(temp){
      sum += temp
    })
    return sum
  }

  //返回数组内某条件和
  function sumBy(ary,ident){
    let sum = 0
    if(arguments.length === 1) sum(ary)
    if(typeof ident == 'function'){
      ary.forEach(function(temp){
        sum += ident(temp)      
      })
    }else if(typeof ident === 'string'){
      ary.forEach(function(temp){
        sum += temp[ident]
      })
    }
    return sum
  }

  function clamp(){}
  function inRange(){}
  function random(){}
  function assignIn(){}
  function at(){}
  function defaults(){}
  function defaultsDeep(){}
  function findKey(){}
  function findLastKey(){}
  function forIn(){}
  function forInRight(){}
  function forOwn(){}
  function forOwnRight(){}
  function functions(){}
  function functionsIn(){}
  function get(){}
  function has(){}
  function hasIn(){}
  function invert(){}
  function invertBy(){}
  function invoke(){}
  function keys(){}
  function keysIn(){}
  function mapKeys(){}
  function mapValues(){}
  function merge(){}
  function mergeWith(){}
  function omit(){}
  function omitBy(){}
  function pick(){}
  function pickBy(){}
  function result(){}
  function set(){}
  function setWith(){}
  function toPairs(){}
  function toPairsIn(){}
  function transform(){}
  function unset(){}
  function update(){}
  function updateWith(){}
  function values(){}
  function valuesIn(){}
  function camelCase(){}
  function capitalize(){}
  function deburr(){}
  function endsWith(){}
  function escape(){}
  function escapeRegExp(){}
  function kebabCase(){}
  function lowerCase(){}
  function lowerFirst(){}
  function pad(){}
  function padEnd(){}
  function padStart(){}
  function parseInt(){}
  function repeat(){}
  function replace(){}
  function snakeCase(){}
  function split(){}
  function startCase(){}
  function startsWith(){}
  function toLower(){}
  function toUpper(){}
  function trim(){}
  function trimEnd(){}
  function trimStart(){}
  function truncate(){}
  function unescape(){}
  function upperCase(){}
  function upperFirst(){}
  function words(){}
  function bindAll(){}
  function defaultTo(){}

  //按步骤返回start到end之间的值
  function range(start,end,step = 1){
    let result = []
    if(arguments.length == 1) {
      start = 0
      end = arguments[0]
    }
    if(step === 0) {
      for(let i = 0;i < end;i++){
        result.push(1)
      }
      return result
    }
    for(let i = start;Math.abs(i) < Math.abs(end);i += step){
      result.push(i)
    }
    return result
  }

  //按步骤反向返回start到end之间的值
  function rangeRight(start,end,step = 1){
    let result = []
    if(arguments.length == 1) {
      start = 0
      end = arguments[0]
    }
    if(step === 0) {
      for(let i = 0;i < end;i++){
        result.unshift(1)
      }
      return result
    }
    for(let i = start;Math.abs(i) < Math.abs(end);i += step){
      result.unshift(i)
    }
    return result
  }


  function mixin(){}
  function times(){}
  function toPath(){}
  function uniqueId(){}
  function cloneDeep(){}
  function identity(){}
  function pullAt(){}
  function matches(){}
  function property(){}
  function ary(){}
  function unary(){}

  //返回一个与参数函数 return相反的函数
  function negate(pre){
    reture function(...arg){
      return !pre(...arg)
    }
  }
  var negate = pre => (...arg) => !pre(...arg)

  function once(){}
  function spread(){}
  function flip(){}
  function conforms(){}
  function constant(){}
  function flow(){}
  function method(){}
  function methodOf(){}
  function nthArg(){}
  function propertyOf(){}
  function arrayToLinkedList(){}
  function parseJson(){}
  function dellTo3355(){}
  function isPrime(){}
  function 最大公约数(){}
  function 大整数相加(){}
  function n-m之间的素数(){}
  function 求数组最大项(){}
  function 1-n的和(){}
  function 1-n以内的完全数(){}
  function abc排序(){}
  function fibb(){}
  function m的n次方(){}
  function Sin-Taylor(){}
  function 第一次只出现一次的字符(){}
  function 反向输出一个三位数(){}
  function 分解质因数(){}
  function 猴子选王(){}
  function 评委打分(){}
  function 敲7(){}
  function 求平方根(){}
  function 日历(){}
  function 四舍五入(){}
  function 向量点积(){}
  function 字符串展开(){}
  function 最小公倍数(){}
  function 最小的能被1-n整除的数(){}












  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy : differenceBy,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    fill: fill,
    findIndex: findIndex,
    findLastIndex: findLastIndex,
    flatten: flatten,
    flattenDeep: flattenDeep,
    flattenDepth: flattenDepth,
    fromPairs: fromPairs,
    head: head,
    indexOf: indexOf,
    initial: initial,
    intersection: intersection,
    intersectionBy: intersectionBy,
    intersectionWith: intersectionWith,
    join: join,
    last: last,
    lastIndexOf: lastIndexOf,
    nth: nth,
    pull: pull,
    pullAll: pullAll,
    pullAllBy: pullAllBy,
    pullAllWith: pullAllWith,
    reverse: reverse,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
    sortedIndexOf: sortedIndexOf,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexBy: sortedLastIndexBy,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    tail: tail,
    take: take,
    takeRight: takeRight,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    union: union,
    unionBy: unionBy,
    unionWith: unionWith,
    uniq: uniq,
    uniqBy: uniqBy,
    uniqWith: uniqWith,
    unzip: unzip,
    unzipWith: unzipWith,
    without: without,
    xor: xor,
    xorBy: xorBy,
    xorWith: xorWith,
    zip: zip,
    zipObject: zipObject,
    zipObjectDeep: zipObjectDeep,
    zipWith: zipWith,
    countBy: countBy,
    every: every,
    filter: filter,
    find: find,
    findLast: findLast,
    flatMap: flatMap,
    flatMapDeep: flatMapDeep,
    flatMapDepth: flatMapDepth,
    forEach: forEach,
    forEachRight: forEachRight,
    groupBy: groupBy,
    includes: includes,
    invokeMap: invokeMap,
    keyBy: keyBy,
    map: map,
    orderBy: orderBy,
    partition: partition,
    reduce: reduce,
    reduceRight: reduceRight,
    reject: reject,
    sample: sample,
    sampleSize: sampleSize,
    shuffle: shuffle,
    size: size,
    some: some,
    sortBy: sortBy,
    defer: defer,
    delay: delay,
    castArray: castArray,
    conformsTo: conformsTo,
    eq: eq,
    gt: gt,
    gte: gte,
    isArguments: isArguments,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isArrayLike: isArrayLike,
    isArrayLikeObject: isArrayLikeObject,
    isBoolean: isBoolean,
    isDate: isDate,
    isElement: isElement,
    isEmpty: isEmpty,
    isEqual: isEqual,
    isEqualWith: isEqualWith,
    isError: isError,
    isFinite: isFinite,
    isFunction: isFunction,
    isInteger: isInteger,
    isLength: isLength,
    isMap: isMap,
    isMatch: isMatch,
    isMatchWith: isMatchWith,
    isNaN: isNaN,
    isNative: isNative,
    isNil: isNil,
    isNull: isNull,
    isNumber: isNumber,
    isObject: isObject,
    isObjectLike: isObjectLike,
    isPlainObject: isPlainObject,
    isRegExp: isRegExp,
    isSafeInteger: isSafeInteger,
    isSet: isSet,
    isString: isString,
    isSymbol: isSymbol,
    isTypedArray: isTypedArray,
    isUndefined: isUndefined,
    isWeakMap: isWeakMap,
    isWeakSet: isWeakSet,
    lt: lt,
    lte: lte,
    toArray: toArray,
    toFinite: toFinite,
    toInteger: toInteger,
    toLength: toLength,
    toNumber: toNumber,
    assign: assign,
    toSafeInteger: toSafeInteger,
    add: add,
    ceil: ceil,
    divide: divide,
    floor: floor,
    max: max,
    maxBy: maxBy,
    mean: mean,
    meanBy: meanBy,
    min: min,
    minBy: minBy,
    multiply: multiply,
    round: round,
    subtract: subtract,
    sum: sum,
    sumBy: sumBy,
    clamp: clamp,
    inRange: inRange,
    random: random,
    assignIn: assignIn,
    at: at,
    defaults: defaults,
    defaultsDeep: defaultsDeep,
    findKey: findKey,
    findLastKey: findLastKey,
    forIn: forIn,
    forInRight: forInRight,
    forOwn: forOwn,
    forOwnRight: forOwnRight,
    functions: functions,
    functionsIn: functionsIn,
    get: get,
    has: has,
    hasIn: hasIn,
    invert: invert,
    invertBy: invertBy,
    invoke: invoke,
    keys: keys,
    keysIn: keysIn,
    mapKeys: mapKeys,
    mapValues: mapValues,
    merge: merge,
    mergeWith: mergeWith,
    omit: omit,
    omitBy: omitBy,
    pick: pick,
    pickBy: pickBy,
    result: result,
    set: set,
    setWith: setWith,
    toPairs: toPairs,
    toPairsIn: toPairsIn,
    transform: transform,
    unset: unset,
    update: update,
    updateWith: updateWith,
    values: values,
    valuesIn: valuesIn,
    camelCase: camelCase,
    capitalize: capitalize,
    deburr: deburr,
    endsWith: endsWith,
    escape: escape,
    escapeRegExp: escapeRegExp,
    kebabCase: kebabCase,
    lowerCase: lowerCase,
    lowerFirst: lowerFirst,
    pad: pad,
    padEnd: padEnd,
    padStart: padStart,
    parseInt: parseInt,
    repeat: repeat,
    replace: replace,
    snakeCase: snakeCase,
    split: split,
    startCase: startCase,
    startsWith: startsWith,
    toLower: toLower,
    toUpper: toUpper,
    trim: trim,
    trimEnd: trimEnd,
    trimStart: trimStart,
    truncate: truncate,
    unescape: unescape,
    upperCase: upperCase,
    upperFirst: upperFirst,
    words: words,
    bindAll: bindAll,
    defaultTo: defaultTo,
    range: range,
    rangeRight: rangeRight,
    mixin: mixin,
    times: times,
    toPath: toPath,
    uniqueId: uniqueId,
    cloneDeep: cloneDeep,
    identity: identity,
    pullAt: pullAt,
    matches: matches,
    property: property,
    ary: ary,
    unary: unary,
    negate: negate,
    once: once,
    spread: spread,
    flip: flip,
    conforms: conforms,
    constant: constant,
    flow: flow,
    method: method,
    methodOf: methodOf,
    nthArg: nthArg,
    propertyOf: propertyOf,
    arrayToLinkedList: arrayToLinkedList,
    parseJson: parseJson,
    dellTo3355: dellTo3355,
    isPrime: isPrime,
    最大公约数: 最大公约数,
    大整数相加: 大整数相加,
    n-m之间的素数: n-m之间的素数,
    求数组最大项: 求数组最大项,
    1-n的和: 1-n的和,
    1-n以内的完全数: 1-n以内的完全数,
    abc排序: abc排序,
    fibb: fibb,
    m的n次方: m的n次方,
    Sin-Taylor: Sin-Taylor,
    第一次只出现一次的字符: 第一次只出现一次的字符,
    反向输出一个三位数: 反向输出一个三位数,
    分解质因数: 分解质因数,
    猴子选王: 猴子选王,
    评委打分: 评委打分,
    敲7: 敲7,
    求平方根: 求平方根,
    日历: 日历,
    四舍五入: 四舍五入,
    向量点积: 向量点积,
    字符串展开: 字符串展开,
    最小公倍数: 最小公倍数,
    最小的能被1-n整除的数: 最小的能被1-n整除的数,
  }


}()
