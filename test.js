
function calculateDaysBetweenDates(begin, end) {
  return Math.round((end - begin) / (1000 * 60 * 60 * 24));
}

// 每隔十秒打印一次hello world
function printHelloWorld() {
  setInterval(function() {
    console.log('hello world');
  }, 10000);
}

// 打印当前时间，格式为 2017-05-12 12:00:00，GMT+0800
function printCurrentTime() {
  var date = new Date();
  console.log(date.toISOString().replace('T', ' ').replace(/\.\d+Z/, '') + ', GMT+0800');
}

// 每隔十秒打印一次当前时间
function printCurrentTimeInInterval() {
  setInterval(function() {
    printCurrentTime();
  }, 10000);
}

// 合并两个数组，去重并排序
function mergeAndSortArray(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2))).sort();
}

// 深拷贝一个数组，不改变原数组
function deepCloneArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

// 深拷贝一个对象，不改变原对象
function deepCloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

