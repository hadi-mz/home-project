import { createStore } from "redux";

const initialState = {
    itemIdCounter: 9, // Initialize the itemIdCounter state with a starting value
    products: [



        {
            featureImage: "https://www.propertyturkey.com/uploads/realestate/5382/thumb/belek_villa_1-300x200.jpeg",
            images: [
                "https://www.propertyturkey.com/uploads/realestate/5382/thumb/belek_villa_2-300x200.jpeg",
                "https://www.propertyturkey.com/uploads/realestate/5382/thumb/belek_villa_9-300x200.jpg",
                "https://www.propertyturkey.com/uploads/realestate/5382/thumb/belek_villa_7-300x200.jpg"
            ],
            id: 1,
            title: "villa",
            price: 17000000,
            Condition: "Sale",
            score: 4.2,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 120,
            YearOfConstruction: 7,
            Bathrooms: 1,
            Bedrooms: 3,
            Location: "Tokyo,Japan",
            Comments: [
                "It is in a very good neighborhood and has good people",
                "It is close to shopping centers. I visited this house 2 miles ago",
                "It is excellent for its price"
            ]
        },

        {
            featureImage: "https://do2sycafu5aw8.cloudfront.net/2120000/h2120303/y436/h2120303_3.jpg",
            images: [
                "https://do2sycafu5aw8.cloudfront.net/2120000/h2120303/y436/h2120303_5.jpg",
                "https://do2sycafu5aw8.cloudfront.net/2120000/h2120303/y436/h2120303_6.jpg",
                "https://do2sycafu5aw8.cloudfront.net/2120000/h2120303/y436/h2120303_7.jpg"
            ],
            id: 2,
            title: "Villa",
            price: 23000000,
            Condition: "Sale",
            score: 4.5,
            ratings: 74,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 210,
            YearOfConstruction: 3,
            Bathrooms: 2,
            Bedrooms: 4,
            Location: "Turckye,Stanbol,laleKend",
            Comments: [
                "this Villa very great",
                "This house is very excellent and well planned, I like it",
                "It is excellent for its price"
            ]
        },
        {
            featureImage: "https://assets.savills.com/properties/GRSAVLF1710/image_1_l_lis.jpg",
            images: [
                "https://assets.savills.com/properties/GRSAVLF1710/image_4_l_gal.jpg",
                "https://assets.savills.com/properties/GRSAVLF1710/image_5_l_gal.jpg",
                "https://assets.savills.com/properties/GRSAVLF1710/image_7_l_gal.jpg"
            ],
            id: 3,
            title: "villa",
            price: 3000000,
            Condition: "sale",
            score: 4.9,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 320,
            YearOfConstruction: 7,
            Bathrooms: 2,
            Bedrooms: 6,
            Location: "Stefania,Tsokali",
            Comments: [
                "It is in a very good neighborhood and has good people",
                "It is close to shopping centers. I visited this house 2 miles ago",
                "It is excellent for its price"
            ]
        },
        {
            featureImage: "https://res.cloudinary.com/gridky/image/upload/c_limit,w_1080/f_auto,fl_lossy/v1/medias/fd7d0c1d46ebded42c6c6abf50e47fb0?_a=BAAARODQ",
            images: [
                "https://res.cloudinary.com/gridky/image/upload/c_limit,w_1080/f_auto,fl_lossy/v1/medias/285ddc9cae4933bb172eb2d5c6e7c23d?_a=BAAARODQ",
                "https://res.cloudinary.com/gridky/image/upload/c_limit,w_1080/f_auto,fl_lossy/v1/medias/8ce88747b4ae39f0ef33fd62043c3f4c?_a=BAAARODQ",
                "https://res.cloudinary.com/gridky/image/upload/c_limit,w_1080/f_auto,fl_lossy/v1/medias/69c9406863a2c2a4d8dc5a6cc9d2737a?_a=BAAARODQ"
            ],
            id: 4,
            title: "Apartment",
            price: 4300000,
            Condition: "mortgage",
            score: 4.4,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 220,
            YearOfConstruction: 7,
            Bathrooms: 2,
            Bedrooms: 6,
            Location: "Turnkey,pied-à-terre",
            Comments: [
                "It is in a very good neighborhood and has good people",
                "It is close to shopping centers. I visited this house 2 miles ago",
                "It is excellent for its price"
            ]
        },
        {
            featureImage: "https://images1.apartments.com/i2/L1SGZYGKpUObe6I4yeMgxk76MUrEL22Y5E0dgYor4FE/112/envy-by-gomes-newark-nj-primary-photo.jpg?p=1",
            images: [
                "https://a0.muscache.com/im/pictures/miso/Hosting-1006800478452951559/original/1303edef-aa8d-471d-9b4e-aef9baeb2cb5.png?im_w=720",
                "https://a0.muscache.com/im/pictures/miso/Hosting-1006800478452951559/original/0ad3bc0a-2ff5-4915-b963-7af0e660698c.png?im_w=1440",
                "https://a0.muscache.com/im/pictures/miso/Hosting-1006800478452951559/original/1dd423e2-fa26-4c33-b4ea-0f4d1a02e6d1.png?im_w=1440"
            ],
            id: 5,
            title: "apartment",
            price: 77000000,
            Condition: "Rent",
            score: 4.7,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 190,
            YearOfConstruction: 1,
            Bathrooms: 2,
            Bedrooms: 4,
            Location: "america,newYork",
            Comments: [
                "It is in a very good neighborhood and has good people",
                "It is close to shopping centers. I visited this house 2 miles ago",
                "It is excellent for its price"
            ]
        },
        {
            featureImage: "https://images.trvl-media.com/lodging/35000000/34020000/34019300/34019237/43d4bb57.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            images: [
                "https://images.trvl-media.com/lodging/35000000/34020000/34019300/34019237/6b301e5d.jpg?impolicy=resizecrop&rw=1200&ra=fit",
                "https://images.trvl-media.com/lodging/35000000/34020000/34019300/34019237/d3ff70a4.jpg?impolicy=resizecrop&rw=1200&ra=fit",
                "https://images.trvl-media.com/lodging/35000000/34020000/34019300/34019237/0614e1d9.jpg?impolicy=resizecrop&rw=1200&ra=fit"
            ],
            id: 6,
            title: "villa",
            price: 54000000,
            Condition: "Sale",
            score: 5,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 490,
            YearOfConstruction: 1,
            Bathrooms: 4,
            Bedrooms: 8,
            Location: "Canada,States",
            Comments: [
                "Extra-person charges may apply and vary depending on property policy",
                "Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges",
                "Onsite parties or group events are strictly prohibited"
            ]
        },
        {
            featureImage: "https://images1.apartments.com/i2/yRl7hRkggYn4KOoFrm8DWviNsFgCgt_45rG4Bk1pORY/111/balliol-park-toronto-on-primary-photo.jpg?p=1",
            images: [
                "https://images1.apartments.com/i2/VIP8rjnyU4RnoUfO8cRBUiQK41OVhfxv1H2CrwZBqgQ/117/balliol-park-toronto-on-building-photo.jpg?p=1",
                "https://images1.apartments.com/i2/bhSnJ6q4ihi8CIFFZZ7VV8AqwNEYpkqijMtal9VNGg0/117/balliol-park-toronto-on-building-photo.jpg?p=1",
                "https://images1.apartments.com/i2/GN7lLAwb0DLlQ1vFI5zafe03lTHSOYSgNW7jkn5prwk/117/balliol-park-toronto-on-building-photo.jpg?p=1"
            ],
            id: 7,
            title: "apartment",
            price: 22000000,
            Condition: "Rent",
            score: 4.9,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 340,
            YearOfConstruction: 2,
            Bathrooms: 3,
            Bedrooms: 4,
            Location: "Canada,Torento",
            Comments: [
                "It is in a very good neighborhood and has good people",
                "It is close to shopping centers. I visited this house 2 miles ago",
                "It is excellent for its price"
            ]
        },
        
        {
            featureImage: "https://images1.apartments.com/i2/_m11cMcxPonqPrnsjF2Cr5jKb_biRV-wtUB2VVDomGU/111/587-avenue-rd-toronto-on-primary-photo.jpg?p=1",
            images: [
                "https://images1.apartments.com/i2/gMPR7sotTtUtGj6W2s5C52sMkTenaZcVlXjzsVL5sw4/117/587-avenue-rd-toronto-on-laundry.jpg?p=1",
                "https://images1.apartments.com/i2/wroPWqCr-HuVQ3DjfZQaTNCW4nx8Js_pGkyd1fgXofM/117/587-avenue-rd-toronto-on-1-bdrm.jpg?p=1",
                "https://images1.apartments.com/i2/ta7y3PdDEFMZo2nN-IyAVyx1ITgfB0raH5RqhLbDlcE/117/587-avenue-rd-toronto-on-1-bdrm.jpg?p=1"
            ],
            id: 8,
            title: "apartment",
            price: 2000000,
            Condition: "Sale",
            score: 4.1,
            ratings: 74,
            brief: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            MT: 110,
            YearOfConstruction: 1,
            Bathrooms: 1,
            Bedrooms: 2,
            Location: "iran,tehran,frshte",
            Comments: [
                "this Villa very great",
                "This house is very excellent and well planned, I like it",
                "It is excellent for its price"
            ]
        },
    ]
}




const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        const newItem = {
          id: state.itemIdCounter,
          // Add other properties based on the form data
        };
        return {
          ...state,
          products: [...state.products, newItem],
          itemIdCounter: state.itemIdCounter + 1
        };
      default:
        return state;
    }
  };
  
 
const store = createStore(reducer);

export default store;










































