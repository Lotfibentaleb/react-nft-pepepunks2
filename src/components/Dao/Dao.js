import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Grid,
    Typography
} from '@material-ui/core'

import useStyles from './Dao.styles'
import Footer from 'layouts/Main/components/Footer'

const TOKENS = [
    [
        'How many $FROG should be created?',
        [
            ['2.1 Billion', 37],
            ['2.1 Tillion', 37],
            ['2.1 Billion', 37],
            ['2.1 Million', 37]
        ],
        '3d 1hr'
    ],
    [
        'How many $FROG should be created?',
        [
            ['2.1 Billion', 37],
            ['2.1 Tillion', 37],
            ['2.1 Billion', 37],
            ['2.1 Million', 37]
        ],
        '3d 1hr'
    ],
    [
        'How many $FROG should be created?',
        [
            ['2.1 Billion', 37],
            ['2.1 Tillion', 37],
            ['2.1 Billion', 37],
            ['2.1 Million', 37]
        ],
        '3d 1hr',
        2
    ]
]

const Votes = ({voteOptions, votedNo, classes}) => (
    <Grid container spacing={1} className={votedNo > 0 ? 'vote-finished' : ''}>
        {voteOptions.map(([totalSupply, voteCount], i) => (
            <Grid item xs={12}>
                <Box className={`${classes.voteOption} ${votedNo === i ? 'voted' : ''}`}>
                    <Box className={classes.vote}>
                        <Box className={classes.number}>
                            <Typography>{i + 1}.</Typography>
                        </Box>
                        <Box className={classes.totalSupply} ml={2}>
                            <Typography>{totalSupply}</Typography>
                        </Box>
                        <Button
                            color="primary"
                            variant="contained"
                            className={classes.voteButton}
                            disabled={votedNo > 0}
                        >
                            {votedNo === i ? 'Win' : 'Vote'}
                        </Button>
                    </Box>
                    <Box className={classes.voteCount} ml={2}>
                        <Typography className={classes.voteCountLabel} component="span">
                            Total votes:{' '}
                        </Typography>
                        <Typography color="textSecondary" component="span">
                            {voteCount}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        ))}
    </Grid>
)

const Dao = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container maxWidth="xl">
                {TOKENS.map(([question, voteOptions, time, votedNo], i) => (
                    <Accordion
                        className={classes.voteItem}
                        square
                        defaultExpanded
                        expanded
                        key={`vote-item-${i}`}
                    >
                        <AccordionSummary className={classes.voteQuestion}>
                            <Box ml={1}>
                                <Typography className={classes.secondaryHeading} variant="body1">
                                    {question}
                                </Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.voteDetails}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={9} xl={10}>
                                    <Votes
                                        voteOptions={voteOptions}
                                        votedNo={votedNo}
                                        classes={classes}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3} xl={2}>
                                    <Box className={classes.timer} textAlign="center">
                                        <Box className={classes.timeWrapper} textAlign="center">
                                            <Box className={classes.label}>
                                                <Typography>Timer</Typography>
                                            </Box>
                                            <Typography
                                                className={classes.time}
                                                color="textSecondary"
                                            >
                                                {time}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
            <Box mt={16}>
                <Footer />
            </Box>
        </Box>
    )
}

export default Dao
