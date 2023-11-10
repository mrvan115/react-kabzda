import type { Meta, StoryObj } from '@storybook/react'
import { ChangeEvent, useState } from 'react'
import { action } from '@storybook/addon-actions'

export default {
	title: 'input'
}

export const UncontrolledInput = () => <input />
export const TrackValueOfUncontrolledInput = () => {
	const [value, setValue] = useState('')
	return (
		<>
			<input
				onChange={(e) => {
					setValue(e.currentTarget.value)
				}}
			/>{' '}
			- {value}
		</>
	)
}
export const ControlledInputWithFixedValue = () => (
	<input value={'it-incubator'} />
)
export const ControlledInput = () => {
	const [parentValue, setParentValue] = useState('')

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setParentValue(e.currentTarget.value)
	}

	return <input value={parentValue} onChange={onChangeHandler} />
}
export const ControlledCheckbox = () => {
	const [checkMode, setCheckMode] = useState(false)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setCheckMode(e.currentTarget.checked)
	}
	return (
		<input type='checkbox' onChange={onChangeHandler} checked={checkMode} />
	)
}
export const ControlledSelect = () => {
	const [parentValue, setParentValue] = useState<string>('0')

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setParentValue(e.currentTarget.value)
	}

	return (
		<select value={parentValue} onChange={onChangeHandler}>
			<option value={'0'}>none</option>
			<option value='1'>Minsk</option>
			<option value='2'>Moscow</option>
			<option value='3'>Kiev</option>
		</select>
	)
}
