import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Link,
    IconButton,
    Container,
    Grid,
    Hidden,
    Button
} from '@material-ui/core'
import useStyles from './Header.styles'

import Logo from './Logo'

const MENU_ITEMS = [
    ['Home', '#'],
    ['Roadmap', '#roadmap'],
    ['Faq', '#faq']
]

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 160
    })

    const isLightHeader = !isScrolling

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar elevation={0} className={`${classes.appBar} ${isLightHeader ? ' light' : ''}`}>
            <Container maxWidth="xl">
                <Toolbar className={withSmallStyles(classes.toolbar)}>
                    <Logo />

                    <Hidden xsDown>
                        <Box flexGrow={1} />

                        <Box className={withSmallStyles(classes.navBar)}>
                            <Box>
                                <Grid container spacing={4}>
                                    {MENU_ITEMS.map(([title, link], i) => (
                                        <Grid item key={`menu-item-${i}`}>
                                            <Link href={link} variant="body1" color="textPrimary" style={{textTransform: 'uppercase'}}>
                                                {title}
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box marginLeft={4}>
                                <Button variant="contained" color="primary" className={classes.connectButton}>
                                    Connect
                                </Button>
                            </Box>
                        </Box>
                    </Hidden>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
