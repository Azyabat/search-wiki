export default function MainStore(state = { chosen: '' }, action) {
    switch (action.type) {
        case 'ADD_CHOSEN':

            return { ...state, chosen: [...state.chosen, action.payload] }

        case 'DEL_CHOSEN':
            return {
                ...state,
                chosen: state.chosen.filter((item) => item.url !== action.payload)
            }

        default: return state;
    }
}