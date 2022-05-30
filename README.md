# lnx-product-card

Este es un paquete de pruebas de despliegue en NPM

## Ejemplo
```
import { ProductCard } from 'lnx-product-card'
```

```
  <ProductCard 
    product = { products[0] }
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    { () => (
      <>
        <ProductCard.Image />
        <ProductCard.Title />
        <ProductCard.Buttons />
      </>
    )}
  </ProductCard>
```