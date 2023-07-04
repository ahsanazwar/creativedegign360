import React, { useState, useEffect } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";


import BlogsCard from './blogs-card';


function BlogsSection(props) {
    // console.log("hogidogi "+ JSON.stringify(props.getBlogs));
    return(
    <>  
        <section className="blogs-section">
            <Container>
                
                <Row>
                    
                    <Col xl={12}>
                        <ul className="blogs-card">
                            

                        <InfiniteScroll
                            dataLength={props.getBlogs.length}
                            next={props.getMore}
                            hasMore={props.hasMore}
                            loader={<h3> Loading...</h3>}
                            endMessage={<h4>Nothing more to show</h4>}
                        >
                               <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                                    <Masonry>
                                        {   
                                            props.getBlogs? props.getBlogs.map((blogs) => {
                                                return(
                                                    <>
                                                        <BlogsCard
                                                            key={blogs.id}
                                                            blogUrl = {blogs.slug}
                                                            blogImg = {blogs.image}
                                                            blogTitle = {blogs.heading}
                                                            blogDate = {`${blogs.date}, BY`}
                                                            blogAuthor = {blogs.author}
                                                            blogContent = {<div dangerouslySetInnerHTML={ {__html: blogs.content} } />}
                                                            blogTags = {blogs.field_under}
                                                        />
                                                    </>
                                                        
                                                )
                                            }) : ''
                                        }
                                    </Masonry>
                            </ResponsiveMasonry>
                                </InfiniteScroll> 
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
}

export default BlogsSection;