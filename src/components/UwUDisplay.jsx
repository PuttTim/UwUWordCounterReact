import { useState, useEffect, useRef } from 'react'
import {
    Box,
    Button,
    CardContent,
    Paper,
    Typography,
    IconButton,
    Tooltip,
    Snackbar
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Uwuifier from 'uwuifier'

const UwUDisplay = ({ UwUText }) => {
    const [uwuFlag, setUwUFlag] = useState(false)
    const [snackbarFlag, setSnackbarFlag] = useState(false)

    const copy = async () => {
        await navigator.clipboard.writeText(UwUText)
        setSnackbarFlag(true)
    }

    return (
        <>
            <Button
                fullWidth
                variant="contained"
                onClick={() => {
                    setUwUFlag(!uwuFlag)
                }}>
                {uwuFlag ? "oh god i've made a mistake" : 'uwu my text'}
            </Button>

            <Paper
                elevation={1}
                style={{
                    transition: 'opacity 0.15s ease-out'
                }}
                sx={{
                    opacity: uwuFlag ? '1' : '0',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Tooltip title="Copy to clipboard" placement="right">
                    <IconButton
                        color="primary"
                        component="span"
                        onClick={copy}
                        sx={{ alignSelf: 'flex-end' }}>
                        <ContentCopyIcon />
                    </IconButton>
                </Tooltip>

                <CardContent>
                    <Typography fontWeight="Bold" fontSize="1.5em">
                        {UwUText}
                    </Typography>
                </CardContent>
            </Paper>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={snackbarFlag}
                onClose={() => {
                    setSnackbarFlag(false)
                }}
                autoHideDuration={1000}
                message="Copied to clipboard ✅"
                key={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </>
    )
}

export default UwUDisplay
