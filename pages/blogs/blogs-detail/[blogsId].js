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
     !myData.length? getBlgDetail() : '';
    }, [myData]);
  
    const getBlgDetail = () => {
      props.actions
              .blogsDetailGet(blogsId)
              .then((todos) => {
                  if (!todos.failed && !todos.pending) {
                      console.log("Det"+JSON.stringify(todos.data))
                      const newPosts = todos.data;
                      setData(newPosts);
                  }
              });
      
    };
  
  return (
    <div className="page-wrapper">
      <Meta
        pageTitle = {`Blogs ${blogsId?blogsId:''}`}
      />


      <Header {...props}/>

        <main>
            <MainBanner bannerTitle = {myData.length?myData[0].heading : ''} imgUrl={myData.length?myData[0].image : ''} content = "" btnProposal={true}/>
            {<div dangerouslySetInnerHTML={ {__html: myData.length?myData[0].content:''} } />}
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
