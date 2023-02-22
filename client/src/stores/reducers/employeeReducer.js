const initialState = {
    employees: [],
    employee: {},
}

const employeereducer = (state = initialState, action) => {
    switch (action.type) {
        case 'employees/setEmployees':
            return {
                ...state,
                employees: action.payload,
            }
        case 'employee/setEmployee':
            return {
                ...state,
                employee: action.payload,
            }
        default:
            return state
    }
}

export default employeereducer