import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();
  const isUserLoading = status === "loading";
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push("/auth");
  };

  useEffect(() => {
    if (isUserLoading) return; // Do nothing while loading
    if (!session) router.push("/auth"); // Redirect to `/login` if no session exists
  }, [session, isUserLoading, router]);

  if (isUserLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ color: "red" }}>
      <h1>Admin Page</h1>
      <button onClick={() => handleSignOut()}>Signout</button>
    </div>
  );
}
