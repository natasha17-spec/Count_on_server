import axios from 'axios'

const instanse = axios.create({
    baseURL:"http://localhost:3004/"
})

type ResponseType = {
    value:number
}

const counterApi = {
    getCounterValue:()=>{
       return instanse.get<ResponseType>('counter')
           .then((res)=>res.data.value)
    },
    incrementValueApi: (value: number)=>{
        return instanse.post<ResponseType>('counter', {value})
            .then((res)=>res.data.value)
    }
}
export default counterApi;