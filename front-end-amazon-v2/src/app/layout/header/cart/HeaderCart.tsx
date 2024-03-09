'use client'
import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import SquareButton from '@/ui/button/SquareButton'
import { ConvertPrice } from '@/utils/convertPrice'
import Link from 'next/link'
import { FC } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
  const { isShow, setIsShow, ref } = useOutside(false)

  const { items, total } = useCart()

  // TO PLACE ORDER (NEEDS PAYMENT API)
  // const { reset } = useActions()

  // const { push } = useRouter()

  // const { mutate } = useMutation({
  //   mutationKey: ['create order and payment'],
  //   mutationFn: () => OrderService.place({
  //     items: items.map(item => ({
  //       price: item.price,
  //       quantity: item.quantity,
  //       productId: item.product.id
  //     })),
  //   }),
  //   onSuccess: ({ data }) => {
  //     reset()
  //     push(data.confirmation.confirmation_url)
  //   }
  // })

  return (
    <div className='relative' ref={ref}>
      <SquareButton
        Icon={RiShoppingCartLine}
        onClick={() => {
          setIsShow(!isShow)
        }}
        number={items.length}
      />

      {isShow && (
        <div className={styles.cartWrapper}>
          <div className='font-normal text-lg mb-5'>My Cart</div>

          <div className={styles.cart}>
            {items.length ? (
              items.map(item => <CartItem item={item} key={item.id}/>)
            ) : (
              <div className='font-light'>Cart is empty!</div>
            )}
            <div className={styles.footer}>
              <div>Total:</div>
              <div>{ConvertPrice(total)}</div>
            </div>
            {!!items.length && (
              <div className='text-center mt-7 mb-5'>
                <Link className='btn btn-white' href='/checkout'>
                  Go to checkout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart