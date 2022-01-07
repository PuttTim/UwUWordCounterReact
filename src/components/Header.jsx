import { Box, Typography } from '@mui/material'
import React from 'react'

export const header = () => {
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography fontWeight="Bold" fontSize="2.5em">
                UwU Word Counter
            </Typography>
        </Box>
    )
}

export default header
