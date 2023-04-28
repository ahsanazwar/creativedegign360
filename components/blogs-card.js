import Link from 'next/link';

export default function BlogsCard(props) {
    var tags = [props.blogTags.split(',')];
    console.log(tags)
    return(
    <>  
        <li>
            <article>
                <Link href={`/blogs/blogs-detail/${props.blogUrl}`}>
                    <a>
                        <div className="img-wrap">
                            <img src={props.blogImg} alt='logo' width={'100%'} height={250} />
                        </div>
                    </a>
                </Link>
                <div className="blog-card-content">
                    <Link href={`/blogs/blogs-detail/${props.blogUrl}`}>
                        <a>
                            <h5>{props.blogTitle}</h5>
                        </a>
                    </Link>
                    <p className="entry-data">{props.blogDate} <span> <Link href=""><a>{props.blogAuthor}</a></Link></span></p>
                    <p className="blog-content">
                        {props.blogContent}
                    </p>
                    <p className="blog-tags">
                        Filed Under: {
                            
                            tags[0].map((data,i)=>{
                                return (
                                    <span key={i}><Link href={`/blogs/categories/${data}`}><a>{data}</a></Link>, </span>
                                )
                            })
                        }
                    </p>
                </div>
            </article>
        </li>
    </>
    )
}