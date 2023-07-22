import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useWindowWidth } from './useWindowWidth';

const Hero = () => {

  const width = useWindowWidth();

  return (
    <div>
      <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      centerMode={width > 500 ? true : false}
      centerSlidePercentage={width > 976 ? 50 : width > 768 ? 70 : 90}
      dynamicHeight={true}
      infiniteLoop={true}
      className="my-[5rem]"
      >
        <div className="">
            <img
            className="h-[70vh] xs:h-[80vh]"
            src='./assets/artistic-scaffold.webp' />
        </div>
        <div className="">
            <img 
            className="h-[70vh] xs:h-[80vh]"
            src="./assets/gens-in-warehouse.webp" />
        </div>
        <div className="">
            <img 
            className="h-[70vh] xs:h-[80vh]"
            src="./assets/solar-installation.webp" />
        </div>
        <div className="">
            <img 
            className="h-[70vh] xs:h-[80vh]"
            src="./assets/switchboards.webp" />
        </div>
      </Carousel>
    </div>
  )
}

export default Hero