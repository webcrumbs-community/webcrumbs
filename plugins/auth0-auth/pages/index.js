import {Button, Heading} from '@chakra-ui/react'
import {useRouter} from 'next/router'
import {useUser} from '@auth0/nextjs-auth0/client'

const Home = () => {
  const{push} = useRouter()
  const{ isLoading, user, error} = useUser()

  if(isLoading) return <Heading> Loading ... </Heading>

  const handleLogin =()=>push('/api/auth/login')
  const handleLogout =()=>push('/api/auth/logout')

  return ( 
  <>
    {
    user ? (
      <>
        <Heading>
          Hi {user.name}, Welcome to Webcrumbs!
        </Heading>
        <Button onClick={handleLogout}>LogOut</Button> 
      </>

    ):( 
        <Button onClick={handleLogin}>Login</Button> 
    )}
    </>
  )
}

export default Home
