import React, { useReducer, useState } from 'react'
import {
	collapsedReducer,
	toggleCollapsedAC
} from './reducers/collapsedReducer'

type AccordionPropsType = {
	titleValue: string
}

export type CollapsedType = {
	collapsed: boolean
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
	console.log('accordion rendering')
	const [state, dispatchCollapsed] = useReducer(collapsedReducer, {
		collapsed: true
	})

	const toggleCollapsed = (collapsed: boolean) => {
		dispatchCollapsed(toggleCollapsedAC(collapsed))
	}

	const toggleCollapsedHandler = () => {
		toggleCollapsed(state.collapsed)
	}
	return (
		<div>
			<AccordionTitle
				title={props.titleValue}
				onClick={toggleCollapsedHandler}
			/>
			{!state.collapsed && <AccordionBody />}
		</div>
	)
}
//-----------------------------------------------------------------
type AccordionTitlePropsType = {
	title: string
	onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
	return <h3 onClick={() => props.onClick()}>{props.title}</h3>
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
