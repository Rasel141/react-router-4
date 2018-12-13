import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
  return (
    <div>
      <h3>Hello, I'm {props.name} </h3>
      <Link to='/posts/post-1'>Post 1</Link>
      <Link to='/posts/post-3'>Post 3</Link>
      <Link to='/posts/post-101'>Post 101</Link>
    </div>
  )
}

export default Home
