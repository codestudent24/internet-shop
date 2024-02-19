import { instance } from '@/api/api.interceptor'
import { IPaymentResponse } from '@/types/payment.interface'

const PAYMENT = 'payment'

export const ReviewService = {
  async createPayment(amount: number) {
    return instance.post<IPaymentResponse>(PAYMENT, {
      amount
    })
  },
}

export default ReviewService