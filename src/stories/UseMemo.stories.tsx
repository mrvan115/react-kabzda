import React, { useMemo, useState } from 'react'

export default {
	title: 'useMemo'
}

export const Example1 = () => {
	const [a, setA] = useState<number>(5)
	const [b, setB] = useState<number>(4)

	let resultA = 1
	let resultB = 1

	resultA = useMemo(() => {
		let tempResultA = 1
		for (let i = 1; i <= a; i++) {
			let fake = 0
			while (fake < 1000000) {
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
			<input value={a} onChange={(e) => setA(Number(e.currentTarget.value))} />
			<input value={b} onChange={(e) => setB(+e.currentTarget.value)} />
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

export const Example2 = () => {
	const [count, setCount] = useState<number>(0)
	const [users, setUsers] = useState<Array<string>>([
		'Dimych',
		'Valera',
		'Artem'
	])
	const addUser = () => {
		let newUser = 'Sveta ' + new Date().getTime()
		setUsers([...users, newUser])
	}

	const newArray1 = useMemo(() => {
		return users.filter((u) => u.toLowerCase().indexOf('a') > -1)
	}, [users])

	const newArray2 = useMemo(() => {
		return users.filter((u) => u.toLowerCase().indexOf('s') > -1)
	}, [])

	console.log('Example2')
	return (
		<>
			<button onClick={() => setCount(count + 1)}>+</button>
			{count}
			<Users users={newArray1} />
			<Users users={newArray2} />
			<button onClick={addUser}>add user</button>
		</>
	)
}
