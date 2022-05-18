import {DifficultType} from "../constants/TYPES";
import {API} from "../constants/API";
import axios from "axios";


export const getDifficult = async ():Promise<DifficultType[]> => {
  try {
    const response = await axios.get(API.DIFFICULT)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}