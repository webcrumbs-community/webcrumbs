import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, {useEffect } from "react";
export default function AuthenticatedRouteGuard({ children }: { children: React.ReactElement}){
    const { status , data: session } = useSession(); // Session lasts for 30 days by default
    console.log(status, session)
    const router = useRouter();
    useEffect(() => {
        if(!status && !session){
            router.push("/login")
        }
    }, [status , router , session]);
// Render children (protected content) only if the user is logged in
  return status === "authenticated" && session ? <>{children}</> : null;
}