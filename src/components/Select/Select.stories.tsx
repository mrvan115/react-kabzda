import type { Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Select } from './Select'
import { useState } from 'react'

const meta: Meta<typeof Select> = {
	component: Select
}

export default meta

const callBackHandler = action('Value changed')

export const WithValue = () => {
	const [value, setValue] = useState('2')
	const toggleValue = (value: any) => {
		setValue(value)
	}
	return (
		<>
			<Select
				value={value}
				onChange={toggleValue}
				items={[
					{ value: '1', title: 'Moscow' },
					{ value: '2', title: 'Minsk' },
					{ value: '3', title: 'Kiev' }
				]}
			/>
		</>
	)
}

export const WithoutValue = () => {
	const [value, setValue] = useState(null)
	const toggleValue = (value: any) => {
		setValue(value)
	}
	return (
		<>
			<Select
				onChange={toggleValue}
				value={value}
				items={[
					{ value: '1', title: 'Moscow' },
					{ value: '2', title: 'Minsk' },
					{ value: '3', title: 'Kiev' }
				]}
			/>
		</>
	)
}
