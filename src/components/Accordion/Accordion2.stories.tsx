import { Accordion } from './Accordion'
import { action } from '@storybook/addon-actions'
import { useState } from 'react'

export default {
	title: 'Accordion2',
	component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => (
	<Accordion
		titleValue={'Menu'}
		collapsed={true}
		callBack={callback}
		items={[]}
		onClick={onClickCallback}
	/>
)

export const MenuUncollapsedMode = () => (
	<Accordion
		titleValue={'Users'}
		collapsed={false}
		callBack={callback}
		items={[
			{ title: 'Dimych', value: 1 },
			{ title: 'Valera', value: 2 },
			{ title: 'Roman', value: 3 },
			{ title: 'Ivan', value: 4 }
		]}
		onClick={onClickCallback}
	/>
)

export const MenuChanging = () => {
	const [value, setValue] = useState<boolean>(true)

	const changeValue = () => {
		setValue(!value)
	}

	return (
		<Accordion
			titleValue={'Users'}
			collapsed={value}
			callBack={changeValue}
			items={[
				{ title: 'Dimych', value: 1 },
				{ title: 'Valera', value: 2 },
				{ title: 'Roman', value: 3 },
				{ title: 'Ivan', value: 4 }
			]}
			onClick={onClickCallback}
		/>
	)
}
