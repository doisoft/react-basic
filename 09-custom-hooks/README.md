# React + Vite React Hooks

## 09. Custom Hooks 커스텀 훅

- 
1. 
2. 

- useInput
```
import { useState } from "react"

export function useInput(initValue, submitAction) {
    const [inputValue, setInputValue] = useState(initValue);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit]
}
```

- useFetch
```
import { useEffect } from "react";
import { useState } from "react";

export function useFetch(baseUrl, initType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  useEffect(() => {
    fetchUrl(initType);
  }, []);

  return {
    data, fetchUrl
  };
}
```
 