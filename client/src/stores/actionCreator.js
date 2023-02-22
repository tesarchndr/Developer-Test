import {
    GET_DEPARTMENTS,
    GET_EMPLOYEES,
    GET_ONEEMPLOYEE,
    GET_POSITIONS
} from './actionType';

const baseUrl = 'http://localhost:3000';

export const getDepartments = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/department');
            const data = await response.json();
            dispatch({
                type: GET_DEPARTMENTS,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createDepartment = (department) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/department', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(department),
            });
            const data = await response.json();
            dispatch(getDepartments());
        } catch (error) {
            console.log(error);
        }
    }   
}

export const deleteDepartment = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + '/department/' + id, {
                method: 'DELETE',
            });
            const data = await response.json();
            const { departments } = getState().departments;
            const newDepartments = departments.filter((department) => department.id !== id);
            dispatch({
                type: GET_DEPARTMENTS,
                payload: newDepartments,
            });
        } catch (error) {
            console.log(error);
        }
    }
}




// EMPLOYEE
export const getEmployees = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/employee');
            const data = await response.json();
            dispatch({
                type: GET_EMPLOYEES,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getOneEmployee = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/employee/' + id);
            const data = await response.json();
            dispatch({
                type: GET_ONEEMPLOYEE,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createEmployee = (employee) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });
            const data = await response.json();
            dispatch(getEmployees());
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateEmployee = (employee, id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/employee/' + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });
            const data = await response.json();
            dispatch(getEmployees());
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteEmployee = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + '/employee/' + id, {
                method: 'DELETE',
            });
            const data = await response.json();
            const {employees} = getState().employees;
            const newEmployees = employees.filter((employee) => employee.id !== id);
            dispatch({
                type: GET_EMPLOYEES,
                payload: newEmployees,
            });
        } catch (error) {
            console.log(error);
        }
    }
}


// POSITION
export const getPosition = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/position');
            const data = await response.json();
            dispatch({
                type: GET_POSITIONS,
                payload: data,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const createPosition = (position) => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + '/position', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(position),
            });
            const data = await response.json();
            dispatch(getPosition());
        } catch (error) {
            console.log(error);
        }
    }
}

export const deletePosition = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(baseUrl + '/position/' + id, {
                method: 'DELETE',
            });
            const data = await response.json()
            const { positions } = getState().positions
            const newPositions = positions.filter((position) => position.id !== id);
            dispatch({
                type: GET_POSITIONS,
                payload: newPositions,
            })
        } catch (error) {
            console.log(error);
        }
    }
}

