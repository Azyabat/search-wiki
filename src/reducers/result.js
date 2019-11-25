export default function MainStore(state = { text: '' }, action) {
    switch (action.type) {
        case 'RESULT_WIKI':
            return {
                ...state, text: action.payload
            }
        default: return state;
    }
}