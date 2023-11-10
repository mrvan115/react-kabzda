import React, { useState } from 'react'
import './App.css'
import { Accordion } from './components/Accordion/Accordion'
import { Rating, RatingValueType } from './components/Rating'
import { UncontrolledOnOff } from './components/OnOff/UncontrolledOnOff'
import { UncontrolledAccordion } from './components/UncontrolledAccordion'
import { UncontrolledRating } from './components/UncontrolledRating'
import { OnOff } from './components/OnOff/OnOff'

function App() {
	console.log('app')

	const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
	const [accordionCollapsed, setAccordionCollapsed] = useState(true)
	const [switchOn, setSwitchOn] = useState(false)

	return (
		<div className='App'>
			<PageTitle title={'This is APP component'} />
			Article 1
			<Accordion
				titleValue={'Menu'}
				collapsed={accordionCollapsed}
				callBack={setAccordionCollapsed}
				items={[{ title: '', value: '' }]}
				onClick={() => {}}
			/>
			<Accordion
				titleValue={'Users'}
				collapsed={accordionCollapsed}
				callBack={setAccordionCollapsed}
				items={[{ title: '', value: '' }]}
				onClick={() => {}}
			/>
			Article 2
			<Rating value={ratingValue} setRatingValue={setRatingValue} />
			<Rating value={ratingValue} setRatingValue={setRatingValue} />
			<UncontrolledOnOff />
			<UncontrolledOnOff />
			<UncontrolledOnOff />
			<UncontrolledOnOff />
			<UncontrolledAccordion titleValue={'Uncontrolled'} />
			<UncontrolledAccordion titleValue={'Uncontrolled'} />
			<UncontrolledRating />
			<UncontrolledRating />
			<OnOff on={switchOn} setOn={setSwitchOn} />
			<OnOff on={switchOn} setOn={setSwitchOn} />
		</div>
	)
}

type PageTitlePropsType = {
	title: string
}

const PageTitle = (props: PageTitlePropsType) => {
	console.log('apptitle')
	return <h1>{props.title}</h1>
}

export default App
