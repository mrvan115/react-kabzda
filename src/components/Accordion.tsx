import React from 'react'

type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
	callBack: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
	console.log('accordion rendering')
	return (
		<div>
			<AccordionTitle
				title={props.titleValue}
				callBack={() => props.callBack(!props.collapsed)}
			/>
			{!props.collapsed && <AccordionBody />}
		</div>
	)
}

type AccordionTitlePropsType = {
	title: string
	callBack: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
	return <h3 onClick={props.callBack}>{props.title}</h3>
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
