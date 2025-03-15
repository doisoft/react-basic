# React + Vite React Hooks

## 08. React.memo로 컴포넌트 최적화하기 (ft. useMemo, useCallback)


- 꼭 필요할때만 사용
1. 컴포넌트가 같은 Props로 자주 렌더링 될 때
2. 컴포넌트가 렌더링이 될 때마다 복잡한 로직을 처리해야할 때


```
const Student = ({ name, age, address }) => {
    return (
        <div>
            <h1>{name}</h1>
            <span>{age}</span>
            <span>{address}</span>
        </diev>
    )
}
```
- Prop Check > (name, age, address) 변화가 있을 경우 렌더링
- Prop Check > (name, age, address) 변화가 없을 경우 재사용