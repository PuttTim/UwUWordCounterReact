import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const THEME = createTheme({
    typography: {
        fontFamily: `"Quicksand", "Helvetica", "Arial", sans-serif`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightSemiBold: 600,
        fontWeightBold: 700
    }
})

ReactDOM.render(
    <ThemeProvider theme={THEME}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
)
