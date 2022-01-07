import { useState } from 'react'
import { Box, Button } from '@mui/material'

const UwUButton = () => {
    const [UwUText, setUwUText] = useState('')

    return (
        <Box>
            <Button variant="contained" fullWidth>UwU My text</Button>
        </Box>
    )
}

export default UwUButton
