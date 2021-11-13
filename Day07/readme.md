## 2021-11-08 TIL


### 1. align-items, align-content
- 요소를 `cross-axis` 기준으로 이동시킨다
- `align-items`는 `flex-container`에 주는 값이다
- `align-items: stretch`가 기본값으로 컨테이너의 자식 요소의 `height` 값이 설정되어 있지 않을때 `cross-axis` 방향으로 컨테이너 영역 만큼 자식 요소의 영역을 쭉 늘려준다<br>

| <img src="https://user-images.githubusercontent.com/74545780/140778243-2704cf60-2ed4-4fd5-ae5f-008c484feb15.png" height="500"> | 
|:--:| 
| align-items: stretch |

### 2. align-self
- 부모 요소의 align-items 속성을 덮어씌워서 특정 요소에 개별적으로 align-items 속성을 부여한다

### 3. flex-wrap
- `flex-item` 요소들을 감싸주는 역할을 하는 속성으로 강제로 한줄에 배치시키거나 가능한 영역 내에서 벗어나지 않고 여러행으로 나누어 표현하게 해준다
- 컨테이너 너비가 

#### flex-container에 `flex-wrap: wrap` 값을 주었을 때 align-items와 align-content
- `align-items`는 flex-items가 컨테이너 너비보다 커서 다음 행으로 넘어가는 경우, 요소들 간의 줄간격을 유지하면서 cross-axis 축으로 이동시킨다

```css
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-items: center;
}
li{
  width: 100px;
  height: 100px;
  background-color: salmon;
  border: solid 1px black;
}
```
```html
<body>
    <ul class="container">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
</body>
```
| <img src="https://user-images.githubusercontent.com/74545780/140784166-a9cac84f-4b4a-4ed0-a0e2-1135b934eef3.png" height="500"> | <img src="https://user-images.githubusercontent.com/74545780/140780908-890efd7a-fd1a-456b-9c0f-2ed5014dfd87.png" height="500"> | <img src="https://user-images.githubusercontent.com/74545780/140784176-e89b069d-49ea-481f-a4f5-2cab2d76f41d.png" height="500"> | 
|:--:|:--:|:--:|
| align-items: flex-start | align-items: center | align-items: flex-end |

- `align-content`는 요소들간의 줄간격 없이 이동시킨다
```css
.container {
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  align-content: center;
}
li{
  width: 100px;
  height: 100px;
  background-color: salmon;
  border: solid 1px black;
}
```
| <img src="https://user-images.githubusercontent.com/74545780/140781972-6a29118d-24c6-4ae9-b7da-03034c73a254.png" height="500"> | 
|:--:| 
| align-content: center |


### 4. flex-basis
- flex-basis는 자식요소에 사용한다.
- main axis 방향에 요소의 넓이값을 특정한다 main axis가 row라면 x축 방향으로 넓이가 적용되고 column이라면 y축방향로 넓이가 적용된다
- flex-basis가 적용되어 있으면 width, height 값이 무시된다
- flex-basis 보다 크려면 flex-grow, 작게 하려면 flex-shrink
- 음수값은 없고 기본값이 1이다 0을 사용할 경우 컨테이너의 크기가 줄어도 값은 고정된다
```css
.container{
  display: flex;
}
.item{
  width: 100px;
  height: 100px;
  flex-basis: 100px;
  background-color: tomato;
  border: solid 1px black;
  flex-grow: 1;
}
```
```html
<div class="container">
  <div class="item">Lorem, ipsum dolor.</div>
  <div class="item second">Lorem ipsum dolor sit amet.</div>
  <div class="item">lorem ipsum</div>
</div>
```

| <img src="https://user-images.githubusercontent.com/74545780/140790833-cd29b22c-8d3a-4102-bf2a-853c8dddfa49.png"> | 
|:--:| 
| 모든 flex-item에 flex-grow: 1 값을 주었을 때 | 

```css
.item{
  width: 100px;
  height: 100px;
  flex-basis: 100px;
  background-color: tomato;
  border: solid 1px black;
  flex-grow: 1;
}
.second{
  flex-grow: 0;
  flex-shrink: 0;
}
```
| <img src="https://user-images.githubusercontent.com/74545780/140788910-9472ab71-203e-4256-8660-e457494ad039.png"> | 
|:--:| 
| .second 클래스를 가진 flex-item에만 flex-grow:0 flex-shrink:0 을 주었을 때 |

### 5. grid
- grid는 container 영역을 꽉 채우려는 특성이 있다


#### grid 속성 선언 방식(1)
```css
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
```
#### grid 속성 선언 방식(2)
```css
.container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
```

