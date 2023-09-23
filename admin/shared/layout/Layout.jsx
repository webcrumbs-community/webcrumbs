import Head from "next/head";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Webcrumbs</title>
				<meta
					name="description"
					content="Webcrumbs: The Next Evolution in React-based Web Development"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{children}
		</>
	);
}
