import {Box, Container, IconButton, Link, Typography} from '@material-ui/core'
import {SportsEsports, Twitter} from '@material-ui/icons'
import useStyles from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <Box className={classes.root} textAlign="center">
                {/* <img
                    className={`${classes.logo} responsive`}
                    src="/images/logo.png"
                    alt="Pepepunks"
                />
                <Box padding={2}>
                    <Typography variant="subtitle2">
                        Copyright © Pepepunks 2021. All rights reserved
                    </Typography>
                </Box> */}
                <Box>
                    <IconButton href="https://discord.gg/DqxGXBQBpz">
                        <img
                            className="social-icon"
                            src="/images/discord.png"
                            alt="Pepepunks Discord"
                        />
                    </IconButton>
                    <IconButton href="https://twitter.com/pepepunksnft">
                        <img
                            className="social-icon"
                            src="/images/twitter.png"
                            alt="Pepepunks Twitter"
                        />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
