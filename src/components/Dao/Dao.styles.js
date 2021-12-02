import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        width: '100%',
        minHeight: '1080px',
        background: 'url(/images/vote-background.png) no-repeat',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(18)
        }
    },
    voteItem: {
        background: 'transparent',
        border: `1px solid ${theme.palette.background.secondary}`,
        marginBottom: theme.spacing(2)
    },
    voteQuestion: {
        backgroundColor: theme.palette.background.secondary,
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(2),
        margin: 0,
        minHeight: 'auto',
        '&.Mui-expanded': {
            minHeight: 'auto'
        },
        '& .MuiAccordionSummary-content': {
            margin: theme.spacing(0.7),
            marginBottom: theme.spacing(0.9),
            alignItems: 'center',
            '&.Mui-expanded': {
                margin: theme.spacing(0.7),
                marginBottom: theme.spacing(0.9)
            }
        }
    },
    voteDetails: {
        padding: theme.spacing(2),
        background: '#00000044'
    },
    voteOption: {
        display: 'flex',
        alignItems: 'center'
    },
    vote: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        border: `1px solid #387535`,
        background: '#000000bb',
        padding: theme.spacing(0.7),
        transition: 'background 0.25s',
        '&:hover': {
            background: '#ffffff03'
        },
        '.vote-finished &:hover': {
            background: '#000000bb'
        },
        '.voted &': {
            background: theme.palette.background.secondary
        },
        '.voted &:hover': {
            background: theme.palette.background.secondary
        }
    },
    number: {
        border: `1px solid #387535`,
        width: '24px',
        height: '24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '.voted &': {
            border: `1px solid #fff`
        }
    },
    totalSupply: {
        flexGrow: 1
    },
    voteButton: {
        paddingLeft: theme.spacing(2.7),
        paddingRight: theme.spacing(2.7),
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
        borderRadius: 0,
        fontSize: 12,
        '.voted &': {
            background: '#191C19',
            color: '#fff'
        }
    },
    voteCount: {},
    voteCountLabel: {
        color: '#808080',
        fontWeight: '500'
    },
    timer: {
        border: `1px solid #387535`,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
        background: '#00000044',
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),

        [theme.breakpoints.up('md')]: {
            padding: 0
        }
    },
    timeWrapper: {
        width: '100%',
        position: 'relative'
    },
    label: {
        color: '#808080',
        position: 'absolute',
        top: '-12px',
        left: '50%',
        marginLeft: -17.5
    },
    time: {
        fontSize: 68,
        fontWeight: 'normal',
        lineHeight: 1
    }
}))

export default useStyles
