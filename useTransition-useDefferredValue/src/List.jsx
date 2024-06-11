import { useMemo, useDeferredValue, useEffect } from "react";

export default function List({ input }) {
  const LIST_SIZE = 10000;
  const defferredInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{defferredInput}</div>);
    }
    return l;
  }, [defferredInput]);
  useEffect(() => {
    console.log(`Input: ${input} \n Defferred: ${defferredInput}`);
  }, [input, defferredInput]);
  return list;
}
