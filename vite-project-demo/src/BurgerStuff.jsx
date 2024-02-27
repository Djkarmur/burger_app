import React from 'react'

const BurgerStuff = () => {
        /// for cheese
   let cheeseCnt =  burgerItem.cheese;
   let i;
   const cheeseArr=[];
   for(i=0;i<cheeseCnt;i++){
     cheeseArr.push(i);
   }
   console.log(cheeseArr);

   const newArr = cheeseArr.map((val,index)=>{
    return <Cheese />
  });



  ///for patties
  let pattiesCnt =  burgerItem.patties;
   let j;
   const pattiesArr=[];
   for(j=0;j<pattiesCnt;j++){
     pattiesArr.push(j);
   }
   

   const newArr2 = pattiesArr.map((val,index)=>{
    return <Patties />
  });

  // for salad
  let saladCnt =  burgerItem.salad;
   let k;
   const saladArr=[];
   for(k=0;k<saladCnt;k++){
     saladArr.push(i);
   }
   console.log(saladArr);

   const newArr3 = saladArr.map((val,index)=>{
    return <Salad />
  });
      
  return (
    <div>
      
    </div>
  )
}

export default BurgerStuff
