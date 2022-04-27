import React from 'react'
//! TO CONNECT TO REDUX USE
import { connect} from 'react-redux'
// import { loadTasks } from '../store/actions/tasksActions'

export const _HomePage = () => {
  //! REDUX CONNECTION

  return (
  <div>
    <h1> Mister Tasker</h1>
    <h2>this your tasks!</h2>
    <h3>changed!</h3>
  </div> 
  )
}

// !TO CONNECT TO REDUX
const mapDispatchToProps = {
}

export const HomePage = connect(null, mapDispatchToProps)(_HomePage)


