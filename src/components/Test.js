import React from 'react'
import {Link} from 'react-router-dom'

const Test = ({match}) => {
    // console.log(props);
    
  return (
    <div>
      <h3>Hello, I'm Test {match.params.postId} </h3>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default Test
