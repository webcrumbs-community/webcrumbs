# Issue: Explore Performance Optimization Techniques for React #83

Hello, speed demons! WebCrumbs aims to be sleek and fast. We need your help in finding the best ways to optimize React apps for performance.

What Needs to Be Done?

1. Research common performance issues in React apps.
2. Investigate methods for optimizing performance.
3. Summarize your findings in a markdown file.
Open a pull request to add this research into our Research/ directory.
Why Is This Important?

Sets us on the path to building a highly optimized product.
Helps us educate the community on performance best practices.
Skills Needed

Basic understanding of React and JavaScript.
Research skills to evaluate and summarize techniques.
Ready to help WebCrumbs fly? Zoom over to our WebCrumbs GitHub repo and help us soar!

## Todos
### 1. Gather resources
https://hackernoon.com/front-end-optimization-my-journey-to-accelerate-load-times-in-heavy-front-end?source=rss&ref=dailydev

https://www.bacancytechnology.com/blog/react-performance-optimization


https://www.codementor.io/blog/react-optimization-5wiwjnf9hj

https://dev.to/avneeshd/top-best-practices-for-using-react-in-2023-135j

https://www.freecodecamp.org/news/taming-performance-in-todays-web-app-with-lighthouse-webpack-and-react-loadable-components-b2d3fa04e0ab

https://hackernoon.com/test-driven-development-in-react-building-reliable-applications-from-scratch?source=rss&ref=dailydev

https://javascript.plainenglish.io/react-app-performance-optimization-the-definitive-guide-9b658be3b6e4

https://www.freecodecamp.org/news/measure-and-improve-performance-of-react-apps/

### 2 Read them

### 3 Highlight Important info
article 1

Problems
- Having a lot of components in author's case leads to 6500 DOM elements and large blocking time for mobile
- Fully rendered main page has height of 11000px
- React profiler crashes in devTools


Solutions / Techniques

-just reduce the amount of content on the main page.
-create a special main page in pure HTML and vanilla JS for such regions.

-import on visibility
-render on visibility
-image proxy
-fetch priority
Some obvious performance enhancements have already been made:
-Caching on the CDN side
-Gzip compression
-http/2 server
-Correctly set loading priorities for resources: -defer and async
-Images are set to lazy
-All internal pages are lazy-loaded by default
-The bundle is split into chunks.


article 2
solution
4. Functional Components & Component Interaction


article 7
measure React performance with these tools
why did you update
react dev tools
he Chrome DevTools performance timeline
1. Implementing shouldComponentUpdate for preventing unnecessary renders
2. Improving performance due to unnecessary renders using PureComponent
3. Optimizing the app loading time further with Code splitting
4. React performance with SSR
5. Improving the app’s loading time by lazy loading Images
6. Optimizing list rendering with React Virtualized List
7. Optimizing React list performance by using correct keys for components
8. Identifying problematic bundles for a React-based PWA
9. Better tree shaking
10. Preload and Prefetch resources
11. Use Memoization


### 4. First ideas jot-down (summary)
measure React performance with these tools
why did you update
react dev tools
he Chrome DevTools performance timeline
1. Implementing shouldComponentUpdate for preventing unnecessary renders


1. Research common performance issues in React apps.


2. Investigate methods for optimizing performance.


### 5. Edit

### 6. Send PR




