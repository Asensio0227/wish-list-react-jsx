import { useAuth0 } from '@auth0/auth0-react';
import Wrapper from '../assets/Wrappers/Navbar'
import CustomLink from '../utils/customLinks';

const Navbar = () => {
  const {
    isLoading,
    isAuthenticated,
    loginWithRedirect,
    error,
    user,
    logout,
  } = useAuth0();
  const isUsers = isAuthenticated && user;
  
    if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

    return (
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
{isUsers && user.picture && <img src={user.picture} alt={user.name}/>}
        {isUsers && user.name && (
          <h4>
            welcome, <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}
        {
          isUsers ? (
                <button
                  className='btn-primary'
                  onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
          ) : (
                  <button
                    className='btn-primary'
                    onClick={loginWithRedirect}
                  >
          Log in
        </button>
          )
        }
          </div>
          <CustomLink/>
        </div>
        
      </Wrapper>
    );
  } 

export default Navbar