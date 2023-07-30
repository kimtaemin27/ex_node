if(true) {
    var x = 3;
}

console.log(x);

// 3


if(true) {
    const y = 3;
}

//console.log(y);


// 기본적으로 const 사용
// 다른값을 할당해야하는 상황이 생겼을 때 let 사용


// 템플릿 문자열

var num1 = 1;
var num2 = 2;
var result = 3;
var string = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string);

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2);



// 객체 리터럴

var sayNode = function() {
    console.log('Node');
}

var es = 'ES';
var oldObject = {
    sayJS : function() {
        console.log('JS');
    },
    sayNode: sayNode,
};

oldObject[es + 6] = 'Fantastic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);


// 동일

const newObject = {
    sayJS() {
        console.log('JS');
    },

    sayNods,
    [es + 6]: 'Fanstatic',
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);