import Head from "next/head";
import Navbar from "../components/navbar";
import {useState, useRef, useEffect, useCallback} from "react";
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Hangman = () => {
    let hangman = useRef<string[]>(new Array())
    let word = useRef('')
    let guessedLetters = useRef('')
    const [guesses, setGuesses] = useState(0)
    const [, updateState] = useState({})
    const forceUpdate = useCallback(() => updateState({}), [])
    const {data, isLoading} = useSWR('/api/getWord', fetcher)

    if(isLoading) return <h2>Loading...</h2>

    for(let i = 0; i < data.words.length; i++) {
        data.words[i] = data.words[i].toUpperCase()
    }

    word.current ||= data.words

    if(hangman.current.length === 0) {
        for (let i = 0; i < word.current.length; i++) {
            hangman.current.push('_')
        }
    }

    const handleGuess = (ev: any) => {
        ev.preventDefault()

        const letter = ev.target.guess.value.toUpperCase()
        ev.target.guess.value = ''

        if(!guessedLetters.current.includes(letter))
        {
            let index: number
            let startIndex = 0
            let indices: number[] = new Array()

            guessedLetters.current += letter

            while((index = word.current.indexOf(letter, startIndex)) > -1) {
                indices.push(index)
                startIndex = index + 1
            }
            
            if(indices.length === 0)
            {
                setGuesses(guesses + 1)
            }
            else
            {
                indices.map((el) => {
                    hangman.current[el] = letter
                })

                forceUpdate()
            }
        }
        else
        {
            alert('You already guessed this letter!')
            return
        }
    }

        return (
            <>
                <Head>
                    <title>Fun with Words</title>
                </Head>
                <Navbar currentPage='hangman'/>
                <div className='flex flex-row ml-8'>
                    {hangman.current.map((el: string) => (<p className='mr-1.5'>{el}</p>))}
                </div>
                <div>
                    <p>{guessedLetters.current}</p>
                </div>
                <form onSubmit={handleGuess}>
                    <input type='text' placeholder='Enter Letter To Guess' maxLength={1} name='guess' id='guess'/>
                    <input type='submit'/>
                </form>
            </>
        )
}

export default Hangman;