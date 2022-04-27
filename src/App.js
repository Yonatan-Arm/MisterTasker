// ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

// ALL COMPONENTS GOES HERE
import { AppNav } from './components/AppNav'
import { HomePage } from './pages/HomePage'
import { TaskApp } from './pages/TaskApp'
import { TaskEdit } from './pages/TaskEdit'


function App() {
  return (
    <Router>
      <div className='App'>
          <AppNav />
          <Switch>
             {/* <Route path='/signup' component={component name} />
            <Route path='/contact/edit/:id?' component={component name} />
            <Route path='/contact/:id' component={component name} />
          <Route path='/contact' component={component name} /> */}
          <Route path='/task/edit/:id?' component={TaskEdit} />
            <Route path='/task' component={TaskApp} />
            <Route path='/' component={HomePage} />
          </Switch>
      </div>
    </Router>
  )
}

export default App
