const MAXVAL = 255
export default function generateHex() {
    const genVal = Math.floor(Math.random() * MAXVAL);
    let returnVal = genVal.toString(16);

    if(returnVal.length === 1){
        returnVal = '0' + returnVal;
    }
    return returnVal;
}

export { generateHex };