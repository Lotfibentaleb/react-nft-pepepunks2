import {Box, Container, Grid, Paper, Typography} from '@material-ui/core'

import useStyles from './Roadmap.styles'

const ROADMAP_ITEMS = [
    [
        7,
        'Q4 2021',
        [
            [
                7,
                '/images/roadmap/dao.png',
                'Council of Pepes Community DAO',
                'A community wallet will be set with 1.5% of the sale royalties. Everyone who owns a PepePunk will be able to vote on what to do with these SOL giving our community true governance over the future of PepePunk.',
                true
            ],
            [
                5,
                '/images/roadmap/airdrop.png',
                '$FROG Airdrop',
                'All pepepunk holders will be receiving $FROG from an airdrop. Tokenomics for $FROG will be released shortly prior to the airdrop.',
                true
            ]
        ]
    ],
    [
        5,
        'Q1 2022',
        [
            [
                5,
                '/images/roadmap/merchdrop.png',
                'Merch Drop',
                'The very first rollout of our pepe clothing line. Only available to PepePunks holders.',
                true
            ],
            [
                7,
                '/images/roadmap/racing.png',
                'P2E Pepe Racing Game',
                'Our first blockchain based P2E game. Race to the leaderboards and earn $FROG, have a race for a wager, or just a frenly race with other community members. Keep your eyes out for your vehicle to hit your garage!',
                false
            ]
        ]
    ]
]

const POSITIONS = ROADMAP_ITEMS.reduce((positions, [width, title, items]) => {
    const outerWidth = width / 12
    return items.reduce((positions, [width]) => {
        positions.push(parseInt(outerWidth * (width / 12) * 100))
        return positions
    }, positions)
}, []).reduce(
    (positions, position, i, arr) => {
        if (i === 0) {
            positions.push(position)
        } else if (i < arr.length - 1) {
            positions.push(position + positions[positions.length - 1])
        }
        return positions
    },
    [12]
)

const Items = ({items, classes}) => (
    <Grid container spacing={2}>
        {items.map(([width, image, title, content, limitWidth], i) => (
            <Grid item xs={12} sm={6} lg={width} container spacing={2} key={`roadmap-item-${i}`}>
                <Grid item>
                    <img alt={title} src={image} />
                </Grid>
                <Grid item xs>
                    <Box className={limitWidth ? classes.itemLimitWidth : null}>
                        <Box>
                            <Typography variant="subtitle2">{title}</Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                style={{
                                    fontWeight: 500,
                                    fontSize: 15
                                }}
                            >
                                {content}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        ))}
    </Grid>
)

const Progress = ({classes}) => (
    <Box className={classes.progressContainer}>
        <Box className={classes.progressBack}></Box>
        <Box className={classes.progress} style={{width: `${POSITIONS[0]}%`}}></Box>
        {POSITIONS.map((position, i) => (
            <Box
                key={`roadmap-point-${i}`}
                component="span"
                className={`${classes.point} ${i >= 2 ? 'secondQuarter' : ''}`}
                style={{left: `${position}%`}}
            ></Box>
        ))}
    </Box>
)
const Roadmap = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                <Paper className={classes.roadmapPaper}>
                    <Box>
                        <Typography variant="body1" className={classes.title}>
                            Roadmap
                        </Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            {ROADMAP_ITEMS.map(([width, title, items], i) => (
                                <Grid item sm={12} lg={width} key={`roadmap-quarter-${i}`}>
                                    <Box>
                                        <Typography variant="subtitle2" color="textSecondary">
                                            {title}
                                        </Typography>

                                        <Box mt={2}>
                                            <Items items={items} classes={classes} />
                                        </Box>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box mt={2}>
                        <Progress classes={classes} />
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default Roadmap
