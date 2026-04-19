import ProductsCard from '@/Component/ProductsCard';
import React from 'react';

const getProductsPromis =async()=>{
    const res = await fetch("http://localhost:5000/products",{cache:"force-cache"});
    const data =res.json()
    return data
}


const ProductsPage = async() => {
    const product =await getProductsPromis();
    console.log(product)
    return (
      <div>
        <h2 className='font-bold text-2xl text-center my-5'>Products :{product.length}</h2>
        <div className='grid grid-cols-3 max-w-11/12 mx-auto gap-5'>
          {product.map((product) => (
            <ProductsCard key={product.id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    );
};

export default ProductsPage;