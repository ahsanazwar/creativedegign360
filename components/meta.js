import Head from 'next/head';

export default function Meta(props){
    return(
        <>
            <Head>
                <title>{props.pageTitle}</title>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="description" content="Rentifyy"/>
                <meta name="keywords" content="Rentifyy"/> 
                <meta name="author" content="Rentifyy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}