import { useState } from 'react';

export default function useStates(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const updateState = () => setState(s => s + 1);
  return [state, updateState];
}
