import React from 'react'
import Timer from './timerComponents/timerFolder/Index'
import Info from './pageInfo/Index'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default function App () {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/timer-task' component={Timer} />
          <Route path='/Info/:id' component={Info} />
          <Redirect from='/' to='/timer-task'/>
        </Switch>
      </Router>
    </div>
  )
}
