import { CollapsedType } from '../UncontrolledAccordion'

export const collapsedReducer = (
	state: CollapsedType,
	action: toggleCollapsedACType
): CollapsedType => {
	switch (action.type) {
		case 'TOGGLE-COLLAPSED': {
			return { ...state, collapsed: !state.collapsed }
		}
		default: {
			throw new Error('Bad action type')
		}
	}
}

export type toggleCollapsedACType = ReturnType<typeof toggleCollapsedAC>

export const toggleCollapsedAC = (collapsed: boolean) => {
	return {
		type: 'TOGGLE-COLLAPSED',
		payload: {
			collapsed
		}
	} as const
}
