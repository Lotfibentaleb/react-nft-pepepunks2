// import { useState } from 'react'
import {Box} from '@material-ui/core'
import Banner from 'components/Banner'
import Roadmap from 'components/Roadmap'

import useStyles from './Home.styles'
import Faq from 'components/Faq'

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box>
                <Banner />
            </Box>
            <Box id="roadmap">
                <Roadmap />
            </Box>
            <Box id="faq">
                <Faq />
            </Box>
        </Box>
    )
}

export default Home
