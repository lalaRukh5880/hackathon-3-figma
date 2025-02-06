import { Food } from "@/types/foods"

export const getCartItems = () : Food[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}