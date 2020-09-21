const sharp = require("sharp");
import fs from 'fs';
import path from "path";

export async function resize(image_path: string, width: number, height?: number){
    try {
        const filename = path.basename(image_path, '.jpg');
        if(!filename) return;
        if(height && width ) return await sharp(image_path).resize(width, height).jpeg().toFile(`${filename}-${width}x${height}.jpg`);
        if(width && !height) return await sharp(image_path).resize(width).jpeg().toFile(`${filename}-${width}x${width}.jpg`);
    } catch (error) {
        console.log(error.stack)
    }
}

export async function sharpen(img_path: string, sigma?: number, flat?: number, jagged?: number){
    try {
        const filename = path.basename(img_path, '.jpg');
        if(!filename) return;
        if(sigma && flat && jagged) return await sharp(img_path).sharpen(sigma, flat, jagged).jpeg().toFile(`${filename}-sharpened.jpg`)
        if(flat && jagged) return await sharp(img_path).sharpen(flat, jagged).jpeg().toFile(`${filename}-sharpened.jpg`)
        if(flat && !jagged) return await sharp(img_path).sharpen(sigma, flat).jpeg().toFile(`${filename}-sharpened.jpg`)
        if(jagged && !flat) return await sharp(img_path).sharpen(sigma, jagged).jpeg().toFile(`${filename}-sharpened.jpg`)
    } catch (error) {
        console.log(error.stack)   
    }
}

sharpen('./imgs/bolivia2.jpg', 2, 2.0, 3.0)
resize('./imgs/bolivia2.jpg', 200, 100);
resize('./imgs/bolivia3.jpg', 200)