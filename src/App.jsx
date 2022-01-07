import { useState } from 'react'
import Header from './components/Header'
import TextInput from './components/TextInput'
import CounterCard from './components/CounterCard'
import { Box, Stack } from '@mui/material'

const App = () => {

    const [wordArray, setWordArray] = useState([])
    const [charArray, setCharArray] = useState([])

    function changeHandler(text) {
        countWords(text)
        countCharacters(text)
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

    return (
        <Box maxWidth="80%" m="auto">
            <Header />
            <Stack spacing={4}>
                <CounterCard wordArray={wordArray} charArray={charArray} />
                <TextInput onChange={e => changeHandler(e.target.value)} />
            </Stack>
        </Box>
    )
}

export default App