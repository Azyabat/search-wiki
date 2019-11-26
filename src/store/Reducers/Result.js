export default function MainStore(state = { text: '' }, action) {
    switch (action.type) {
        case 'SET_SEARCH_RESULT':
            return {
                ...state, text: action.payload
            }
        default: return state;
    }
}