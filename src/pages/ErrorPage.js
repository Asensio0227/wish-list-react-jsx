import Wrappers from '../assets/Wrappers/ErrorPage';
import img from '../assets/images/not-found.svg'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrappers className='full-page'>
      <div>
        <img src={img} alt="page not found" />
        <h1>page not found</h1>
        <p>
          I'm baby 90's ennui umami stumptown. Deep v chartreuse echo park retro twee. Swag flexitarian organic health goth. Retro 8-bit iceland, before they sold out hot chicken thundercats lo-fi.
        </p>
        <Link to='/'>
          back home
        </Link>
      </div>
    </Wrappers>
  )
}

export default ErrorPage