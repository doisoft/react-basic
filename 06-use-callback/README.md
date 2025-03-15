# React + Vite React Hooks

## 05. useCallback

1. ``
2. ``

- 
- 

```
useCallback(() => {
    return value;
}, [item])
```

```
function Component() {
    const calculate = useCallback((num) => {
        num+1
    }, [item])

    return <div>{value}</div>
}
```
- `<Component />` 렌더링 -> component 함수 호출 -> Memoiz 된 함수를 재사용