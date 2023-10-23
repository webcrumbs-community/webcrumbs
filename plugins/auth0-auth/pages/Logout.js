import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Logout = () => {
  const { push } = useRouter();

  const handleLogout = () => {
    push('/api/auth/logout');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
