const initialState = {
    departments: [],
}

const departmentreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'departments/setDepartments':
            return {
                ...state,
                departments: action.payload,
            }
        default:
            return state
    }
}

export default departmentreducer

