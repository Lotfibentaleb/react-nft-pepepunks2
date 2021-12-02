import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {paddingTop: 48, paddingBottom: 24, background: 'url(/images/background.png)'},
    faqItem: {
        background: 'transparent',
        border: `1px solid ${theme.palette.background.secondary}`,
        marginBottom: theme.spacing(2),
        '&.Mui-expanded': {
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4
        },
        '& .MuiIconButton-root': {
            padding: 3
        }
    },
    question: {
        backgroundColor: theme.palette.background.secondary,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(2),
        margin: 0,
        minHeight: 'auto',
        '&.Mui-expanded': {
            minHeight: 'auto'
        },
        '& .MuiAccordionSummary-content': {
            margin: theme.spacing(1),
            alignItems: 'center',
            '&.Mui-expanded': {
                margin: theme.spacing(1)
            }
        }
    },
    answer: {
        padding: theme.spacing(2)
    }
}))

export default useStyles
