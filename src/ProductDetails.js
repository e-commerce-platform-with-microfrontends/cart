import React, { useState, useEffect, useCallback } from 'react';
import { Heading4, PText } from 'ui-components';

import * as S from "./ProductDetails.styles";

export const ProductDetails = ({ productId, onClickRemove }) => {
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const details = await fetch(`http://localhost:4000/products/${productId}`).then(res => res.json());
    setProduct(details);
  }, []);

  return (
    <>
      <S.Image src={product.image} />
      <S.Title>
        <Heading4>{product.title}</Heading4>
        <S.Delete>
          <PText onClick={onClickRemove}>Remove</PText>
        </S.Delete>
      </S.Title>
      <strong>
        <Heading4>{product.price}</Heading4>
      </strong>
    </>
  )
};