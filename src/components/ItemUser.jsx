import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function ItemUser() {
  let location = useLocation();

  const [items, setItems] = useState([]);
  const [data1, setData1] = useState(0);
  
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(`https://reqres.in/api/users/${location.pathname.split("/").at(-1)}`);
    const items = await data.json();
    setItems(items.data);
    setData1(data.status);
  }

  if(data1 === 200){
    return (
      <div>
        <img src={items.avatar} alt={items.first_name} />
        <h1>
          {items.first_name} {items.last_name}
        </h1>
        <p>
          {items.email}
        </p>
      </div>
    )
  } else {
    return (
      <h1>404 Error</h1>
    )
  }
}

export default ItemUser
