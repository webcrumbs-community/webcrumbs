import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Login = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push('/api/auth/login');
  };

  return <Button onClick={handleLogin}>Login</Button>;
};

export default Login;