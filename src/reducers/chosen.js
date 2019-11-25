export default function MainStore(state = { chosen: '' }, action) {
    switch (action.type) {
        case 'ADD_CHOSEN':
            let isAdd = true

            state.chosen && state.chosen.forEach(element => {
                if (element.url === action.payload.url && isAdd) {
                    isAdd = false;
                }
            });
            if (isAdd) {
                return { ...state, chosen: [...state.chosen, action.payload] }

            } else {
                return state;
            }
            break;
        case 'DEL_CHOSEN':
            let filtered = state.chosen.filter((item) => item.url !== action.payload);
            return (action.payload !== ' ' && Object.assign({}, state,
                {
                    chosen: filtered
                }
            ));
            break;

        default: return state;
    }
}