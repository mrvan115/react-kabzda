import React, { FC, useState } from 'react'

type OnOffPropsType = {
	on: boolean
	setOn: (on: boolean) => void
}

export const OnOff: FC<OnOffPropsType> = (props) => {
	const onStyle = {
		display: 'inline-block',
		marginRight: '3px',
		width: '30px',
		height: '20px',
		border: '1px solid black',
		backgroundColor: props.on ? 'green' : 'white'
	}
	const offStyle = {
		display: 'inline-block',
		marginRight: '5px',
		width: '30px',
		height: '20px',
		border: '1px solid black',
		backgroundColor: props.on ? 'white' : 'red'
	}
	const indicatorStyle = {
		display: 'inline-block',
		width: '10px',
		height: '10px',
		borderRadius: '5px',
		border: '1px solid black',
		backgroundColor: props.on ? 'green' : 'red'
	}

	const switchOnHandler = () => {
		props.setOn(true)
	}

	const switchOffHandler = () => {
		props.setOn(false)
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
