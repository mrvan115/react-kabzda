import React, { useMemo, useState } from 'react'

export default {
	title: 'useMemo'
}

export const DifficultCountingExample = () => {
	const [a, setA] = useState<number>(3)
	const [b, setB] = useState<number>(0)

	let resultB = 1

	const resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 10000000) {
				fake++
				const fakeValue = Math.random()
			}
			tempResultA = tempResultA * i
		}
		return tempResultA
	}, [a])

	for (let i = 1; i <= b; i++) {
		resultB = resultB * i
	}

	return (
		<>
			<input value={a} onChange={(e) => setA(+e.currentTarget.value)} />
			<input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
			<hr />
			<div>Result for a: {resultA}</div>
			<div>Result for b: {resultB}</div>
		</>
	)
}

const UsersSecret = (props: { users: Array<string> }) => {
	console.log('USERS')
	return (
		<div>
			{props.users.map((u, i) => (
				<div key={i}>{u}</div>
			))}
		</div>
	)
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
	console.log('HelpsToReactMemo')
	const [count, setCount] = useState<number>(0)
	const [users, setUsers] = useState<Array<string>>([
		'Dimych',
		'Valera',
		'Artem'
	])

	const newArray = useMemo(() => {
		return users.filter((u) => u.toLowerCase().indexOf('a') > -1)
	}, [users])

	const addUser = () => {
		let newUser = 'Sveta ' + new Date().getTime()
		setUsers([...users, newUser])
	}

	return (
		<>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => addUser()}>add user</button>
			{count}
			<Users users={newArray} />
		</>
	)
}
