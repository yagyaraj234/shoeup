import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";

const Category = ({category,products,slug}) => {
  return (
    <div className="w-full md:pt-5">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0  ">
          <div className="text-[28px] md:text-[34px] mb-5  font-semibold leading-tight ">
            {category?.data[0]?.attributes?.name}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 my-14 px-5 md:px-20">
        {/* // Mapping the category Product items   */}
          {products?.data?.map((product)=>(
            <ProductCard  key={product?.id} data={product}/>
          ))}

        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");
  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`);
  const products = await fetchDataFromApi(`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}`);

  return {
    props:{
      category,
      products,
      slug
    }
  }
}
