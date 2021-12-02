import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Container,
    Paper,
    Typography
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import useStyles from './Faq.styles'
import Footer from 'layouts/Main/components/Footer'

const FAQ_ITEMS = [
    ['Whats the total supply of Pepepunks?', '221 Pepes are in our collection.'],
    ['What was the mint price?', 'Our mint price was 0.25 SOL per PepePunk.'],
    ['Where can I buy or sell PepePunks?', 'You can currently trade our collection on Magic Eden.'],
    ['Where can I find the rarity of my PepePunk?', 'Check your rarity via MoonRank.'],
    ['Will you be my fren if I buy a PepePunk?', 'Of course.']
]
const Faq = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box textAlign="center">
                <img src="/images/faq.png" alt="FAQ" />
                <br />
                <Typography variant="body1">FAQ</Typography>
            </Box>
            <Box marginTop={2}>
                <Container maxWidth="sm">
                    {FAQ_ITEMS.map(([question, answer], i) => (
                        <Accordion className={classes.faqItem} square defaultExpanded key={`faq-item-${i}`}>
                            <AccordionSummary
                                className={classes.question}
                                expandIcon={<ExpandMoreIcon />}
                                // aria-controls="panel1bh-content"
                                // id="panel1bh-header"
                            >
                                {/* <Typography className={classes.heading} variant='h4'>{item.question}</Typography> */}
                                <img src="/images/question-mark.png" alt="Question" />
                                <Box ml={1}>
                                    <Typography
                                        className={classes.secondaryHeading}
                                        variant="body1"
                                    >
                                        {question}
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails className={classes.answer}>
                                <Typography variant="body2">{answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Container>
            </Box>
            <Box mt={4}>
                <Footer />
            </Box>
        </Box>
    )
}

export default Faq
