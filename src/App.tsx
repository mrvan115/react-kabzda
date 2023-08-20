import React from 'react'
import './App.css'
import { Accordion } from './components/Accordion'
import { Rating } from './components/Rating'

function App() {
	console.log('app')
	return (
		<div className='App'>
			<PageTitle title={'This is APP component'} />
			Article 1
			<Rating value={4} />
			<Accordion titleValue={'Menu'} collapsed={true} />
			<Accordion titleValue={'Users'} collapsed={false} />
			Article 2
			<Rating value={0} />
			<Rating value={1} />
			<Rating value={2} />
			<Rating value={3} />
			<Rating value={4} />
			<Rating value={5} />
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
