import { useState, useEffect } from 'react'
import { Box, Stack } from '@mui/material'
import Uwuifier from 'uwuifier'

import Header from './components/Header'
import TextInput from './components/TextInput'
import CounterCard from './components/CounterCard'
import UwUDisplay from './components/UwUDisplay'

const App = () => {
    const [wordArray, setWordArray] = useState([])
    const [charArray, setCharArray] = useState([])
    const [UwUText, setUwUText] = useState('')

    const uwuifier = new Uwuifier()

    function changeHandler(text) {
        countWords(text)
        countCharacters(text)
        uwuifyText(text)
    }

    function countWords(str) {
        setWordArray(
            str
                .replace(/\n/g, ' ')
                .split(' ')
                .filter(i => i !== '')
        )
    }

    function countCharacters(str) {
        setCharArray(
            str
                .replace(/\n/g, '')
                .split('')
                .filter(i => i !== '')
        )
    }

    function uwuifyText(str) {
        setUwUText(uwuifier.uwuifySentence(str))
    }

    return (
        <Box maxWidth="80%" m="auto">
            <Header />
            <br />
            <Stack spacing={4}>
                <CounterCard wordArray={wordArray} charArray={charArray} />
                <TextInput onChange={e => changeHandler(e.target.value)} />
                <UwUDisplay UwUText={UwUText} />
            </Stack>
        </Box>
    )
}

export default App
