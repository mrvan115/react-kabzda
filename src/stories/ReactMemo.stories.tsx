import React, { useState } from 'react'

export default {
	title: 'React.memo demo'
}

const NewMessageCounterSecret = (props: { count: number }) => {
	console.log('NEW MESSAGE')
	return <div>{props.count}</div>
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

const NewMessageCounter = React.memo(NewMessageCounterSecret)
const Users = React.memo(UsersSecret)

export const Example1 = () => {
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

	console.log('render')
	return (
		<>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={addUser}>add user</button>
			<NewMessageCounter count={count} />
			<Users users={users} />
		</>
	)
}
