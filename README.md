# ik-ui-library

설명: `React`, `Emotion CSS` 기반의 재사용 가능한 UI 라이브러리

목적: 이 라이브러리를 활용해 다양한 프로젝트에서 UI 디자인을 좀 더 빠르게 만들 수 있게 한다.

배포: [배포사이트](https://67ed410fbbe402f43ec453fd-udgijuqdsa.chromatic.com/)

- storybook을 활용한 컴포넌트 문서 작성 및 배포

## 구현한 컴포넌트

### layout

- 자주 사용되는 레이아웃 컴포넌트

```
1. center
2. container
3. flex
4. grid
5. responsive
6. spacer
```

### common

- 자주 사용되는 UI 컴포넌트

```
1. modal
2. sidebar
3. pagination
4. tab
5. text

```

### constant

- 자주 사용되는 디자인 asset

```
1. color
2. spacer (여백)
3. borderRadius
```

## 컴포넌트 설계 과정

### 서론: 다양한 프로젝트에서 사용할 수 있는 UI 라이브러리는 어떻게 설계하면 좋을까??

어떤 프로젝트에서든 재사용 가능한 UI 라이브러리를 설계하려면, React의 컴포넌트 구조를 잘 이해하는 것이 매우 중요합니다.
React는 UI와 기능을 함께 선언할 수 있는 구조로 되어 있어서, 개발자가 컴포넌트 내에서 기능과 UI를 모두 처리할 수 있게 합니다.

```tsx
function View() {
  const {} = use... // 기능 관련

  return <></> // UI 관련
}
```

하지만 React 컴포넌트를 설계할 때 기능과 UI를 동시에 처리하는 방식은 몇 가지 문제를 일으킬 수 있습니다.
가장 중요한 문제는 **단일 책임 원칙(SRP)**을 위반하게 된다는 것입니다.
즉, 하나의 컴포넌트가 두 가지 이상의 책임(기능, UI)을 가지게 되어, 코드가 복잡해지고 확장성이 떨어집니다.

이를 해결하려면 기능과 UI를 분리해야 합니다.
즉, 컴포넌트는 필요한 최소한의 기능만을 제공하고, 스타일이나 레이아웃은 props와 children을 활용해 외부에서 주입받는 방식으로 설계해야 합니다.
이렇게 하면 컴포넌트는 기능에만 집중할 수 있고, 스타일과 UI는 외부에서 유연하게 조정할 수 있습니다.

단일책임원칙을 잘 지킨 컴포넌트를 props와 children을 활용하여 컴포넌트끼리 조합하여 확장성이 높은 컴포넌트를 구축할 수 있습니다.

### 본론: 어떻게 재사용 가능한 컴포넌트를 구축했을끼?

1. EtcStyles, React.Children을 활용

서론에서 이야기했듯이 컴포넌트 외부 스타일을 React.Children과 props(EtcStyles)로 스타일링합니다.

```tsx
export interface ITabListProps extends ComponentPropsWithoutRef<'ul'> {
  etcStyles?: CSSObject;
  children: React.ReactNode;
}
```

2. Polymoric 컴포넌트 구축

리액트 컴포넌트를 구축하기 위해서는 특정 태그를 지정을 해주어야한다는 문제점이 있습니다. 이 또한 props를 활용해 사용할 태그를 외부로부터 주입받아서 활용했습니다.

```tsx
const Center = <T extends React.ElementType = 'div'>({
  as, // 외부로부터 입력받는 태그
  direction = 'row',
  etcStyles = {},
  children,
  ...attribute
}: PolymorpicProps<T, ICenterProps>) => {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction={direction}
      justify="center"
      align="center"
      etcStyles={etcStyles}
      {...attribute}
    >
      {children}
    </Flex>
  );
};
```

특정 태그의 DOM 속성들(예: onClick, id, value 등)을 props로 받을 수 있도록 제너릭 타입을 활용하여 PolymorphicProps 타입을 정의했습니다.

```tsx
xport type PolymorpicProps<T extends ElementType, P> = {
  as?: T;
} & P &
  ComponentPropsWithoutRef<T>;
```

3. 합성 컴포넌트 패턴

합성 컴포넌트 패턴을 활용하면 UI 기능을 독립적인 작은 컴포넌트로 나누어 구성할 수 있습니다.
이때, Context API를 사용해 전역 상태를 관리하면서 각 컴포넌트가 필요한 데이터를 손쉽게 주고받도록 합니다.

**하나의 기능을 수행하는 컴포넌트로 분리**

- 각 컴포넌트가 하나의 역할이나 기능만 수행하도록 만들어 응집도를 높이고 복잡성을 줄입니다.
- 예를 들어, 버튼, 입력 필드, 모달 등을 각각 독립적인 컴포넌트로 구성하여 필요할 때 조립할 수 있도록 합니다.

**Context API를 통해 상태와 로직을 중앙 집중화**

- 전역 상태나 공통 로직이 필요한 경우, Context API를 사용하여 상태를 관리하고 필요한 컴포넌트에 전달합니다.
- 덕분에 상태를 직접 전달하지 않아도 트리 구조 깊숙이 있는 컴포넌트까지 자연스럽게 상태를 공유할 수 있습니다.

**유연한 조합을 통해 다양한 UI를 구성**

- 기본 컴포넌트들을 조합하여 하나의 큰 UI를 만들고, 일부 컴포넌트만 교체하거나 수정함으로써 유연하게 확장할 수 있습니다.
- 기능 요구사항이 변경되더라도 각 컴포넌트를 독립적으로 수정할 수 있어 전체 구조를 변경하지 않고도 요구사항을 쉽게 반영할 수 있습니다.

4. render props 패턴 활용

합성컴포넌트 패턴에서 ui에서 활용한 상태(ex. isOpen, isSelected) 들을 외부로부터 공유하고 싶을 때 사용합니다.

```tsx
<Pagination.Provider>
  <Pagination.BtnContainer totalPage={21} range={5}>
    {({ pageNumList, isNextDisabled, isPrevDisabled }) => {
      return (
        <Flex gap="8px">
          <Pagination.PrevBtn isDisabled={isPrevDisabled} />
          {pageNumList.map((pageNum) => {
            return <Pagination.NumBtn pageNum={pageNum} />;
          })}
          <Pagination.NextBtn isDisabled={isNextDisabled} />
        </Flex>
      );
    }}
  </Pagination.BtnContainer>
</Pagination.Provider>
```

## 결론

celuveat-renew-client 프로젝트를 진행하면서 재사용 가능한 UI 라이브러리를 구축해보았습니다.
추상화, 모듈화에 대해 더 깊게 생각해보는 좋은 경험이었습니다.

더 나아가 모든 프로젝트에서 활용 가능한 UI 라이브러리를 구축해보고 싶습니다.
