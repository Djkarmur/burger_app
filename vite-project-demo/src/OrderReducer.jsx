
const initialOrders = JSON.parse(localStorage.getItem('orders')) || [];
const OrderReducer = (state=initialOrders || [],action)=>{
    switch(action.type){
        case 'ADD_ORDER':
            return ([...state,action.payload])
        case 'REJECT_ORDER':
            const newArr =   state.filter((item)=> item.id !== action.payload)
            localStorage.setItem('orders',JSON.stringify(newArr));
            return newArr
        default:
            return state
    }
}
export default OrderReducer;