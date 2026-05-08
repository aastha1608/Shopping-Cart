export const reducer=(state,action)=>{
    if(action.type==="REMOVE_ITEM")
    {
        return{
            ...state,
            item:state.item.filter((curItem)=>{
                return curItem.id!==action.payload
            })
        };
    }

    if(action.type==="CLEAR_CART")
    {
        return{
            ...state,
            item:[]
        };
    }

    if(action.type==="INCREMENT")
    {
        return{
            ...state,
            item:state.item.map((curItem)=>curItem.id===action.payload ? {...curItem,quantity:curItem.quantity+1} : {...curItem})
        };
    }

    if(action.type==="DECREMENT")
    {
        return{
            ...state,
            item:state.item.map((curItem)=>{
                if(curItem.id===action.payload) 
                {
                    return {...curItem,quantity:curItem.quantity-1};
                }
                return curItem;
            }).filter((curItem)=>curItem.quantity!==0)
        };
    }

    return state;
};