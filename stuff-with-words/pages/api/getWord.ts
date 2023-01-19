import fs from "fs";
import path from "path";

export function getOneWordAsArray() {
    const words = fs.readFileSync(path.join(process.cwd(), '/public/words_alpha.txt')).toString().split(/[\n\r]+/)
    const randomIndex = Math.floor(Math.random() * words.length)
    const word = words[randomIndex]
    const wordArray = word.split('')

    return wordArray;
}

const getWord = (req: any, res: any) => {

    const word = getOneWordAsArray()
    if(word === undefined || word === null)
    {
        res.status(500).json({
                words: undefined,
            })
    }
    else
    {
        res.status(200).json({
                words: word,
            })
    }

    return res;
}

export default getWord