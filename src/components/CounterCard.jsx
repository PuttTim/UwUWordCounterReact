import React from 'react'

import { Box, Card, CardContent, Paper, Typography } from '@mui/material'

const CounterCard = ({ wordArray, charArray }) => {
    return (
        <>
            <Paper elevation={2}>
                <CardContent>
                    <Typography fontWeight="Bold" fontSize="1.5em">
                        Word Count: {wordArray.length}
                    </Typography>
                    <Typography fontWeight="Bold" fontSize="1.5em">
                        Character Count: {charArray.length}
                    </Typography>
                </CardContent>
            </Paper>
           
        </>
    )
}

export default CounterCard
