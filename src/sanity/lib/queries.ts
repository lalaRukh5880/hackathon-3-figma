import { defineQuery } from "next-sanity";

export const allchefs = defineQuery(`
    *[_type == "chef"] {
    _id,
    name,
    position,
    experience,
    specialty,
    "imageUrl": image.asset->url
    } `)

    export const allfoods = defineQuery(`
        *[_type == "food"] {
        _id,
        name,
        category,
        price,
        original price,
        tags,
        "imageUrl": image.asset->url
        } `)
    
    