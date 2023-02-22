
const initialState = {
    positions: [],
}

const positionreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'positions/setPositions':
            return {
                ...state,
                positions: action.payload,
            }
        default:
            return state
    }
}

export default positionreducer