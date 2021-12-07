// concat 활용하여 날짜와 시간 출력하기

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
// concat() 는 배열 뿐만 아니라 문자열을 인수로 넘겨주면 호출한 객체(문자열 혹은 배열)의 맨 마지막에 붙여서 새로운 문자열로 반환한다.

console.log(result);