import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { casesReducer } from "./casesReducer";
import { userCasesReducer } from "./userCasesReducer";

export default combineReducers({ 
    authReducer, 
    casesReducer,
    userCasesReducer
})
