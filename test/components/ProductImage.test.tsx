import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import products from '../data/products'

describe('ProductTitle Text', () => {
  it('renders without crashing - with custom title', () => {
    
    const wrapper = renderer.create(
      <ProductCard.Image 
        image='https://resource.logitechg.com/w_1000,c_limit,q_auto,f_auto,dpr_auto/d_transparent.gif/content/dam/gaming/en/products/g915-tkl/g915-tkl-gallery-2-carbon-new.png?v=1'
      />
    )

    expect(wrapper.toJSON()).toMatchSnapshot()

  });

  test('with product name', () => { 

    const wrapper = renderer.create(
      <ProductCard
        product = { products[1] }
      >
        { () => (
          <ProductCard.Image />
        )}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()

  })
});
