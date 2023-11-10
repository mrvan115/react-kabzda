import React, { FC, useState } from 'react'
import s from './Select.module.css'

type ItemType = {
	title: string
	value: any
}

type SelectPropsType = {
	value?: any
	onChange: (value: any) => void
	items: ItemType[]
}

export const Select: FC<SelectPropsType> = (props) => {
	const [active, setActive] = useState(true)

	const selectedItem = props.items.find((i) => i.value === props.value)
	const toggleItems = () => setActive(!active)
	const onItemClick = (value: any) => {
		props.onChange(value)
		toggleItems()
	}
	return (
		<>
			<div className={s.select}>
				<span className={s.main} onClick={toggleItems}>
					{selectedItem && selectedItem.title}
				</span>
				{active && (
					<div className={s.items}>
						{props.items.map((i) => (
							<div
								key={i.value}
								className={s.title}
								onClick={() => onItemClick(i.value)}
							>
								{i.title}
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
