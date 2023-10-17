import React from "react";
// import './home.module.css';
import '@/styles/Home.module.css';

const AppLayout = () => {
  const textColor = 'rgba(97,97,97,1)'
  return (
    <>
      <section style={{ padding: '2em', color: textColor }}>

        <header style={{ marginBottom: '3em' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '100', textDecoration: 'underline' }}>Hello world!</h1>

        </header>
        <main style={{ marginBottom: '3em' }}>
          <p style={{ marginBottom: '3em', fontSize: '1.2rem', maxWidth: '600px' }}>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
          <a href="#" style={{ color: textColor }}>Add "read more" link text</a>
          <time style={{ display: 'block', margin: '2em 0 2.5em 0', textDecoration: 'underline' }}><em>May 18, 2023</em></time>
          <hr />
        </main>
        <footer>
          <nav style={{display: 'flex', justifyContent:'space-between'}}>
            
          <a style={{color: textColor}}className="page-link" href="#" aria-label="Previous">
                  
                  <span className="sr-only">← Previous</span>
                </a>
            <ul className="pagination" style={{ display: 'flex', gap: '0.2em', listStyleType: 'none' }}>
            
              
              <li className="page-item"><a style={{color: textColor}} className="page-link" href="#">1</a></li>
              <li className="page-item"><a style={{color: textColor}} className="page-link" href="#">2</a></li>
              <li className="page-item"><a style={{color: textColor}} className="page-link" href="#">3</a></li>
              <li className="page-item page_item--active"><a style={{color: textColor, textDecoration: 'none'}} className="page-link" href="#">4</a></li>
              <li className="page-item"><a style={{color: textColor}} className="page-link" href="#">5</a></li>
              <li>...</li>
              <li className="page-item"><a style={{color: textColor}} className="page-link" href="#">8</a></li>
            </ul>
            <a style={{color: textColor}} className="page-link" href="#" aria-label="Next">
                
                  <span className="sr-only">Next →</span>
                </a>
          </nav>
        </footer>
      </section>
    </>
  );
};

export default AppLayout;
