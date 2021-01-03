import axios from 'axios-https-proxy-fix'
import baseUrl from './config'

export const getGloves = () => {
    axios
        .get(`${baseUrl}/gloves`)
        .then(response => {
            const gloves = response.data
        })
    
    return gloves
}