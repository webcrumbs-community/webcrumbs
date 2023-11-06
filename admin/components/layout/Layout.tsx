import * as React from "react";
import Head from "next/head";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Dashboard - Admin Panel</title>
        <meta name="description" content="Manage your site's content efficiently with an Admin Panel. Get yours free at webcrumbs.org." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
