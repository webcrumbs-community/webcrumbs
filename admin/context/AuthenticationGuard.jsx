import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {useEffect } from "react";
export default function AuthenticatedRouteGuard(){
    const { status , data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
        if(!status && !session){
            router.push("/auth")
        }
    }, [status , router , session]);
// Render children (protected content) only if the user is logged in
  return status === "authenticated" && session ? <>{children}</> : null;
}