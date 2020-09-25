import axios from "axios";
import strictUriEncode from "strict-uri-encode";

const thumbor_base_url = 'http://localhost:8888'
const thumbor_metadata = 'http://localhost:8888/meta'

export async function sharpen(image_uri: string){
    const encodedUri = strictUriEncode(image_uri);
    await axios.post(`${thumbor_base_url}/unsafe/filters:sharpen(2,1.0,true)/${encodedUri}`);
}

export async function resize(image_uri:string, width: number, height: number){
    const encodedUri = strictUriEncode(image_uri);
    return await axios.post(`${thumbor_base_url}/unsafe/${width}x${height}/${encodedUri}`)
    
}

export async function watermark(image_uri: string, watermark_text: string){
    const encodedUri = strictUriEncode(image_uri);
    return await axios.post(`${thumbor_base_url}/filters:watermark(${watermark_text},-10,-10,50)/${encodedUri}`)
}

export async function resize_sharpen_watermark(
    imageUri: string, 
    logoUri: string, 
    width: number, 
    height: number,
    sharpen_amount: number,
    sharpen_radius: number,
    luminance_only: boolean
    ){
    const encodedUri = strictUriEncode(imageUri);
    return await axios.post(`${thumbor_base_url}/unsafe/${width}x${height}/filters:sharpen(${sharpen_amount},${sharpen_radius},${luminance_only}):watermark(${logoUri}, -10,-10,50)/${imageUri}`)
}