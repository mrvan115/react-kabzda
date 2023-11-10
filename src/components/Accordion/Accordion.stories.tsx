import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Accordion } from './Accordion'
import { useState } from 'react'

const meta: Meta<typeof Accordion> = {
	component: Accordion
}

export default meta

// type Story = StoryObj<typeof Accordion>
//
// export const FirstStory: Story = {
// 	args: {
// 		titleValue: 'First Story',
// 		collapsed: false,
// 		callBack: () => {}
// 	}
// }

const callBackHandler = action('callback')

export const CollapsedAccordion = () => {
	return (
		<Accordion
			titleValue={'Collapsed Accordion'}
			collapsed={true}
			callBack={callBackHandler}
			onClick={() => {}}
			items={[]}
		/>
	)
}

export const OpenedAccordion = () => {
	return (
		<Accordion
			titleValue={'Opened Accordion'}
			collapsed={false}
			callBack={callBackHandler}
			onClick={() => {}}
			items={[]}
		/>
	)
}

export const AccordionDemo = () => {
	const [collapsed, setCollapsed] = useState(false)
	return (
		<Accordion
			titleValue={'Accordion Demo'}
			collapsed={collapsed}
			callBack={() => {
				setCollapsed(!collapsed)
			}}
			onClick={() => {}}
			items={[]}
		/>
	)
}
