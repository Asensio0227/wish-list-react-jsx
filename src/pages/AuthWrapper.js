import { useAuth0 } from '@auth0/auth0-react'
import {Loading }from '../components';

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return (
      <main>
        <h1>
{error.message}
        </h1>
      </main>
    )
  };

  return (
    <>{children}</>
  )
}

export default AuthWrapper