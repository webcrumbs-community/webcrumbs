import { Heading } from '@chakra-ui/react';
import { useUser } from '@auth0/nextjs-auth0/client';
import Login from './Login';
import Logout from './Logout';

const Home = () => {
  const { isLoading, user } = useUser();

  if (isLoading) return <Heading>Loading...</Heading>;

  return (
    <>
      {user ? (
        <>
          <Heading>
            Hi {user.name}, Welcome to Webcrumbs!
          </Heading>
          <Logout />
        </>
      ) : (
        <Login /> 
      )}
    </>
  );
};

export default Home;
