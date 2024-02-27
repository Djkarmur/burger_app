export  const addOrder = (data)=>{
    return({
        type:'ADD_ORDER',
        payload:data,
    })
};
export const removeOrderRedux = (id) => {
    return({ type:'REJECT_ORDER', payload:id})
}
