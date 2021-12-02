import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.secondary,
        paddingTop: 40,
        paddingBottom: 40
    },
    roadmapPaper: {
        background: theme.palette.background.default,
        padding: 24
    },
    title: {
        fontSize: 11,
        color: theme.palette.text.grey
    },
    itemLimitWidth: {
        [theme.breakpoints.up('md')]: {
            maxWidth: '90%'
        }
    },
    progressContainer: {
        height: theme.spacing(1),
        position: 'relative'
    },
    progressBack: {
        position: 'absolute',
        width: '100%',
        height: '2px',
        top: '3px',
        background: theme.palette.background.grey
    },
    progress: {
        position: 'absolute',
        height: '2px',
        top: '3px',
        background: theme.palette.background.secondary
    },
    point: {
        position: 'absolute',
        width: theme.spacing(1),
        height: theme.spacing(1),
        borderRadius: '50%',
        top: 0,
        background: theme.palette.background.secondary,
        '&.secondQuarter': {
            marginLeft: theme.spacing(2)
        }
    }
}))

export default useStyles
