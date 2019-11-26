export const getLabel = element => {
    return element.searchResult.text[1]
}
export const getDescription = element => {
    return element.searchResult.text[2]
}
export const getUrl = element => {
    return element.searchResult.text[3]
}
export const getChosen = element => {
    return element.chosen.chosen
}