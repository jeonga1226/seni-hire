import { useState, useEffect, useCallback } from 'react';

const useInput = (initValue = '', rule) => {
  const [value, setValue] = useState(initValue);
  const [valid, setValid] = useState('');
  const onChange = useCallback((e) => {
    setValue(() => e.target.value);
  }, []);
  // value가 변경되면 유효성 검사하기
  useEffect(() => {
    if (rule) {
      setValid(() => rule(value));
    }
  }, [value]);
  return {
    value,
    setValue,
    onChange,
    valid,
  };
};

export default useInput;