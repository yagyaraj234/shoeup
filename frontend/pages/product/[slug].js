import ProductDetailsCrousel from '@/components/ProductDetailsCrousel';
import React from 'react'
import Wrapper from '@/components/Wrapper';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[50px]'>
            {/* Left Side Start  */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 '>
                <ProductDetailsCrousel/>
            </div>
             {/* Left Side End  */}

              {/* Right Side Start  */}
            <div className='flex-[1] py-3'>rigth</div>
            {/* Right Side End  */}
        </div>
        
        </Wrapper>
    </div>
  )
}

export default ProductDetails