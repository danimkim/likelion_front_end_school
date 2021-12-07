// 다음 배열에서 400, 500 삭제하기

var nums = [100, 200, 300, 400, 500]
var nums2 = [100, 200, 300, 400, 500]

// 원본 배열 변경
const result = nums.splice(-2); // 맨 뒤에서 두번째 요소부터 끝까지 삭제

console.log('nums.splice(-2) 반환값',result); // [400, 500]
// 배열에서 삭제한 요소 출력
console.log('splice(-2) 후 배열 num', nums);  // [100, 200, 300]
// 요소 삭제 후 변경 된 요소 출력

// 원본 배열 변경 없이 새로운 배열로 만들기
const result2 = nums2.slice(0,3) // 0번째 요소부터 3번째 요소 앞까지 잘라서 새로운 배열 생성

console.log('nums2.slice(0,3)', result2); // [100, 200, 300]
console.log('배열 nums2', nums2) // [100, 200, 300, 400, 500]
                                // 원본 배열 변경 없다