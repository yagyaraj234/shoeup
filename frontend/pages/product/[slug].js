import ProductDetailsCrousel from '@/components/ProductDetailsCrousel';
import React from 'react'
import Wrapper from '@/components/Wrapper';
import { IoMdHeartEmpty } from 'react-icons/io';
import ReactMarkdown from "react-markdown";
import RelatedProducts from '@/components/ProductDetailsCrousel'

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
            <div className='flex-[1] py-3'>

              {/* Product NAme  */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* Product Subtitle  */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>

            {/* Product Price  */}
            <div className="text-lg font-semibold">
              MRP : $ 16 695.00
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

             {/* PRODUCT SIZE RANGE START */}
             <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}

                            {/* Size Start  */}

                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >

                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                              UK 6
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                              UK 7
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                              UK 8
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                              UK 9
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                              UK 10
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ">
                              UK 11
                            </div>
                            <div className="border rounded-md text-center py-3 font-medium hover:border-black  cursor-not-allowed bg-black/[0.1] opacity-50">
                              UK 12
                            </div>

                            </div>
                            {/* Size End  */}

                            {/* Size Error Message Start  */}

                            <div className="text-red-600 mt-1">
                              Size Selection is required
                            </div>
                            {/* Size Error Message End  */}

                            <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            
                        >
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum architecto vel fugit, consequatur modi placeat quidem reiciendis dignissimos repudiandae nobis quod? Quasi suscipit veritatis minus quaerat incidunt excepturi sunt expedita repudiandae debitis consectetur?</ReactMarkdown>
                            </div>
                        </div>
                    </div>



            </div>
            {/* Right Side End  */}
        </div>
  
        <RelatedProducts  />


        </Wrapper>
    </div>
  );
}

export default ProductDetails