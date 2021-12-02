import { Link as RouterLink } from 'react-router-dom'

import useStyles from './Logo.styles'

const Logo = () => {
    const classes = useStyles()

    return (
        <RouterLink to="/" className={classes.logoLink}>
            <img className={classes.logoImage} src="/images/logo.png" alt="Pepepunks" />
        </RouterLink>
    )
}

export default Logo
