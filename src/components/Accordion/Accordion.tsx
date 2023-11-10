import React, { FC } from 'react'

type ItemsType = {
	title: string
	value: any
}

type AccordionPropsType = {
	titleValue: string
	collapsed: boolean
	callBack: (collapsed: boolean) => void
	items: ItemsType[]
	onClick: (value: any) => void
}

export const Accordion = (props: AccordionPropsType) => {
	console.log('accordion rendering')
	return (
		<div>
			<AccordionTitle
				title={props.titleValue}
				callBack={() => props.callBack(!props.collapsed)}
			/>
			{!props.collapsed && (
				<AccordionBody items={props.items} onClick={props.onClick} />
			)}
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

type AccordionBodyPropsType = {
	items: ItemsType[]
	onClick: (value: any) => void
}

const AccordionBody: FC<AccordionBodyPropsType> = (props) => {
	console.log('appB')
	return (
		<ul>
			{props.items.map((i, index) => (
				<li
					onClick={() => {
						props.onClick(i.value)
					}}
					key={index}
				>
					{i.title}
				</li>
			))}
		</ul>
	)
}
