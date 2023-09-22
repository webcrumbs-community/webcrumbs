import Layout from "@/shared/layout/Layout";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const inter = Inter({ subsets: ["latin"] });

/*
this index page is temporary, until we come up to a better idea for index page and this page will be about page
*/

export default function Home() {
	return (
		<Layout>
			<main className={`${styles.main} ${inter.className}`}>
				<img
					src="https://repository-images.githubusercontent.com/691063238/02edc4ea-5fda-4408-bf55-9e989a0abc81"
					alt="Webcrumbs Open Source"
				/>

				<h1>Webcrumbs: The Next Evolution in React-based Web Development</h1>
				<h2>Introduction</h2>
				<p>
					Webcrumbs aspires to be an industry-standard solution for React
					applications, positioned as the "WordPress for React." Whether you're
					a developer or not, you'll find it effortless to create, manage, and
					scale your React-based websites using our intuitive admin panel.{" "}
					<b>Your Support Matters</b> If you find value in what Webcrumbs aims
					to achieve, consider starring ⭐️ us on GitHub. Your endorsement is
					crucial in helping us refine our product and grow our community.
					<a href="https://github.com/webcrumbs-community/webcrumbs/stargazers">
						Star Webcrumbs on GitHub
					</a>
				</p>
				<ReactMarkdown>
					![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Open
					Issues](https://img.shields.io/github/issues/webcrumb/Webcrumbs)
					![Open Pull
					Requests](https://img.shields.io/github/issues-pr/webcrumb/Webcrumbs)
					![Version](https://img.shields.io/github/v/release/webcrumb/Webcrumbs?sort=semver)
				</ReactMarkdown>
				<h2>Key Features</h2>
				<ul>
					<li>
						<b>Plugin Platform</b>: Integrate and manage React plugins to extend
						functionality effortlessly.
					</li>
					<li>
						<b>No-Code Admin Panel</b>: Control every aspect of your website
						from a robust admin interface, no coding needed.
					</li>
					<li>
						<b>Fully Customizable</b>: Developers can tailor Webcrumbs according
						to specific needs.
					</li>
					<li>
						<b>Open Source & Free</b>: Webcrumbs is committed to being an
						open-source, community-driven project.
					</li>
				</ul>
				<h2>The Future is Collaborative</h2>
				<p>
					Web development has moved beyond silos. Today’s reality is
					collaborative, involving not just developers but also designers,
					marketers, and other professionals.
				</p>
				<ul>
					<li>
						🔵 <b>A Hub for Multi-Disciplinary Collaboration</b> Webcrumbs is
						designed to adapt to this complex environment. It serves as an
						integrated platform that accommodates the varied needs and roles
						within an organization.
					</li>
					<li>
						🔵 <b>Empowering Developers and Enabling Monetization</b> Our plugin
						platform allows developers to offer specialized solutions, either
						open-source or premium, thus creating a space for economic growth
						within the developer community.{" "}
					</li>
					<li>
						🔵 <b>Ahead of the Curve: AI and Future Technologies</b> Webcrumbs
						is built with scalability in mind, capable of incorporating future
						technologies like AI to keep your web projects at the forefront.
					</li>
				</ul>
				<h2>Get Involved: Calling out all developers 📣</h2>
				<p>
					The future of React-based web development is a story yet to be fully
					written, and we invite you to be a co-author of this narrative. Your
					skills and insights can contribute significantly to the product and
					the community at large.
					<br /> We're thrilled to have you interested in Webcrumbs! There are
					multiple ways you can contribute and make a significant impact:
				</p>
				<ol>
					<li>
						<b>Star the Repository</b> Show your support and help us gain more
						visibility by starring ⭐️ the repository.
						<a href="https://github.com/webcrumbs-community/webcrumbs/stargazers">
							Star Webcrumbs on GitHub
						</a>
					</li>
					<li>
						{" "}
						<b>Join the Discussions</b> Your opinions and ideas matter.
						Participate in ongoing discussions or start a new one.{" "}
						<a href="https://github.com/webcrumbs-community/webcrumbs/discussions">
							Go to Discussions
						</a>
					</li>
					<li>
						<b>Check Open Issues</b> See what issues are open and where you can
						contribute.
						<a href="https://github.com/webcrumbs-community/webcrumbs/issues">
							View Open Issues
						</a>
					</li>
					<li>
						<b>View Open Issues</b> Get all the information you need about how
						to contribute.
						<a href="https://github.com/webcrumbs-community/webcrumbs/blob/main/CONTRIBUTING.md">
							Read Contributing Guide
						</a>
					</li>
				</ol>
				<p>
					We're excited to see how you'll contribute to shaping the future of
					Webcrumbs!{" "}
				</p>
				<h2>Support Our Growth</h2>
				<p>
					If Webcrumbs aligns with your vision for the future of web
					development, kindly give us a ⭐️ on GitHub. Your support enables:{" "}
				</p>
				<ul>
					<li>Increased project visibility</li>
					<li>A growing user base</li>
					<li>Enhanced feedback loop</li>
					<li>Community contributions</li>
				</ul>
				<h2>Further Details</h2>
				<p>
					This project operates under the MIT License and is a community-driven
					<br />
					endeavor. <b>Credits</b>
					<br />
					Spearheaded and maintained by{" "}
					<a href="https://github.com/webcrumbs-community">
						Webcrumbs Community
					</a>
				</p>
			</main>
		</Layout>
	);
}
