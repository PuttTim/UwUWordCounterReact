import React from 'react'

import { Box, Card, CardContent, Typography } from '@mui/material'

const CounterCard = ({ wordArray, charArray }) => {
    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <Typography fontWeight="Bold" fontSize={16}>Word Count: {wordArray.length}</Typography>
                    <Typography>Character Count: {charArray.length}</Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default CounterCard
