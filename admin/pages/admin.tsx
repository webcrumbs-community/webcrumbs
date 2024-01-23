import { Layout } from "@/components/layout/Layout";
import Dashboard from "@/components/dashboard/Dashboard";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <Layout>
      <SessionProvider> {/* To modify session options pass props to the session provider component */}
        <Dashboard />
      </SessionProvider>
    </Layout>
  );
}
