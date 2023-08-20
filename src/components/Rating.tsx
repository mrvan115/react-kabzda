import React from 'react'

type RatingPropsType = {
	value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => {
	console.log('rating rendering')
	return (
		<div>
			<Star selected={props.value > 0} />
			<Star selected={props.value > 1} />
			<Star selected={props.value > 2} />
			<Star selected={props.value > 3} />
			<Star selected={props.value > 4} />
		</div>
	)
}

type StarPropsType = {
	selected: boolean
}

const Star = (props: StarPropsType) => {
	console.log('star')
	if (props.selected) {
		return (
			<span>
				<b>star </b>
			</span>
		)
	} else {
		return <span>star </span>
	}
}
