import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import departmentreducer from './reducers/departmentReducer';
import employeereducer from './reducers/employeeReducer';
import positionreducer from './reducers/positionReducer';

const rootReducer = combineReducers({
    departments: departmentreducer,
    employees: employeereducer,
    positions: positionreducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
