import {useState,createContext,ReactNode, useContext} from 'react'
import ShopingCart from '../modules/Home/ShopingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { CartItem } from '../types/types'

type ShoppingCartProviderProps = {
  children: ReactNode
}
type ShopingCartContext = {
  deleteCart: () => void
  openCart:()=> void
  closeCart:()=> void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  addAmountCartQuantity: (id: number,quantity:number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShopingCartContext)

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])

  function deleteCart (){
    setCartItems([]);
  }
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(id:number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  function increaseCartQuantity(id:number) {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id) == null){
        return [...currItems, {id, quantity:1}]
      }else{
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity : item.quantity + 1}
          } else{
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id:number) {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)?.quantity === 1){
        return currItems.filter(item => item.id !== id)
      }else{
        return currItems.map(item => {
          if(item.id === id){
            return {...item, quantity : item.quantity - 1}
          } else{
            return item
          }
        })
      }
    })
  }
  function addAmountCartQuantity(id:number, quantity:number){
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id)== null){
        return [...currItems,{id,quantity:quantity}]
      }else{
        return currItems.map(item => {
          if(item.id===id){
          return {...item, quantity: item.quantity + quantity}
        }else{
          return item
        }
      })
      }
    })
  }
  function removeFromCart(id:number){
    setCartItems(currItems=>{
      return currItems.filter(item => item.id !== id)
    })
  }
  const cartQuantity = cartItems.reduce((quantity, item ) => 
  item.quantity + quantity,0)

  return(
    <ShoppingCartContext.Provider value={{deleteCart,openCart, closeCart,getItemQuantity,increaseCartQuantity, decreaseCartQuantity,addAmountCartQuantity,removeFromCart ,cartItems,cartQuantity}}>
    {children}
    <ShopingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  )
}