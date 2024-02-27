
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeOrderRedux } from "./Actions";

// const Order = () => {
//   const [query, setQuery] = useState("");
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [sortBy, setsortBy] = useState("");

  

//   const dispatch = useDispatch();
//   const updatedUsers = useSelector((state) => state.usersOrder);

//   useEffect(() => {
//     setFilteredOrders(updatedUsers);
//   }, [updatedUsers]);

//   function rejectOrder(orderId) {
//     dispatch(removeOrderRedux(orderId));
//   }

//   function filterOrdersById(orderId) {
//     const filtered = updatedUsers.filter((order) => order.id.includes(orderId));
//     setFilteredOrders(filtered);
//   }

//   function sorting() {
//     if (sortBy === "cheese") {
//      return  filteredOrders.sort((a, b) => a.cheese - b.cheese);
//     } else if (sortBy === "patties") {
//       return filteredOrders.sort((a, b) => a.patties - b.patties);
//     } else if (sortBy === "salad") {
//      return filteredOrders.sort((a, b) => a.salad - b.salad);
//     }
//     return filteredOrders;
//   }

  

//   return (
//     <div>
//       <input
//         type="number"
//         placeholder="Search By Id"
//         value={query}
//         onChange={(e) => {
//           setQuery(e.target.value);
//           filterOrdersById(e.target.value);
//         }}
//         style={{ padding: "10px", margin: "5px" }}
//       />

//       <label for="items">Sort By:</label>

//       <select
//         name="items"
//         id="items"
//         value={sortBy}
//         onChange={(e) => setsortBy(e.target.value)}
//         style={{ padding: "10px", margin: "5px" }}
//       >
//         <option></option>
//         <option value="cheese">Cheese</option>
//         <option value="salad">Salad</option>
//         <option value="patties">Patties</option>
//       </select>
//       {console.log(sortBy)}

//       {filteredOrders.length === 0 ? (
//         <h3>No Orders Available!!!</h3>
//       ) : (
//         sorting().map((order) => (
//           <div className="order-in-orderpage">
//             {order.id}
//             <br />
//             Amount of cheese : {order.cheese}
//             <br />
//             Amount of Salad : {order.salad}
//             <br />
//             Amount of Patties: {order.patties}
//             <br />
//             <button onClick={() => rejectOrder(order.id)}>Reject</button>
//           </div>
//         ))
//       )}

      
     
//     </div>
//   );
// };

// export default Order;


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrderRedux } from "./Actions";

const Order = () => {
  const [query, setQuery] = useState("");
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [sortBy, setSortBy] = useState("");
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
    let sortedOrders = [...filteredOrders];
    if (sortBy === "cheese") {
      sortedOrders.sort((a, b) => a.cheese - b.cheese);
    } else if (sortBy === "patties") {
      sortedOrders.sort((a, b) => a.patties - b.patties);
    } else if (sortBy === "salad") {
      sortedOrders.sort((a, b) => a.salad - b.salad);
    }
    return sortedOrders;
  }

  // pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sorting().slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

      <label htmlFor="items">Sort By:</label>

      <select
        name="items"
        id="items"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{ padding: "10px", margin: "5px" }}
      >
        <option></option>
        <option value="cheese">Cheese</option>
        <option value="salad">Salad</option>
        <option value="patties">Patties</option>
      </select>

      {filteredOrders.length === 0 ? (
        <h3>No Orders Available!!!</h3>
      ) : (
        <>
          {currentItems.map((order) => (
            <div className="order-in-orderpage" key={order.id}>
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
          ))}
          <ul className="pagination" style={{display:"flex", flexDirection:"row",gap:'10px',justifyContent:'center'}}>
            {sorting().length > itemsPerPage &&
              Array(Math.ceil(sorting().length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li key={index} className="page-item" style={{listStyleType:"none"}}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className="page-link"
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Order;
