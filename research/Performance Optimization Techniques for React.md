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

https://dev.to/rasaf_ibrahim/react-performance-booster-introduction-to-the-usememo-hook-212i?ref=dailydev

### 2 Read them

### 3 Highlight Important info

### 4. First ideas jot-down (summary)
Common performance issues in React apps.

React is a User Interface library built in JavaScript. As the name suggests, React reacts to changes in the DOM and rerenders it's components accordingly, giving it a real-time interaction. Over the years this UI library has upgrades it's internal algorithms to reduce the number of rendering operations making the application faster and easier for development. However like all powerful technologies can be used sub-optimally causing inefficent performance. Here are some common performance issues in React and ways to eliminate/mitigate these problems.

## Measuring Performance / Monitoring Errors

### Uncertain Perfomance Metrics
Problem
**There are many categories of performance such as accessibility, SEO, rendering, load time, memory complexity, time complexity, number of components**. As you can see it can get overwhelming and unclear as to what is causing issues on the React app.

Solutions
**We need to measure performance and identify the problems so we can accurately address the issues.**

Use performance measuring tools such as:
Lighthouse - overall web app performance, SEO, accessbility
React Dev tools - see components and state performance, useful for debugging

## Rendering
A host of issues relates with rendering. Although necessary for updating UI elements, re-renders can slow down an app quite a bit. Here are some ways to make your app render more smoothly.

### Excessive Re-renders
Problem
As rerendering increase, the page load time also increases.

There are unnecessary re-rendering of components even if prop or state has not changed. This is often caused by using 'shouldComponentUpdate' incorrectly.

Solutions
**Use 'shouldComponentUpdate' (or useMemo and useCallback hooks) to control when a component should re-render.** This method compares current vs previous state, returning 'true' only if the update is needed, avoiding unnecessary re-renders.

Cutting out excessive re-renderings by using React.memo (memoization) or PureComponent. 

### Unoptimized List Rendering
Problem
Large lists are culprits of slow React apps. 

Solutions
**Using a techique called windowing or virtualization (such as react-window) which only renders the list items based on viewport (part where the user sees).**

### Offload heavy computation renderings
Problem
Heavy computations uses more computer resources to execute which obviously can slow down any application.

Solutions
**Delegate the intensive workload to web workers which can work in parallel.**

Optimize the algorithm with more efficient time or space complexity. Time and space complexity is a process of making code more efficient in terms of execution speed (time) and memory storage (space).

## State Management / Components

### Large Component Trees
Problem
The more components you have, the longer it takes React to render them.
Nested component trees especially with more levels uses too much memory.

Solutions
**Avoid nesting components to levels more than 2 levels deep.**

Optimize the component structure. There are many ways to achieve this depending on how the components are used and how often it is used. Techniques such as conditional rendering, component composition and component decomposition are helpful depending on the circumstances.
A good rule of thumb is to always make sure there is no duplicate components, make them reusable and modular.

### Excessive Prop Drilling
Problem
Prop drilling is a concept in React where data is being pass down from parent component down to its children which is necessary. However the deeper the data pass down in the component hierachy the less performant and harder it is to maintain the code. 

Solution
**Using context / Provider or a state management tool like Redux to avoid excessive prop drilling.**

### Ineffiecent State Management
Problem
Storing state in the wrong place or excessive use of state management libraries can also lead to performance problems.

Solution
**Know and understand how much state management / context you should use based on your circumstance.** Because having no state management and having too much state management are both sides of the extreme that can cause app inefficienies.

## Loading Performance
### Large Initial Loads
Problem
Loading large initial bundles of JavaScript slows an apps initial load time.

Solution
Use a technique called **code splitting** which only loads module / packages / code that are needed at a given moment and delegate the others downloads asynchronously.
You can also **lazy load** which can reduces the load time of Javascript as well by loading code only when it's needed near the viewport.

### Rendering unoptimized images and media
Problem
Larger images and media files are common ways to slow down page load times.

Solutions
Use responsive images that dynamically select image sizes based on viewport.

Use lazy loading to render and load only images that are in the viewport as oppose to all the images on the page at once.

Use photo optimization tools like Sharp that compresses images for faster loading. **Next.js' Image component automatically optimizes images for fast loading.**

## Memory 

### Memory leaks
Problem
It can be common to forget to clean up resources once it is finished its use. When a component unmounts it can be easy to forget to clean up which over time can cause memory leaks.

Solutions
Here are a couple ways to access cleanup functionality in React.
Use the **lifecycle method 'componentWillUnmount'**
Use the **useEffect hook** with cleanup logic to handle resource cleanup automatically.

## Network Performance

Reducing network requests
Efficient data transfer (minimizing payload size)
Caching strategies
Use of CDNs (Content Delivery Networks)


### 5. Edit

### 6. Send PR




