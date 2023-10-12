import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <>
      <div>dashboard</div>
      <button onClick={signOut}>SignOut</button>
    </>
  );
};

export default Dashboard;
