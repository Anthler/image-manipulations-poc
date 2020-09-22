import Jimp from "jimp/es";

async function resize_and_watermark(url: string){
    try {
        const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        const image = await Jimp.read(url);
        image.resize(Jimp.AUTO, 250)
        image.quality(1)
        image.print(font, Jimp.HORIZONTAL_ALIGN_LEFT, Jimp.VERTICAL_ALIGN_TOP, "JHELY BOLIVIA")
        image.write('jimp-imgs/bg1-new.jpeg');
    } catch (error) {
        console.log(error.message);
    }finally{
        process.exit(0);
    }
}

resize_and_watermark('./imgs/bg1.jpg');