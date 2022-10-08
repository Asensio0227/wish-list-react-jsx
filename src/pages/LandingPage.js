import Wrappers from '../assets/Wrappers/Landing';
import img from '../assets/images/login-img.svg';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {
  const {
    loginWithRedirect,
  } = useAuth0();


    return (
      <Wrappers>
        <main className="section-center page">
          <div className="info">
            <p>
              I'm baby typewriter mumblecore sartorial, sustainable bushwick health goth ea austin quis you probably haven't heard of them dreamcatcher gluten-free vegan. Tattooed chartreuse vice forage, small batch enim waistcoat enamel pin vexillologist PBR&B deserunt. DIY pabst biodiesel aliquip JOMO stumptown aesthetic ascot. Vice banh mi tilde.
            </p>
            <button
              type='button'
              className=' btn login-btn btn-hero'
              onClick={loginWithRedirect}
            >
              Log in / sign up
            </button>
          </div>
          <img src={img} alt="login img" />
        </main>
      </Wrappers>
    )
  }

export default LandingPage