import { collapsedReducer, toggleCollapsedAC } from './collapsedReducer'
import { CollapsedType } from '../UncontrolledAccordion'

test('collapsed should be true', () => {
	// data
	const state: CollapsedType = {
		collapsed: false
	}

	// action
	const newState = collapsedReducer(state, {
		type: 'TOGGLE-COLLAPSED',
		payload: { collapsed: true }
	})

	//expection
	expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
	// data
	const state: CollapsedType = {
		collapsed: true
	}

	// action
	const newState = collapsedReducer(state, {
		type: 'TOGGLE-COLLAPSED',
		payload: { collapsed: false }
	})

	//expection
	expect(newState.collapsed).toBe(false)
})
