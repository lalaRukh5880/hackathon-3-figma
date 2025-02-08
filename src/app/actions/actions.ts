import { Food } from "@/types/foods"

export const getCartItems = () : Food[] => {
    const cards =  JSON.parse(localStorage.getItem('carts') || '[]')
    console.log('cards =>>>>>>>>>>>>>>>: ', cards);
    return cards
}