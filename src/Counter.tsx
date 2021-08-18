import { useState } from "react"

const Counter = () => {
	const [count, setCount] = useState<number>(0)

	return pug`
	div
		h1= count
		button(onClick=()=>setCount(e=>e+1)) Add
	`
}
export default Counter
