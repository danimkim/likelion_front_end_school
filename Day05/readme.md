## 2021.11.05 TIL

### 1. inline 요소의 한계점
margin-top, margin-bottom 을 줄 수 없고 height, width를 줄 수 없다.

### 2. inline-block 값을 준 div가 여러 개 있을 때 div 사이에 공백이 생기는 이유
- html에서 줄바꿈은 공백으로 인식된다
```
<!-- 줄바꿈을 하면 div 사이에 공백이 생긴다  -->
<div>안녕하세요</div>
<div>안녕하세요</div>
<div>안녕하세요</div>
```
![html줄바꿈공백예제](https://user-images.githubusercontent.com/74545780/140526281-78d566f7-4482-46a3-9b5b-6ed3de95237e.png)

#### 공백 없애는 방법
- 줄바꿈 없이 요소들을 붙여서 쓰면 공백이 없어진다 (하지만 가독성이 떨어지므로 이렇게 쓰지 않도록 한다)
```
<div>안녕하세요</div><div>안녕하세요</div><div>안녕하세요</div>
```
![html줄바꿈공백없애는예제](https://user-images.githubusercontent.com/74545780/140526501-910e17d7-f751-4151-a390-f7bd4cc4ab92.png)

- 부모요소에 font-size:0 을 준다. 다른 요소의 자식으로 있지 않다면 부모요소는 body가 되는데 body에 font-size:0을 주면 공백이 없어짐

### 3. float
| ![float 예시](https://user-images.githubusercontent.com/74545780/140518555-d604b85b-9b74-4a55-a79a-aa4d0410343d.png) | 
|:--:| 
| float 예시 |
- `float` 속성은 텍스트의 흐름이 이미지 주변으로 흐르는 듯한 레이아웃을 구현하기 위해 만들어졌다

#### block 요소에 float 설정했을 때
| ![float 설정하기 전](https://user-images.githubusercontent.com/74545780/140524199-6ce0e48c-1be5-48a8-98db-63592fa97eb9.png) | ![float을 주었을때](https://user-images.githubusercontent.com/74545780/140524397-39820a4d-fe6d-4ac8-8eb2-ecea35836e6a.png)|
|:--:|:--:| 
| float 설정하기 전 |float을 주었을때|
- block 요소는 기본적으로 뷰포트의 가로폭 전체 넓이를 차지하는데 float 값을 주면 해당 요소에 해당하는 공간만큼만 차지하게 된다
이미지 첨부
- `float`을 따로 설정하지 않은 상태에서 html 요소들은 normal flow에 있다
- 요소에 `float`을 설정하면 부모 요소가 해당 요소를 인식하지 못한다
- normal flow에 있는 요소들은 `float`된 요소와 `position:absolute` 값이 설정된 요소들을 인식하지 못한다
- normal flow에 있는 요소들을 인식하면서 특정 요소를 이동시키고 싶다면 `position:relative`를 쓰면 된다

#### 컨테이너 역할을 하는 부모 요소가 자식 요소가 float일 때 생기는 문제점 해결 방법
1. clear 속성주기 : 요소의 앞에 있는 형제요소의 `float`을 해제시켜준다
2. 부모 요소에 `overflow:hidden` 주기
3. clear-fix 방법 - 가상 요소 클래스 `::after` 사용하기

### 5.`img` 태그의 alt 속성
```
<img src="./image.png" alt="">
```
이미지 설명이 필요 없는 경우라도 alt 속성을 없애지 않고 그냥 빈값으로 두어야한다.
스크린 리더가 html 문서를 읽을 때 img 태그에 alt 속성이 있으면 그 속성값을 읽지만 아예 없으면 src 속성값(이미지파일의 주소)을 읽어버린다.
이를 방지하기 위해 이미지 설명이 필요 없더라도 alt 속성을 꼭 적어주어야한다.



<hr>
### 예제 결과 확인하기
https://dahhnym.github.io/likelion_front_end_school/Day05/063_div_inline_block_%EC%86%8D%EC%84%B1_%EB%B6%80%EC%97%B0%EC%84%A4%EB%AA%85.html



  
    

  
