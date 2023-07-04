import Image from 'next/image';
export function SampleNextArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      ><Image src='/left-arrow-slide.png' alt='logo' width={23} height={23}/></a>
    );
  }
  
export function SamplePrevArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      ><Image src='/right-arrow-slide.png' alt='logo' width={23} height={23}/></a>
    );
  }