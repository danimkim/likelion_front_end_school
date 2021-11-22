## 2021-11-09 TIL

### 1. svg
- XML 코드 기반으로 만들어진 확장 가능한 2차원 벡터 그래픽(Scalable Vector Graphics)
- HTML 태그의 집합으로 이루어져 있어 CSS 및 JS로 컨트롤 가능
- 주로 단순한 아이콘, 로고, 도형 등을 구현할 때 사용

#### 장점
확대를 해도 이미지가 깨지지 않고 이미지 크기를 키워도 용량이 늘어나지 않는다
#### 단점
복잡한 이미지일 수록 파일 사이즈가 커진다. 따라서 단순한 모양일수록 효율이 좋다


### 2. transition
- 요소가 어떠한 한 상태에서 다른 상태로 변할 때 즉, CSS 속성값이 변할 때 그 변화가 일정 시간에 걸쳐 일어나도록 해준다
- `transition`은 다음 네 가지 속성의 단축 속성이다
  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay

### 3. transform
- 요소에 회전, 크기 조절, 기울이기, 이동 효과 등을 부여할 수 있다
- `transform`의 대표적인 속성은 다음과 같다
  - scale
  - rotate
  - translate
  - skew
  - origin

#### transform-origin
- transform되는 object의 기준점을 변경할 때 사용된다
```css
div {
      transform-origin: 60px 70px;
                     /* x축 | y축 */
}
```

| ![Animation2](https://user-images.githubusercontent.com/74545780/140973337-7806f617-dc28-497c-be95-9f64ff0f761c.gif) | ![Animation](https://user-images.githubusercontent.com/74545780/140973370-b636a6fb-d25a-455a-b4f2-ab99de5437e3.gif) |  
|:--:|:--:|
| `transform-origin:left-top` | `transform-origin: 60px 70px` |

### 4. animation
- `@keyframes` 속성을 이용하여 요소에 애니메이션 효과를 주는 CSS 속성으로 아래의 속성들의 단축 속성이다
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode
  - animation-play-state
- `animation-name`을 정의하고 이를 요소에서 호출하는 방식으로 사용한다
```css
/* 키프레임 이름 == 애니메이션 이름 */
@keyframes wiggle {
  0% {
		styles;
	}
	100% {
		styles;
	}
}

div{
	/* 애니메이션 이름 */
  animation-name: wiggle;
}
```

### 5. perspective
원근감을 표현하는 속성으로 화면과 그 화면을 보는 사용자 사이의 거리라고 생각하면 이해하기 쉽다 값이 작을수록 더 극적인 효과가 난다
| ![이미지 7](https://user-images.githubusercontent.com/74545780/140975233-b93c69d8-8825-4306-b0ac-afa45aa6b84e.png) | ![이미지 8](https://user-images.githubusercontent.com/74545780/140975236-492caaff-7ffb-49c3-a08d-ab1f6c9e4aaa.png) |  
|:--:|:--:|
| `perspective: 200px` | `perspective: 100px` |

<br><br>

### transform, transition, animation 동작 확인해보기
▪️ [scale, skew, rotate transition-delay](https://dahhnym.github.io/likelion_front_end_school/Day08/088_transition.html)<br>
▪️ [animation-iteration-count](https://dahhnym.github.io/likelion_front_end_school/Day08/091_animation_iteration_count.html)<br>
▪️ [animation-direction](https://dahhnym.github.io/likelion_front_end_school/Day08/092_animation_direction.html)

