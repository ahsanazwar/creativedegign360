import {useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import '@styles/styles.scss';
import { wrapper, store } from "store";
import { Provider } from "react-redux";




function MyApp({ Component, pageProps }) {
  const [scrollEvent, setScroll] = useState('notscroll');
     const handleScrollFrame=(values)=>{
        const { top } = values;
        if(top>0){
          setScroll('scrollactive')
        }else{
          setScroll('notscroll')
        }
    }    
  
  return(

    <Scrollbars renderThumbVertical={pageProps => <div {...pageProps} className="thumb-vertical"/>} autoHide universal={true} {...pageProps}

    onScrollFrame={handleScrollFrame}
>
<Provider store={store}>
<Component {...pageProps} scrollEvent={scrollEvent}/>
</Provider>
</Scrollbars>
  )
}

export default wrapper.withRedux(MyApp);