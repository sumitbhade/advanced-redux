import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "First book I wrote. ",
  },
  {
    id: "p2",
    price: 8,
    title: "My First PS5",
    description: "First PS5 I bought. ",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((items) => (
          <ProductItem
            key={items.id}
            id={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
