import HomeStyle from "@/styles/Home.module.css";

/*
this index page is temporary, until we come up to a better idea for index page and this page will be about page
*/

export default function Home() {
	return (
		<>
			<header>
				<nav class={`${HomeStyle.primaryNav}`} aria-label="Webcrumbs.com">
					<ul class="">
						<li class="">
							<a role="menuitem" class="" href="/">
								Webcrumbs
							</a>
						</li>

						<li class="">
							<a role="menuitem" class="">
								Products
							</a>
						</li>
						<li class="">
							<a role="menuitem" class="">
								Features{" "}
							</a>
						</li>
						<li class="">
							<a role="menuitem" class="">
								Resources{" "}
							</a>
						</li>

						<li class="">
							<a role="menuitem" class="" href="/pricing">
								Plans &amp; Pricing{" "}
							</a>
						</li>
					</ul>

					<ul class="x-nav-list">
						<li class="">
							<a role="menuitem" class="" href="/log-in">
								Log In{" "}
							</a>
						</li>
						<li class="">
							<a
								role="menuitem"
								class="x-nav-link x-nav-link--primary x-link"
								href="/start"
							>
								Get Started{" "}
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className={`${HomeStyle.mainPage}`}>
				<div className={`${HomeStyle.pageTitle}`}>
					<h1>WebCrumbs</h1>
					<p>WordPress for react</p>
				</div>
			</main>
		</>
	);
}
