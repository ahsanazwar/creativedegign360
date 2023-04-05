import Image from 'next/image';
export function SampleNextArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      >
        {/* slider-arrow.svg */}
        <Image src='/slider-arrow.svg' alt='logo' width={19} height={34}/>
      </a>
    );
  }
  
export function SamplePrevArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      ><Image src='/slider-arrow.svg' alt='logo' width={19} height={34}/></a>
    );
  }