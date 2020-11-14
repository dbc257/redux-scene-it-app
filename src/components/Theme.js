import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'
import React, {useContext} from 'react'
import ThemeContext from './context/ThemeContext'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
})

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    }
})

export default function Theme(props) {
    const darkMode = useContext(ThemeContext)



    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                {props.children}
            </ThemeProvider>
        </div>
    )
}
