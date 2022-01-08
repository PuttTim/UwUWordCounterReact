import { Box, TextField } from '@mui/material'

const textInput = props => {
    return (
        <Box>
            <TextField
                multiline
                placeholder="Enter text to be uwu-ified or counted here"
                variant="outlined"
                minRows={10}
                maxRows={15}
                fullWidth
                onChange={props.onChange.bind(props)}
            />
        </Box>
    )
}

export default textInput
