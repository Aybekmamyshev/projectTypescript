
export const buildUrl = (url : string, params : string) => {
    let  urlWitchParams  = url
    Object.entries(params).forEach(([key , value], index) =>{
        const sign = !index ?  "?" : "&";
        urlWitchParams += `${sign}${key}=${value}`
    })
    return urlWitchParams
}