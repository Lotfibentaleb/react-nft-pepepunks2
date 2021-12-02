import {Box, Typography} from '@material-ui/core'
import useStyles from './Elf.styles'

const Elf = ({image, title, description, ...props}) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} {...props}>
            <Box>
                <img src={image} alt={title} className={`${classes.image} w-full`} />
            </Box>
        </Box>
    )
}

export default Elf
