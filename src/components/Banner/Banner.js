import {Box, Button, Container, Grid, Link, Typography} from '@material-ui/core'

import useStyles from './Banner.styles'

const PARTNERS = [
    [
        'Magic Eden',
        '/images/partners/magic-eden.png',
        'https://magiceden.io/marketplace/pepe_punks'
    ],
    [
        'NFTCALCULATOR',
        '/images/partners/nft-calculator.png',
        'https://nftcalendar.io/event/pepepunks-are-coming-to-solana/'
    ],
    ['MoonRank', '/images/partners/moon-rank.png', 'https://moonrank.app/collection/pepe_punks'],
    [
        'EXCHANGE.ART',
        '/images/partners/exchange-art.png',
        'https://exchange.art/collections/Pepe%20Punks'
    ]
]

const Banner = () => {
    const classes = useStyles()

    return (
        <Box className={classes.banner}>
            <Container maxWidth="xl">
                <Grid container className={classes.bannerContent}>
                    <Grid item xs={12} sm={12} md={6} className={classes.bannerContentLeft}>
                        <Box>
                            <Box>
                                <Typography variant="subtitle1">
                                    221 anthropomorphic PepePunks have vanished from their home in
                                    the Ethereum metaverse, traveling far distances to the Solana
                                    metaverse.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Typography
                                    variant="subtitle2"
                                    color="textSecondary"
                                    style={{fontWeight: 500}}
                                >
                                    The PepePunks fled due to rising ether gas pollution that
                                    continued to brigade their transportation. In the pursuit of
                                    survival, the PepePunks have banded together to forge for
                                    salvation.
                                </Typography>
                            </Box>
                            <Box mt={3}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.connectButton}
                                    fullWidth
                                >
                                    Connect
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} className={classes.bannerContentRight}>
                        <img
                            className={`${classes.hero} responsive`}
                            src="/images/hero.png"
                            alt="Hero"
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md">
                <Box mt={8}>
                    <Box textAlign="center">
                        <Typography variant="body1" className={classes.seen}>
                            AS SEEN ON
                        </Typography>
                    </Box>
                    <Box mt={2} paddingBottom={8}>
                        <Grid container spacing={2}>
                            {PARTNERS.map(([title, image, link], i) => (
                                <Grid item xs={12} sm={6} md={3} key={`parnter-${i}`}>
                                    <Box textAlign="center">
                                        <Link href={link} target="_blank">
                                            <img src={image} alt={title} />
                                        </Link>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Banner
