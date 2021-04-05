import React from 'react'

import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const BottomBar = () => {
    return (
        <footer className=''>
            <Typography variant="h6" color="textSecondary" align="center" gutterBottom>
                "Blittle League" is a Splorts Hub production
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Join our <a href="https://discord.com/invite/djnY9MP8nN">Discord</a>!
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://theSplortshub.com/">
                    The Splorts Hub
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

export default BottomBar