var userObj = {
  age: 28,
  firstName: 'Olga',
  lastName: 'Mitkevich',
  fullName() {
    return `${userObj.firstName} ${userObj.lastName}`;
  }
};
console.log(userObj);
console.log(userObj.fullName());
function defUpperStr(str){
    return (str || 'Default text' ).toUpperCase();
};
console.log(defUpperStr('My text'));
console.log(defUpperStr());

function evenFn(n){
  var arr = [];
  for (var i=1;i<=n; i++) if (i % 2 ===0) arr.push(i);
  return arr;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(n) {
var str='';
switch(n){
  case 1:
    str ='Понедельник';
    break;
  case 2:
    str ='Вторник';
    break;
  case 3:
    str ='Среда';
    break;
  case 4:
    str ='Четверг';
    break;
  case 5:
    str ='Пятница';
    break;
  case 6:
    str ='Суббота';
    break;
  case 7:
    str ='Воскресенье';
    break;
  default: 
  str =null;
}
return str;
}
console.log(weekFn(1));
console.log(weekFn(7));
console.log(weekFn(3.4));
console.log(weekFn(15));
console.log(weekFn('text'));

function ageClassification(n) {
return n > 0 
? n >24
? n>44
? n>65
? n>75
? n>90
? n>122
? null
:'долгожители'
:'старческий возраст'
:'пожилой возраст'
:'средний возраст'
:'молодой возраст'
:'детский возраст'
:null;
}
console.log(ageClassification(-1));
console.log(ageClassification(7));
console.log(ageClassification(28));
console.log(ageClassification(48));
console.log(ageClassification(66));
console.log(ageClassification(80));
console.log(ageClassification(93));
console.log(ageClassification(129));

function oddFn(n) {
var arr =[];
var i =0;
while( i++ <n) if(i %2 !==0) arr.push(i);
return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a,b,cb){
if (cb && typeof cb === 'function') return cb(a,b);
return false;
}
function cbRandom(min,max){
return Math.floor(Math.random()*(max - min +1))+min;
}
function cbPow(num, pow){
return Math.pow(num,pow);
}
function cbAdd(a,b){
return a+b;
}
console.log(mainFunc(2,5, cbRandom));
console.log(mainFunc(10,30, cbRandom));
console.log(mainFunc(2,5, cbPow));
console.log(mainFunc(2,5, cbAdd));
console.log(mainFunc(2,5, 'not a func'));