import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 5.99,
    title: 'Władca Pierścieni',
    description: 'J.R.R. Tolkien',
  },
  {
    id: 'p2',
    price: 6.99,
    title: 'Inferno',
    description: 'Dan Brown',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Kup swoje ulubione książki</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
