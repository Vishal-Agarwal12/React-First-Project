import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <ul className='navbar justify-content-center container col'>
        <li className='nav-item row px-3 h3'> 
          <Link to="/"> Home </Link>
        </li>
        <li className='nav-item row px-3 h3'> 
          <Link to="/blog"> Blog </Link>
        </li>
        <li className='nav-item row px-3 h3'> 
          <Link to="/about"> About </Link>
        </li>
      </ul>
      <h1>This is Blog Page</h1>
      <div className='message'>Web pages are just rendering the components And not actually loading!</div>
      <div className='power'>This is the Power of Reactjs </div>
      <div className='made'>Made By Vishal Agarwal</div>
    </div>
  )
}

export default Blog
