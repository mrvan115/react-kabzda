import React, { useState } from 'react'

type RatingPropsType = {}

type RatingType = 0 | 1 | 2 | 3 | 4 | 5

export const UncontrolledRating = (props: RatingPropsType) => {
	console.log('rating rendering')

	const [value, setValue] = useState<RatingType>(4)

	return (
		<div>
			<Star selected={value > 0} />
			<Star selected={value > 1} />
			<Star selected={value > 2} />
			<Star selected={value > 3} />
			<Star selected={value > 4} />
		</div>
	)
}
//---------------------------------------------------------------------
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
