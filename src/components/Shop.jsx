import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://reqres.in/api/users");
    const items = await data.json();
    setItems(items.data);
  }

  return (
    <div>
      {
        items.map(item => (
          <Link key={item.id} to={`/shop/${item.id}`}>
            <h3>{item.first_name} {item.last_name}</h3> 
          </Link>
        ))
      }
    </div>
  )
}

export default Shop
