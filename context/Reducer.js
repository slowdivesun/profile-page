const Reducer = (state, action) => {
    switch (action.type) {
        case "ADD_SCHOOL":
            return {
                ...state,
                school: [
                    ...state.school, action.payload.school
                ]
            };
        case "ADD_COMPANY":
            return {
                ...state,
                company: [
                    ...state.company, action.payload.company
                ]
            };
        case "ADD_CERTIFICATE":
            return {
                ...state,
                certificate: [
                    ...state.certificate, action.payload.certificate
                ]
            };
        default:
            return state
    }
}

export default Reducer;