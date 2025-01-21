import { useState } from 'react'

export default {
	title: 'useState demo'
}

const generateData = () => {
	//difficult counting
	console.log('generateDate')
	return 1
}

export const Example1 = () => {
	console.log('Example1')
	const [counter, setCounter] = useState(generateData)

	const changer = (state: number) => state + 1

	return (
		<>
			<button onClick={() => setCounter(changer)}>+</button>
			{counter}
		</>
	)
}
