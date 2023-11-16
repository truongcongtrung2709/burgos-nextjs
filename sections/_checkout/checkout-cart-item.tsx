import { formatCurrency } from "@/utils/formatCurrency";
import { Product } from "@/types/product";
type CheckoutCartItemProps = {
  id:number,
  quantity:number,
  products:Product[],
}
const CheckoutCartItem = ({id,quantity,products} : CheckoutCartItemProps) => {

  const item = products?.find(i => i.id === id);
  if(item ==null) return null;

  return (
    <>
      <tr className="cart-item">
            <td className="product-name align-middle leading-[1.5em] px-3 py-[9px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">{item.name} x{quantity}</td>
            <td className="product-total align-middle leading-[1.5em] px-3 py-[9px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">{formatCurrency(item.price) }</td>
          </tr>
    </>
  )
}

export default CheckoutCartItem