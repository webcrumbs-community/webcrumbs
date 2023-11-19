Content Delivery Networks (CDNs) employ a variety of techniques to optimize content delivery, improve performance, and enhance security. Here are some common techniques used by CDNs:

1. **Caching**: CDNs cache content, such as images, scripts, and stylesheets, on their distributed servers located in different regions. Cached content can be served to users from the nearest server, reducing latency and load times.

2. **Anycast Routing**: CDNs use Anycast routing to direct user requests to the nearest server in their network. This ensures that users are served from a server that is geographically closer to them, minimizing network latency.

3. **Load Balancing**: CDNs distribute incoming traffic evenly across multiple servers to prevent overloading any single server. Load balancing ensures that websites and applications remain responsive during traffic spikes.

4. **Content Compression**: CDNs often employ content compression techniques like GZIP or Brotli to reduce the size of files before transmission. Smaller files load faster, improving page load times.

5. **SSL/TLS Termination**: CDNs can handle SSL/TLS encryption and decryption on behalf of the origin server, offloading this resource-intensive task. This speeds up secure connections and reduces the load on the origin server.

6. **Web Application Firewall (WAF)**: CDNs often include a Web Application Firewall to protect websites and applications from malicious traffic, DDoS attacks, and common web vulnerabilities.

7. **Image Optimization**: CDNs may automatically optimize images by resizing, compressing, and converting formats to reduce image file sizes without compromising quality.

8. **Accelerated Mobile Pages (AMP) Delivery**: CDNs support the delivery of AMP pages, which are optimized for mobile devices and load exceptionally fast.

9. **Edge Compute**: Some advanced CDNs offer edge compute capabilities, allowing you to run serverless functions or execute code at the edge server locations. This can be used for dynamic content generation or custom logic.

10. **IPv6 Support**: CDNs ensure compatibility with IPv6, enabling users on IPv6 networks to access content seamlessly.

11. **Bot Protection**: CDNs implement bot detection and mitigation strategies to distinguish between legitimate user traffic and malicious bot traffic.

12. **DDoS Mitigation**: CDNs provide DDoS protection to absorb and mitigate large-scale distributed denial-of-service attacks, ensuring your website remains available during attacks.

13. **Real-time Analytics**: CDNs offer real-time analytics and monitoring tools to provide insights into traffic patterns, performance, and security threats.

14. **Content Purging**: CDNs allow content purging, enabling you to remove cached content or specific versions of content from their servers to ensure users receive the latest updates.

15. **Token Authentication**: CDNs may support token-based authentication for secure access to certain content, ensuring that only authorized users can access specific resources.

16. **Origin Shield**: CDNs may introduce an additional layer called an "origin shield" to protect the origin server from high-frequency requests. The shield caches content from the origin server, reducing the load on it.

17. **HTTP/2 and HTTP/3 Support**: CDNs often support the latest HTTP protocols, such as HTTP/2 and HTTP/3, to further enhance website performance.

CDNs play a crucial role in improving website and application performance, enhancing security, and reducing the load on origin servers. They achieve this through a combination of these techniques, tailored to meet the specific needs of their customers.

Ensuring that clients accessing content from a Content Delivery Network (CDN) are receiving secure content and not third-party injected code is essential for maintaining the integrity and security of web applications. Here are some techniques and best practices for CDN clients to enhance security:

1. **HTTPS**: Use HTTPS (SSL/TLS) for all communication between clients and the CDN. This encrypts data in transit and ensures that content is delivered securely.

2. **Subresource Integrity (SRI)**: Implement Subresource Integrity in your HTML to ensure that external resources loaded from the CDN have not been tampered with. SRI involves adding integrity attributes to `<script>` and `<link>` tags that contain the CDN URLs. These attributes contain hash values of the expected resource content, and the browser will only load the resource if the hash matches.

3. **Content Security Policy (CSP)**: Implement a strong CSP in your web application. CSP defines which sources of content and scripts are allowed to be executed on your pages. It helps prevent XSS attacks and limits the execution of injected code.

4. **Domain Whitelisting**: Explicitly whitelist domains or CDN hostnames that are allowed to serve content for your application. This can be configured in your CSP rules and server settings.

5. **CORS (Cross-Origin Resource Sharing)**: Use CORS headers to control which domains are allowed to access your resources from the CDN. You can configure your server to send appropriate CORS headers for your CDN-hosted content.

6. **Integrity Checks**: Periodically verify the integrity of your CDN-hosted content by comparing hashes or checksums of the served files with known good values. This can be done using automation and monitoring tools.

7. **Security Headers**: Utilize security headers like `X-Content-Type-Options`, `X-Frame-Options`, and `X-XSS-Protection` to enhance security and prevent certain types of attacks.

8. **CDN Provider Security**: Choose a reputable CDN provider that follows strict security practices. Research their security certifications and compliance standards.

9. **Two-Factor Authentication (2FA)**: Secure access to your CDN account with 2FA to prevent unauthorized access to your configuration and content.

10. **Logging and Monitoring**: Implement logging and monitoring to detect and respond to unusual or suspicious CDN activity. Monitor for changes in traffic patterns or unexpected content modifications.

11. **Regular Updates**: Keep your CDN configurations and integrations up to date. This includes regularly updating CDN settings, scripts, and security policies.

12. **Review Third-Party Content**: Thoroughly review and test any third-party content or scripts that you integrate into your website from external sources. Ensure they come from reputable sources and adhere to security best practices.

13. **Static Content**: Whenever possible, serve static content from the CDN, as it reduces the risk of server-side code injection.

14. **Education and Training**: Educate your development and security teams about security best practices, including the risks associated with third-party content.

15. **Content Auditing**: Periodically audit the content delivered by the CDN to ensure it aligns with your expectations and doesn't contain unauthorized or malicious code.

By implementing these techniques and best practices, CDN clients can enhance the security of their web applications and protect against third-party code injection and other security threats. It's essential to maintain a proactive and vigilant approach to security.