import React from 'react';

import ProductExampleElement from './ProductExampleElement';

const Data = [
  { img: 'mobile1', reverse: false },
  { img: 'mobile2', reverse: true },
  { img: 'mobile3', reverse: false },
  { img: 'mobile4', reverse: true },
];

const ProductExample = () => {
  return (
    <>
      {Data.map(data => (
        <ProductExampleElement reverse={data.reverse} img={data.img} />
      ))}
    </>
  );
};
export default ProductExample;
