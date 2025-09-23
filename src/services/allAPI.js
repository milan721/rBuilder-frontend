import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// add resume to the server -POST- reqBody
export const addResumeAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/resumes`,reqBody)
}


    // add history to server -POST- reqBod
export const addHistoryAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/history`,reqBody)
}

     // get history from server -GET
export const getHistoryAPI = async()=>{
    return await commonAPI("get",`${serverURL}/history`,"")
}

     // delete history from server -delete
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("delete",`${serverURL}/history/${id}`,"")
}

     // get a particular resume from the history - GET
export const getAResumeHistoryAPI = async(id)=>{
    return await commonAPI("get",`${serverURL}/history/${id}`,"")
}


     // update a resume from the history - PUT
export const updateResumeHistoryAPI = async(id,reqBody)=>{
    return await commonAPI("put",`${serverURL}/history/${id}`,reqBody)
}