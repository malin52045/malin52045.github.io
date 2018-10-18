var malin52045 = function(){

  //返回一个函数，原函数最多接受n个参数
  function ary(func,n){
    return function(...args){
      return func(...args.slice(0,n))
    }
  }


  function unary(func,n){
    return ary(func,1)
  }

  function after(n,func){
    let count = 0
    return function(...args){
      c++
      if(c >= n)  return func(...args)
    }
  }

  function before(n,func){
    let count = 0
    return function(...args){
      count++
      if(count < n) return func(...args)
    }
  }



  //返回一个有预绑定参数的函数
  // function bind(f,object,...fixedArgs){
  //   return function(...args){
  //     object.f = f
  //     return object.f(...fixedArgs,...args)
  //   }
  // }

  // function bind(f,object,...fixedArgs){
  //   return function(...args){
  //     return f.apply(object,[...fixedArgs,...args])
  //   }
  // }

  function bind(f,object,...fixedArgs){
    return function(...args){
      let count = 0
      for(let i in fixedArgs){
        if(count >= args.length) break
        if(fixedArgs[i] == '_'){
          fixedArgs[i] = args[count] 
          count++
        } 
      }
      let reArgs = args.slice(count)
      return f.apply(object,[...fixedArgs,...reArgs])
    }
  }


  function bindkey(object,key,...fixedArgs){
    return function(...args){
      return object[key](...fixedArgs,...args)
    }
  }

  //将数组分割为长度为size的+1维数组


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
  var compact = ary => ary.filter(item => item)


  //将数组连接，展开深度 +1
  function concat(array){
    let result = []
    for(let i = 0;i < arguments.length;i++){
      result = result.concat(arguments(i))
    }
    return result
  }


  // 找出第一个数组中不同于后面所有数组的值，返回一个新的数组
  function difference(array1,...arys){
    if(arguments.length == 1) return Array.from(array1)
    let temp = array1
    let result 
    for(let ary of arys){
      result = []
      for(let i = 0;i < temp.length;i++){
        // if(!(array1[i] in obj2)) result.push(array1[i])
        if(ary.indexOf(temp[i]) == -1) result.push(temp[i])
      }
      temp = result      
    }
    return result
  }


  //将数组通过第三个参数转化后 比较出不同的值，返会新的数组
  // function differenceBy(ary1,ary2,iterat = identity){
  //   let result = []
  //   for(let i in ary1){
  //     for(var j = 0;j < ary2.length;j++){
  //       if(iteratee(iterat)(ary1[i]) == iteratee(iterat)(ary2[j])) break      
  //     }
  //     if(j == ary2.length) result.push(ary1[i])
  //   }
  //   return result
  // }

  function differenceBy(ary1,...arys){
    if(Array.isArray(arys[arys.length - 1])){
      return difference(ary1,...arys)
    }else{
      let iterat = arys.pop()
      let temp = ary1.slice()
      let func = iteratee(iterat)

      for(let ary of arys){
        result = []
        for(let i = 0;i < temp.length;i++){
          for(var j = 0;j < ary.length; j++){
            if(func(temp[i]) == func(ary[j])) break
          }
          if(j == ary.length) result.push(temp[i])
        }
        temp = result      
      }
      return result
    }
  }

 



  //ary1[i]与ary2[j]输入comparator进行比较
  // function differenceWith(ary1,ary2,comparator){
  //   return ary1.filter(item => !ary2.some( item2 => comparator(item,item2)))
  // }


  function differenceWith(ary1,...arys){
    if(Array.isArray(arys[arys.length - 1])){
      return difference(ary1,...arys)
    }else{
      let iterat = arys.pop()
      let temp = ary1.slice()
      let func = iteratee(iterat)

      for(let ary of arys){
        result = []
        for(let i = 0;i < temp.length;i++){
          for(var j = 0;j < ary.length; j++){
            if(func(temp[i],ary[j])) break
          }
          if(j == ary.length) result.push(temp[i])
        }
        temp = result      
      }
      return result
    }
  }



  //删除数组的前n项
  function drop(ary,n){
    if(arguments.length == 1) return ary.slice(1)
    return ary.slice(n)
  }


  //删除数组的末尾n项
  function dropRight(ary,n){
    if(n > ary.length) return []
    if(n == undefined) return ary.slice(0,ary.length - 1)
      return ary.slice(0,ary.length - n)
  }
  

  // 返回不满足pre条件的数组内容
  function dropRightWhile(ary,predicate = identity){
    for(let i = ary.length - 1;i >= 0;i--){
      if(!iteratee(predicate)(ary[i])) return ary.slice(0,i + 1)
    }
  }

  function dropWhile(ary,predicate = identity){
    for(let i in ary){
      if(!iteratee(predicate)(ary[i])) return ary.slice(i)
    }
  }


  var fill = (ary, value, start = 0, end = ary.length) => ary.map((item,index) => index >= start && index < end ? value : item)


  var findIndex = (array, predicate = malin52045.identity, fromIndex = 0) => {
    let general = iteratee(predicate)
    for(let i = fromIndex;i < array.length;i++){
      if(general(array[i])) return i
    }
    return -1
  }

  var findLastIndex = (array, predicate = malin52045.identity, fromIndex = array.length - 1) => {
    let general = iteratee(predicate)
    for(let i = fromIndex;i >= 0;i--){
      if(general(array[i])) return i
    }
    return -1
  }





  function flatten(ary){
    return flattenDepth(ary,1)
  }


  function flattenDeep(ary){
    return flattenDepth(ary,Infinity)
  }


  function flattenDepth(ary,depth){
    if(depth == 0) return ary
    let result = []
    for(let item of ary){
      if(Array.isArray(item)) {
        let a = flattenDepth(item,depth - 1)
        result = [...result,...a]
      }
      else  result.push(item)
    }
    return result
  }


  function fromPairs(pairs){
    return pairs.reduce(function(result,item,index,ary){
      result[item[0]] = item[1]
      return result
    },{})
  }

  var head = ary => ary[0]

  function identity(val){
    return val
  }

  function iteratee(val){
    if(typeof val == 'function') return val
    if(typeof val == 'string') return function(obj){
      return obj[val]
    }
    if(Array.isArray(val)) return function(obj){
      for(let i = 0;i < val.length;i += 2){
        if(obj[val[i]] != val[i + 1]) return false
      }
      return true
    }
    if(typeof(val) == 'object') return function(obj){
      for(let key in val){
        if(obj[key] != val[key]) return false
      }
      return true
    }
  }

  function indexOf(array, value, fromIndex = 0){
    for(let i = fromIndex;i < array.length;i++){
      if(array[i] === value) return i
    }
    return -1  

  }

  var initial = ary => ary.slice(0,ary.length - 1)

  function intersection(...arys){

    return  intersectionBy(...arys)
  }

  function intersectionBy(...args){
    let l = args.length
    if(!Array.isArray(args[l - 1])){
      var act = iteratee(args[l - 1])
      args.pop()
    }else act = identity

    let map = []
    for(let item of args[0]){
      let jundge = false
      for(let addItem of map){
        if(isEqual(item,addItem)) jundge = true
        break
      }
      if(jundge == false) map.push(item)
    }

    for(let i = 1;i < args.length;i++){
      let temp = args[i]
      
      map = map.filter(item => {
        for(let comp of temp){
          if(isEqual(act(item),act(comp))) return true
        }
        return false
      })

    }
    return map

  }


  function intersectionWith(...args){
    var act = args.pop()
    let map = []
    for(let item of args[0]){
      let jundge = false
      for(let addItem of map){
        if(isEqual(item,addItem)) jundge = true
        break
      }
      if(jundge == false) map.push(item)
    }

    for(let i = 1;i < args.length;i++){
      let temp = args[i]
      
      map = map.filter(item => {
        for(let comp of temp){
          if(act(item,comp)) return true
        }
        return false
      })

    }
    return map
  }

  var join = (ary,separator = ',') => ary.reduce((result,it) => result + separator + it)


  var last = ary => ary[ary.length - 1]

  var lastIndexOf = (array, value, fromIndex=array.length-1) => {
    for(let i = fromIndex;i >= 0;i--){
      if(array[i] == value) return i
    }
    return -1
  }

  var nth = (ary,n = 0) => n >= 0 ? ary[n] : ary[ary.length - 1]
  
  var pull = (ary,...vals) =>(ary = ary.filter(item => vals.every(it => it != item)),ary)

  var pullAll = (ary,vals) => (ary = ary.filter(item => vals.every(it => it != item)),ary)

  var pullAllBy = (ary, vals, act=identity) =>  (ary = ary.filter(item => vals.every(it => iteratee(act)(it) != iteratee(act)(item))),ary)

  var pullAllWith = (ary, vals, act) =>  (ary = ary.filter(item => vals.every(it => !act(item,it))),ary)

  var pullAt = (ary,...inds) => (ary = ary.filter((item,i) => flattenDeep(inds).every(it => it != i)),ary)

  var parse = function(){
    let i = 0
    let str
    return function(inputstr){
      i = 0
      str = inputstr
      return parseValue()
    }



    function parseValue(){
      switch (str[i]){
        case '{': return parseObject()
        case '[': return parseArray()
        case '"': return parseString()
        case 't': return parseTrue()
        case 'f': return parseFalse()
        case 'n': return parseNull()
        default : return parseNumber()
      }
    }

    function parseString(){
      let string = ''
      i++
      while(str[i] !== '"'){
        string += str[i]
        i++
      }
      i++
      return string
    }

    function parseNumber(){
      if(!(str[i] >= '0' && str[i] <= '9')) throw new SyntaxError(`Unexpected token ${str[i]} in JSON at position ${i}`)
      let j = i
      while(true){
        let n = str[i]
        if((n >= '0' && n <= '9') || n === '.' || n === 'e' || n === 'E' || n === '+' || n === '-'){
          i++
        }else break
      }
      let num = str.slice(j,i)
      return parseFloat(num)
    }

    function parseTrue(){
      let val = str.slice(i,i + 4)
      i = i + 4
      if(val === 'true') return true
      throw new SyntaxError(`Unexpected token ${str[i-3]} in JSON at position ${i-3}`)
    }

    function parseFalse(){
      let val = str.slice(i,i+5)
      i = i + 5
      if(val === 'false') return false
      throw new SyntaxError(`Unexpected token ${str[i-4]} in JSON at position ${i-4}`)
    }

    function parseNull(){
      let val = str.slice(i,i+4)
      i = i + 4
      if(val === 'null') return null
      throw new SyntaxError(`Unexpected token ${str[i-3]} in JSON at position ${i-3}`)
    }

    function parseObject(){
      let result = {}
      i++
      while(true){
        let k = ''
        i++
        while(str[i] !== '"'){
          k += str[i] 
          i++
        }
        i += 2
        result[k] = parseValue()
        if(str[i] === '}') break
        i ++
      }
      i++
      return result
    }

    function parseArray(){
      i++
      let result = []
      while(true){
        result.push(parseValue())
        if(str[i] === ']') break
        i++
      }
      i++
      return result
    }
  }()

  
  var remove = (ary, predicate=identity) => {
    let removed = []
    for(let i in ary){
      if(predicate(ary[i])) removed = removed.concat(ary.splice(i,1))
    }
    return removed
  }

  var reverse = ary => {
    let l = ary.length
    for(let i = 0;i < l / 2;i++){
      let temp = ary[i]
      ary[i] = ary[l - i -1]
      ary[l - i - 1] = temp
    }
    return ary
  }

  var slice = (ary, start=0, end=ary.length) => {
    let result = []
    for(let i = start;i < end;i++){
      if(i in ary) result.push(ary[i])
    }
    return result
  }


  function some(ary,predicate){
    for(let item of ary){
      if(iteratee(predicate)(item)) return true
    }
    return false
  }

  function every(ary,predicate){
    for(let item of ary){
      if(!iteratee(predicate)(item)) return false
    }
    return true
  }



  var sortedIndex = (ary,val) => sortedIndexBy(ary,val)

  var sortedIndexBy = (ary,val,act = identity) => {
    let min = 0
    let max = ary.length - 1
    var act = iteratee(act)
    while(max >= min){
      let mid = ((max + min) / 2 | 0)
      if(act(ary[mid]) === act(val)){
        while(mid >= 0 && act(ary[mid]) == act(val)){
          mid--
        }
        return mid + 1
      }else if(act(ary[mid]) > act(val)) max = mid - 1
          else min = mid + 1
    }
    if(act(ary[min]) > act(val)) return min
    return min + 1
  }

  var sortedIndexOf = (ary,val) => {
    let min = 0
    let max = ary.length - 1
    while(max >= min){
      let mid = ((max + min) / 2 | 0)
      if(ary[mid] === val){
        while(mid >= 0 && ary[mid] == val){
          mid--
        }
        return mid + 1
      }else if(ary[mid] > val) max = mid - 1
          else min = mid + 1
    }
    return -1
  }

  var sortedLastIndex = (ary,val) => sortedLastIndexBy(ary,val)

  var sortedLastIndexBy = (ary,val,act = identity) => {
    let min = 0
    let max = ary.length - 1
    var act = iteratee(act)
    while(max >= min){
      let mid = ((max + min) / 2 | 0)
      if(act(ary[mid]) === act(val)){
        while(mid < ary.length && act(ary[mid]) == act(val)){
          mid++
        }
        return mid
      }else if(act(ary[mid]) > act(val)) max = mid - 1
          else min = mid + 1
    }
    if(act(ary[min]) > act(val)) return min
    return min + 1
  }

  var sortedLastIndexOf = (ary,val) => {
    let min = 0
    let max = ary.length - 1
    while(max >= min){
      let mid = ((max + min) / 2 | 0)
      if(ary[mid] === val){
        while(mid < ary.length && ary[mid] == val){
          mid++
        }
        return mid - 1
      }else if(ary[mid] > val) max = mid - 1
          else min = mid + 1
    }
    return -1
  }

  var sortedUniq = ary => sortedUniqBy(ary)

  var sortedUniqBy = (ary,act = identity) => {
    let result = []
    let test = []
    var act = iteratee(act)
    ary.forEach(item => {
      if(act(item) !== test[test.length - 1]){
        result.push(item)
        test.push(act(item))
      } 
    })
    return result
  }

  var tail = ary => (ary.shift(),ary)
  var take = (ary,n = 1) => ary.slice(0,n)
  var takeRight = (ary,n = 1) => ary.slice(ary.length - n)
  var takeRightWhile = (ary,pre = identity) => {
    let result = []
    let act = iteratee(pre)
    for(let i = ary.length - 1;i >= 0;i--){
      if(act(ary[i])) result.push(ary[i])
        else break
    }
    return result
  }
  var takeWhile = (ary,pre = identity) => {
    let result = []
    let act = iteratee(pre)
    for(let i = 0;i < ary.length;i++){
      if(act(ary[i])) result.push(ary[i])
        else break
    }
    return result
  }
  var union = (...arys) => {
    let result = []
    arys.forEach(ary => ary.forEach(it =>{
      if(!includes(result,it)) result.push(it)
    }))
    return result
  }
  var unionBy = (...args) =>{
    if(!Array.isArray(args[args.length - 1])) var act = iteratee(args.pop())
      else var act = identity
    let result = []
    args.forEach(arg => arg.forEach(it => {
      var jundge = true
      for(let i = 0;i < result.length;i++){
        if(act(it) === act(result[i])){
          jundge = false
          break
        }
      }
      if(jundge) result.push(it)
    }))
    return result
  }

  var unionWith = (...args) =>{
    if(!Array.isArray(args[args.length - 1])) var act = iteratee(args.pop())
      else var act = isEqual
    let result = []
    args.forEach(arg => arg.forEach(it => {
      var jundge = true
      for(let i = 0;i < result.length;i++){
        if(act(it,result[i])){
          jundge = false
          break
        }
      }
      if(jundge) result.push(it)
    }))
    return result
  }

  var uniq = ary => {
    let result = []
    ary.forEach(item => {
      if(!includes(result,item)) result.push(item)
    })
    return result
  }


  var uniqBy = (ary,act = identity) => {
    let result = []
    let test = []
    var act = iteratee(act)
    ary.forEach(item => {
      if(!includes(test,act(item))){
        result.push(item)
        test.push(act(item))
      } 
    }) 
    return result
  }

  var uniqWith = (ary,comparator) => {
    let result = []
    for(let i = 0;i < ary.length;i++){
      let jundge = true
      for(let j = 0;j < result.length;j++){
        if(comparator(ary[i],result[j])){
          jundge = false
          break
        } 
      }
      if(jundge) result.push(ary[i])
    }
    return result 
  }

  var unzip = ary => ary[0].map((_,index) => ary.reduce((result,item) => result.concat(item[index]),[]))

  var unzipWith = (ary,iterat) => ary[0].map((_,index) => ary.reduce((result,item) => iterat(result,item[index])))

  var without = (ary,...nums) => ary.filter(it => !nums.includes(it)) 

  var xor = (...arys) => arys.reduce((result,item) => {
    item.forEach(it => {
      let i = result.indexOf(it)
      if(i == -1) result.push(it)
        else delete result[i]
    })
    return result
  },[]).filter(it => it)

  var xorBy = (...args) => {
    if(!Array.isArray(args[args.length - 1])) var act = iteratee(args.pop())
      else var act = identity
    let test = []
    let result = []
    args.forEach(item => {
      item.forEach(it => {
        let i = test.indexOf(act(it))
        if(i == -1){
          result.push(it)
          test.push(act(it))
        }else{
          delete result[i]
        }
      })
    })
    return result.filter(it => it)
  } 

  var xorWith = (...args) =>{
    var comparator = iteratee(args.pop())
    return args.reduce((result,item) => {
      item.forEach(it => {
        for(var i in result){
          let val = result[i]
          if(comparator(val,it)){
            delete result[i]
            break
          }
        }
        if(i == result.length - 1) result.push(it)
      })
      return result
    }).filter(it => it)
  } 

  var zip = (...arys) => arys[0].slice().map((item,index,ary) => item = arys.reduce((temp,it) => (temp.push(it[index]),temp),[])) 
 
  var zipObjectDeep = (props,values) => {
    //let separa = props.map(item => item.split('.').map(it => it.match(/\w+/g)))
    let separa = props.map(item => item.match(/\w+/g))

    return separa.reduce((result,item,index) => pathJoin(item,values[index],result),{})

    function  pathJoin(ary,val,otherAry = {}){
      let temp = otherAry
      for(let i = 0;i < ary.length;i++){
        if(ary[i+1] === undefined){
          if(ary[i] === undefined) temp[ary[i]] = {}
          temp[ary[i]] = val
        }else if(isNaN(ary[i+1])) {        
          if(temp[ary[i]] === undefined) temp[ary[i]] = {}
          temp = temp[ary[i]] 
        }else{
          if(temp[ary[i]] === undefined) temp[ary[i]] = []
          temp = temp[ary[i]]
        }
      }
      return otherAry
    }
  }


  var zipWith = (...args) => {
    let comparator = args.pop()
    let argL = args.length
    let l = args[0].length
    let result = []
    for(let i = 0;i< l;i++){
      let nums = new Array(argL).fill(0).map((it,index) => args[index][i])
      result.push(comparator(...nums))
    }
    return result
  } 

  var countBy = (collection,iterat) => {
    let act = iteratee(iterat)
    return collection.reduce((result,item,index) =>{
      let val = act(item)
      result.hasOwnProperty(val) ? result[val]++:result[val] = 1
      return result
    },({}))
  } 


  var filter = (collection,predicate = identity) => {
    let act = iteratee(predicate)
    let result
    if(Array.isArray(collection)){
      result = []
      for(let val of collection){
        if(act(val)) result.push(val)
      }
    }
      else{
        result = {}
        for(let key in collection){
          let val = collection(key)
          if(act(val)) result[key] = val
        }
      } 
    return result
  } 

  var find = (collection, predicate=_.identity, fromIndex=0) => {
    let l = collection.length
    let act = iteratee(predicate)
    for(let i = fromIndex;i < l;i++){
      let val = collection[i]
      if(act(val)) return val
    }
  } 

  var findLast = (collection, predicate = malin52045.identity, fromIndex = collection.length - 1) => {
    let general = iteratee(predicate)
    for(let i = fromIndex;i >= 0;i--){
      let val = collection[i]
      if(general(val)) return val
    }
  }

  var flatMap = (collection, iteratee=identity) => flatMapDepth(collection, iteratee,1)

  var flatMapDeep = (collection, iteratee=identity) => flatMapDepth(collection,iteratee,Infinity) 

  var flatMapDepth = (collection, iteratee=identity,depth = 1) => flattenDepth(collection.map(item => iteratee(item)),depth) 

  var forEach = (collection,iteratee = identity) => {
    for(let i in collection){
      iteratee(collection[i],i,collection)
    }
  } 

  var forEachRight = (collection,iteratee = identity) => {
    let l = collection.length
    for(let i = l - 1;i >= 0;i--){
      iteratee(collection[i],i,collection)
    }
  } 



  // function groupBy(ary,propName){
  //   let result = {}
  //   for(let item of ary){
  //     if(item[propName] in result) result[item[propName]].push(item)
  //       else result[item[propName]] = [item]
  //   }
  //   return result
  // }

  var groupBy = (ary,predicate) => ary.reduce((result,item,key) => (key = iteratee(predicate)(item),key in result ? result[key].push(item) : result[key] = [item],result ),{})





  var includes = (collection, value, fromIndex=0) => {
    var values = Object.values(collection)
      if(fromIndex >= 0){
        for(let i = fromIndex;i < values.length;i++){
          if(value !== value && values[i] !== values[i]) return true
          if(value === values[i]) return true
        }
      }else{
        for(let i = values.length + fromIndex;i < values.length;i++){
          if(value !== value && values[i] !== values[i]) return true
          if(value === values[i]) return true
        }
      }
      return false
    
  }



  function invokeMap(){}
  function keyBy(){}
  function map(){}

  function matches(source){
    return function(obj){
      for(let i in source){
        if(source[i] != obj[i]) return false
      }
      return true
    }
  }

  function matchesProperty(path,value){
    return function(obj){
      if(Array.isArray(path)){
        if(obj[path[0]] == value) return true
      }else return false
      if(typeof path == 'string'){
        if(obj[path] == value) return true
      }else return false
    }
  }

  function orderBy(){}
  function partition(){}
  function reduce(){}
  function reduceRight(){}
  function reject(){}
  function sample(){}
  function sampleSize(){}
  function shuffle(){}
  function size(){}
  function sortBy(){}
  function defer(){}
  function delay(){}
  function castArray(){}
  function conformsTo(){}
  function eq(){}
  function gt(){}
  function gte(){}



  var isArguments = obj => Object.prototype.toSting.call(obj) === '[object Arguments]'
  
  var isArray = val => Object.prototype.toString.call(val) ==='[object Array]'

  var isArrayBuffer = val =>{}

  var isArrayLike = val => {
    if(Object.prototype.toString.call(val) === '[object String]' || Object.prototype.toString.call(val) ==='[object Array]') return true
    if(length in val || val.length === 0) return true
    return false
   }

  var isArrayLikeObject = val => {
    if(typeof val === 'object' && val !== null && (length in val || val.length === 0)) return true
      return false
  }

  var isBoolean = val => Object.prototype.toString.call(val) === '[object Boolean]' 

  var isBUffer = val => val.__proto__.constructor === BUffer

  var isDate = val => val.__proto__.constructor === Date

  var isElement = val => Object.prototype.toString.call(val).slice(0,12) === '[object HTML'

  var isEmpty = val => {
    if(Object.prototype.toString.call(val) === '[object Object]' && Object.keys(val) === 0) return true
    if(isArrayLike(val)) return true
    if(Object.prototype.toString.call(val) === '[object Set]' || Object.prototype.toString.call(val) === '[object Map]'){
      if(val.size === 0) return true
    }
    return false
  }


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
        if(!(isEqual(val1[i],val2[i]))) return false
      }
      return true
    }
    return false
  }

  //返回数组和
  function sum(ary){
    return sumBy(ary)
  }

  //返回数组内某条件和
  function sumBy(ary,iterat = identity){
    let sum = 0
    ary.forEach(function(temp){
      sum += iteratee(iterat)(temp)      
    })
    return sum
  }

  //返回一个函数，接受一个数组，将数组从第几项展开传入原函数
  function spread(func,start = 0){
    return function(ary){
      return func.apply(null,ary.slice(start)) //func.apply(null,ary) == func(...ary)
    }
  }

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

  //返回一个与参数函数 return相反的函数
  // function negate(pre){
  //   return function(...arg){
  //     return !pre(...arg)
  //   }
  // }
  var negate = pre => (...arg) => !pre(...arg)










  return {
    chunk: chunk,
    compact: compact,
    concat: concat,
    difference: difference,
    differenceBy: differenceBy,
    differenceWith: differenceWith,
    drop: drop,
    dropRight: dropRight,
    dropRightWhile: dropRightWhile,
    dropWhile: dropWhile,
    fromPairs: fromPairs,
    flattenDeep: flattenDeep,
    flatten: flatten,
    flattenDepth: flattenDepth,
    fill:fill,
    findIndex:findIndex,
    findLastIndex: findLastIndex,
    isArguments: isArguments,
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isArrayLike: isArrayLike,
    isArrayLikeObject: isArrayLikeObject,
    isBoolean: isBoolean,
    isBUffer: isBUffer,
    isDate: isDate,
    isElement: isElement,
    isEqual: isEqual,
    identity: identity,
    iteratee: iteratee,
    indexOf: indexOf,
    includes: includes,
    initial:initial,
    intersection: intersection,
    intersectionBy: intersectionBy,
    intersectionWith:intersectionWith,
    last: last,
    some: some,
    sum: sum,
    sumBy: sumBy,
    spread : spread,
    sortedIndex: sortedIndex,
    sortedIndexBy: sortedIndexBy,
    sortedLastIndex: sortedLastIndex,
    sortedLastIndexBy: sortedLastIndexBy,
    sortedLastIndexOf: sortedLastIndexOf,
    sortedUniq: sortedUniq,
    sortedUniqBy: sortedUniqBy,
    range: range,
    rangeRight: rangeRight,
    remove: remove,
    reverse:reverse,
    every: every,
    ary: ary,
    unary: unary,
    uniq: uniq,
    uniqBy: uniqBy,
    uniqWith: uniqWith,

    tail: tail,
    take: take,
    takeRight: takeRight,
    takeRightWhile: takeRightWhile,
    takeWhile: takeWhile,
    union: union,
    unionBy: unionBy,
    unionWith: unionWith,


    bind: bind,
    bindkey:bindkey,
    groupBy: groupBy,
    after: after,
    before: before,
    matchesProperty: matchesProperty,
    matches: matches,
    head : head,
    negate : negate,
    join: join,
    pull: pull,
    pullAll: pullAll,
    pullAllBy: pullAllBy,
    pullAllWith: pullAllWith,
    pullAt: pullAt,
    parse: parse,
    zip:zip,
    zipObjectDeep:zipObjectDeep,
    zipWith:zipWith,
    unzip:unzip,
    unzipWith:unzipWith,
    without:without,
    xor:xor,
    xorBy:xorBy,
    xorWith:xorWith,
    countBy:countBy,
    filter:filter,
    find:find,
    findLast:findLast,
    flatMapDepth:flatMapDepth,
    flatMapDeep:flatMapDeep,
    flatMap:flatMap,
    forEach:forEach,
    forEachRight:forEachRight,
  }


}()
