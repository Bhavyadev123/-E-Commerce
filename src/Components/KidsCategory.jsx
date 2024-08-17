import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from './Item/Item';
import './CSS/ShopCategory.css';

const KidsCategory = ({ banner }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={banner} alt="Kids' Category" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product.filter(item => item.category === 'kids').length} products
        </p>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter(item => item.category === 'kids')
          .map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
      </div>
    </div>
  );
};

export default KidsCategory;
