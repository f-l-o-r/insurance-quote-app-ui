
import * as api from '../service/connection-api'
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export const getPosts = () => async (dispatch: any) => {
    try {
      const { data } = await api.fetchInsurances();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };
  
  export const createPost = (insurance: any) => async (dispatch: any) => {
    try {
      const { data } = await api.createInsurance(insurance);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error: any) {
      console.log(error.message);
    }
  };