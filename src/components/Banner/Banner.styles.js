import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    banner: {
        position: 'relative',
        width: '100%',
        minHeight: '870px',
        background: 'url(/images/banner.png) no-repeat',
        paddingTop: theme.spacing(10),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(21 + 4),
            textAlign: 'left'
        }
    },
    bannerContent: {
        flexDirection: 'column-reverse',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    bannerContentLeft: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(12),
            paddingRight: theme.spacing(12)
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: theme.spacing(10),
            marginTop: 0
        }
    },
    bannerContentRight: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 48,
        marginBottom: 48,
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
            marginBottom: 0
        }
    },
    connectButton: {
        maxWidth: '75%',
        [theme.breakpoints.up('sm')]: {
            // width: 480
        }
    },
    hero: {
        height: theme.spacing(24),
        [theme.breakpoints.up('md')]: {
            height: 'auto'
        }
    },
    seen: {
        textTransform: 'uppercase',
        color: theme.palette.text.grey,
        letterSpacing: '0.615rem'
    }
}))

export default useStyles
