export function SampleNextArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      ><i className="icon-slider-right-arrow"></i></a>
    );
  }
  
export function SamplePrevArrow(props){
    const { className, onClick } = props;
    return (
      <a
        href="javascript:"
        className={className}
        onClick={onClick}
      ><i className="icon-slider-left-arrow"></i></a>
    );
  }