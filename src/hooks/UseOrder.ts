import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"


export default function UseOrder(){
 const [order, setOrder] = useState<OrderItem[]>([])
const [tip, setTip] = useState(0)
 const addItem = (item:MenuItem) =>{
    
    //ver si ya existe la orden pedida

    const itemExist = order.find(OrderItem => OrderItem.id === item.id)
    if(itemExist){

        //identificar el elemento e incrementar su cantidad
        const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
setOrder(updatedOrder)
    }
    else{
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }
    
 }
 
 const removeItem = (id: MenuItem['id']) =>{
    setOrder(order.filter(item=> item.id !== id))
    
 }


 const placeOrder = ()=>{
    setOrder([]),
    setTip(0)
    
 }
 
    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}