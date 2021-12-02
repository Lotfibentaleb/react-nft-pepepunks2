import {Switch} from 'react-router-dom'
import Main from 'layouts/Main'
import RouteWithLayout from 'components/shared/RouteWithLayout'

import Home from 'pages/Home'
import Dao from 'components/Dao'

const AppRouter = () => (
    <Switch>
        <RouteWithLayout layout={Main} exact path="/" component={Home} />
        <RouteWithLayout layout={Main} exact path="/dao" component={Dao} />
    </Switch>
)

export default AppRouter
