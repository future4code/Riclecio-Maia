import axios from 'axios'
import { Address } from "../types/Address";

const baseUrl = "https://viacep.com.br/ws"


export const getAddressinfo= async(cep:string): Promise< Address | null>=>{
try {
    const response = await axios.get(`${baseUrl}/${cep}/json/`)
    const address: Address = {
        uf: response.data.uf,
        estado: response.data.localidade,
        bairro: response.data.bairro,
        logradouro: response.data.logradouro,
        cidade:response.data.bairro,
        complemento:response.data.complemento
    }

    return address


} catch (error) {
    console.log("Erro no serviço getAddressInfo:", error)
    return null
    
}

}