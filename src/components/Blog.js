import React from 'react';
const Blog = () => {
    return (
        <>
            <span class="api-blog">BLOG <i class="fa-solid fa-chevron-right"></i></span>
            <div className='blog'>
                <h1 className='header-reference'>React Blog</h1>

                <p className='para'>This blog is the official source for the updates from the React team. Anything important, <br></br>including release notes or deprecation notices, will be posted here first. You can also follow the <br></br><span className='para-span'>@reactjs</span> account on Twitter, but you won't miss anything essential if you only read this blog.</p>
                 </div>
                <div className='calling'>
                    <h2 className='canaries'>React Canaries: Incremental Feature Rollout Outside Meta</h2>
                    
                      <h3 className='date'>May 3, 2023</h3>
                      <p>Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We'd<br></br>like to offer the react community an option to adopt individual new features as soon as their design is close to final--<br></br>similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets<br></br>curated setups like frameworks decouple adoption of individual React features from the React release schedule.</p>
                     <h4 className='more'>Read More</h4>
                </div>
            
        </>
    );
}
export default Blog;