import { useState, useTransition } from "react";

export default function App() {
const [input, setInput] = useState("");
const [list, setList] = useState([]);

const [isPending, startTransition] = useTransition();

const LIST_SIZE = 8000;
function inputHandler(e) {
setInput(e.target.value);
startTransition(() => {
const l = [];
for (let i = 0; i < LIST_SIZE; i++) {
l.push(e.target.value);
}
setList(l);
});
}
return (
<div>
<input type="text" onChange={inputHandler} />
{isPending ? (
<p>loading...</p>
) : (
<ul>
{list.map((e) => {
return <li key={Math.random()}>{e}</li>;
})}
</ul>
)}
</div>
);
}
