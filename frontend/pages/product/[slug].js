import ProductDetailsCrousel from "@/components/ProductDetailsCrousel";
import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ReactMarkdown from "react-markdown";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

  const p = product?.data?.[0]?.attributes;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[50px]">
          {/* Left Side Start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 ">
            <ProductDetailsCrousel images={p.image.data} />
          </div>
          {/* Left Side End  */}

          {/* Right Side Start  */}
          <div className="flex-[1] py-3">
            {/* Product NAme  */}
            <div className="text-[34px] font-semibold mb-2">{p.name}</div>

            {/* Product Subtitle  */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            {/* Product Price  */}
            <div className="text-lg font-semibold">&#8377; {p.price}</div>
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
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* Size Start  */}

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium  ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50" 
                    } ${selectedSize === item.size? 'border-black':''}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false)
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* Size End  */}

              {/* Size Error Message Start  */}

              {showError && (
                <div className="text-red-600 mt-1">
                  Size Selection is required
                </div>
              )}
              {/* Size Error Message End  */}

              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75" onClick={()=>{
                if(!selectedSize){
                  setShowError(true)
                  document.getElementById("sizesGrid").scrollIntoView({
                    block:"center",
                    behavior:"smooth"
                  })
                }
              }}>
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
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <ReactMarkdown>
                    {/* {" "} */}
                    {p.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side End  */}
        </div>

        <RelatedProducts  products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products.data.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filter][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
