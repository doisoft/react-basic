# React + Vite React Hooks

## 03. useRef

1. `const ref = useRef(value)` ->  `{current: value}`
2. `const ref = useRef('hello')` -> `{current: 'hello'}` -> `ref.current="hello"`

- Ref의 변화 -> No 렌더링 -> 변수들의 값이 유지됨
- State의 변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨
- DOM 요소에 접근할 때 많이 사용 됨 (예: 로그인 폼에 포커스 줄 때) 