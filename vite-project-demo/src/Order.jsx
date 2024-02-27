
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrderRedux } from "./Actions";

const Order = () => {
  const [query, setQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortBy, setsortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const dispatch = useDispatch();
  const updatedUsers = useSelector((state) => state.usersOrder);

  useEffect(() => {
    setFilteredOrders(updatedUsers);
  }, [updatedUsers]);

  function rejectOrder(orderId) {
    dispatch(removeOrderRedux(orderId));
  }

  function filterOrdersById(orderId) {
    const filtered = updatedUsers.filter((order) => order.id.includes(orderId));
    setFilteredOrders(filtered);
  }

  function sorting() {
    if (sortBy === "cheese") {
     return  filteredOrders.sort((a, b) => a.cheese - b.cheese);
    } else if (sortBy === "patties") {
      return filteredOrders.sort((a, b) => a.patties - b.patties);
    } else if (sortBy === "salad") {
     return filteredOrders.sort((a, b) => a.salad - b.salad);
    }
    return filteredOrders;
  }

  

  return (
    <div>
      <input
        type="number"
        placeholder="Search By Id"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          filterOrdersById(e.target.value);
        }}
        style={{ padding: "10px", margin: "5px" }}
      />

      <label for="items">Sort By:</label>

      <select
        name="items"
        id="items"
        value={sortBy}
        onChange={(e) => setsortBy(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      >
        <option></option>
        <option value="cheese">Cheese</option>
        <option value="salad">Salad</option>
        <option value="patties">Patties</option>
      </select>
      {console.log(sortBy)}

      {filteredOrders.length === 0 ? (
        <h3>No Orders Available!!!</h3>
      ) : (
        sorting().map((order) => (
          <div className="order-in-orderpage">
            {order.id}
            <br />
            Amount of cheese : {order.cheese}
            <br />
            Amount of Salad : {order.salad}
            <br />
            Amount of Patties: {order.patties}
            <br />
            <button onClick={() => rejectOrder(order.id)}>Reject</button>
          </div>
        ))
      )}

      
     
    </div>
  );
};

export default Order;
