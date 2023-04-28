import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '@actions/userActions';

import Meta from '@components/meta';
import Header from '@components/header';
import Footer from '@components/footer';
import MainBanner from '@components/main-banner';


function BlogsDetail(props) {
  const [myData, setData] = useState([]);
    const router = useRouter()
    const { blogsId } = router.query
  
    // console.log(router);

    useEffect(() => {
      getMorePost();
  
    });
  
    const getMorePost = () => {
      console.log(blogsId);
      props.actions
              .blogsDetailGet(blogsId)
              .then((todos) => {
                  if (todos.data.length) {
                      // console.log(JSON.stringify(todos.data.slice(0,1)));
                      // setData(todos.data);
  
                      const newPosts = todos.data;
                      setData(newPosts);
                  }
                  console.log(myData);
              });
      
    };

  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = {`Blogs ${blogsId}`}
      />


      <Header {...props}/>

        <main>
            <MainBanner/>
            <div>
                {blogsId}
            </div>
        </main>
      
      <Footer/>
    </div>
  )
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({ ...userActions }, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogsDetail);
