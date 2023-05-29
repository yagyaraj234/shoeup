import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductDetailsCrousel = ({images}) => {
  return (
    <div>
      <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
        <Carousel
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          thumbWidth={60}
          className="productCarousel"
        >
          
          {images?.map((img)=>(
            <img src={img.attributes.url} alt={img.attributes.name}/>
          ))}
          
        </Carousel>
      </div>
      </div>
      )
}

      export default ProductDetailsCrousel;