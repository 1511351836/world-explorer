import React from 'react'
import { Router, Redirect } from 'react-router-dom'


class BasicRoute extends React.Component {


    render () {
        return (
            <Router >


                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/guahao" component={guahao} />
                <Route exact path="/dingdan" component={dingdan} />
                <Route exact path="/xiangqing" component={xiangqing} />
                <Route exact path="/guanli" component={guanli} />
                <Redirect from="/*" to="/" />
            </Router>
        )
    }


}

export default BasicRoute