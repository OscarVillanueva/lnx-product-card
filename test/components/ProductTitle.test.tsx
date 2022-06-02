import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import products from '../data/products'

describe('ProductTitle Text', () => {
  it('renders without crashing - with custom title', () => {
    
    const wrapper = renderer.create(
      <ProductCard
        product = { products[0] }
      >
        { () => (
          <ProductTitle title='Custom'/>
        )}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()

  });

  test('with product name', () => { 

    const wrapper = renderer.create(
      <ProductCard
        product = { products[0] }
      >
        { () => (
          <ProductTitle />
        )}
      </ProductCard>
    )

    expect(wrapper.toJSON()).toMatchSnapshot()

  })
});
