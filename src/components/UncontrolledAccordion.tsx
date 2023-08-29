import React, { useState } from 'react'

type AccordionPropsType = {
	titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
	console.log('accordion rendering')
	const [collapsed, setCollapsed] = useState(true)

	const clickHandler = () => {
		setCollapsed(!collapsed)
	}
	return (
		<div onClick={clickHandler}>
			<AccordionTitle title={props.titleValue} />
			{!collapsed && <AccordionBody />}
		</div>
	)
}
//-----------------------------------------------------------------
type AccordionTitlePropsType = {
	title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
	return <h3>{props.title}</h3>
}
const AccordionBody = () => {
	console.log('appB')
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}
