// import axios
import axios from "axios"

// configure axios
export const commonAPI = async (httpMethod,url,reqBody)=>{
    // httpMethod,url,reqBody anyname possible
    const reqConfig = {
        method: httpMethod,
        url, // url value also url so just write url
        data: reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    })
    .catch((err)=>{
        return err
    })
}
// same for all axios related so learn