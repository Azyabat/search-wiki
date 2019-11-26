export const SetResultWiki = (profile) => {
    return { type: 'SET_SEARCH_RESULT', payload: profile };
};
export const AddChosen = (element) => {
    return { type: 'ADD_CHOSEN', payload: element };
};
export const DelChosen = (element) => {
    return { type: 'DEL_CHOSEN', payload: element };
};