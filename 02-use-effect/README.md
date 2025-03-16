# React + Vite React Hooks

## 02. useEffect

1. `useEffect(() => { // 작업... })`
- 렌더링 될때 마다 매번 콜백이 실행 됨
2. `useEffect(() => { // 작업... }, [ value ])`
- 화면에 첫 렌더링 될때 실행.
- value 값이 바뀔때 실행
3. `useEffect(() => { // 작업... }, [])`
- 화면에 첫 렌더링 될때 한번 실행

** useEffact는 컴포넌트가 화면에 그려지고 난 이후에 실행 됨 (비동기)
** useLayoutEffact 는 컴포넌트가 화면에 그려지기 이전에 실행 됨(동기적)

## sample
```
useEffect(() => {
    // 구독 ...

    return () => {
        // 구독 해지 ...
    }
})
```