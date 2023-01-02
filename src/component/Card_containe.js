import React from 'react'
import Cards1 from './Cards1'

export const Card_containe = () => {
    const heading=[
        {
            img1:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_40_400x.jpg?v=1571838231',
            text1:'STRAWBERRY (PER PACKET - 200 GRAMS)',

            img2:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/71vE_BS0_nL._SL1200_400x.jpg?v=1602658245',
            text2:'KASHMIRI APPLE (PER 4 PIECES) 1/2kg APPLE',

            img3:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_31-removebg-preview_400x.png?v=1643137849',
            text3:'IMPORTED BLUEBERRY (PER PACKET - 125 GRAMS)',

            img4:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/shop-online-from-india-fruits-anar-pomegranate-fresh-food-in-dubai-and-abu-dhabi-24621151886_1200x1200_a96f9476-ce73-4b3c-a618-9aa5726e0e54_1_400x.jpg?v=1643138211',
            text4:'INDIAN POMEGRANATE (PER 2 PCS 450-500 GRAMS)'
        },
        {
            img1:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/asset_2_400x.jpg?v=1571839043',
            text1:'BANANA (PER KG) and (PER 1/2KG) 100 G FREE',

            img2:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/5c6545b60e5aa_400x_ffb4b612-7b53-42b3-a970-22e8094661df_400x.jpg?v=1643137569',
            text2:'INDIAN ORANGE - NEW SEASON (PER 500 GRAMS)',

            img3:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/Apples_Golden_Delicious_Hero_400x.jpg?v=1606827130',
            text3:'APPLE GOLDEN (PER 4 PIECES) NEW SEASON (PER 500 GRAMS)',

            img4:'https://cdn.shopify.com/s/files/1/0258/4307/3103/products/image_400x.jpg?v=1607579884',
            text4:'RED DELICIOUS APPLE (PER 4 PIECES) FREES AND SWEETS'
        },
        // second card saathi aahe.
    ]
  return (
    <div>
        <Cards1 img1={heading[0].img1}
        text1={heading[0].text1}

        img2={heading[0].img2}
        text2={heading[0].text2}

        img3={heading[0].img3}
        text3={heading[0].text3}

        img4={heading[0].img4}
        text4={heading[0].text4}

        Card_Heading1='DAILY FRUITS'
        />

<Cards1 img1={heading[1].img1}
        text1={heading[1].text1}

        img2={heading[1].img2}
        text2={heading[1].text2}

        img3={heading[1].img3}
        text3={heading[1].text3}

        img4={heading[1].img4}
        text4={heading[1].text4}

        // Card_Heading1='DAILY FRUITS'
        />
    </div>
  )
}
