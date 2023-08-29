import React, { FC, useState } from 'react'

type OnOffPropsType = {
	// on: boolean
}

export const OnOff: FC<OnOffPropsType> = (props) => {
	const [on, setOn] = useState(false)

	const onStyle = {
		display: 'inline-block',
		marginRight: '3px',
		width: '30px',
		height: '20px',
		border: '1px solid black',
		backgroundColor: on ? 'green' : 'white'
	}
	const offStyle = {
		display: 'inline-block',
		marginRight: '5px',
		width: '30px',
		height: '20px',
		border: '1px solid black',
		backgroundColor: on ? 'white' : 'red'
	}
	const indicatorStyle = {
		display: 'inline-block',
		width: '10px',
		height: '10px',
		borderRadius: '5px',
		border: '1px solid black',
		backgroundColor: on ? 'green' : 'red'
	}

	const switchOnHandler = () => {
		setOn(true)
	}

	const switchOffHandler = () => {
		setOn(false)
	}

	return (
		<div>
			<div onClick={switchOnHandler} style={onStyle}>
				On
			</div>
			<div onClick={switchOffHandler} style={offStyle}>
				Off
			</div>
			<div style={indicatorStyle}></div>
		</div>
	)
}
