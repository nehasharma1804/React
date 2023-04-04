import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* 
Header 
Body
Footer
 */
/* Header
Logo
Nav items
 */

const Header = () => {
    return(


    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    )
    };
const resList= [
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "107089",
                "name": "Punjabi Affair",
                "uuid": "d5c50e27-eb56-416a-92fb-df8ae11d072e",
                "city": "3",
                "area": "Nanakramguda",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "yrrbcyedmbdo2s9vwrzs",
                "cuisines": [
                  "North Indian",
                  "Punjabi",
                  "Tandoor",
                  "Chinese"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 1.5,
                "slugs": {
                  "restaurant": "punjabi-affair-gachibowli-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Behind Q City Building, My Home Vihanga Main Road, Financial District, Hyderabad",
                "locality": "Vihanga Main Road",
                "parentId": 735,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "40% off",
                  "shortDescriptionList": [
                    {
                      "meta": "40% off | Use SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "40% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2700,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2700,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2700",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6324544~p=1~eid=00000187-4b24-34cc-03f9-5b370026016f",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "1.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "107089",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "lastMileTravel": 1.5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.9",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "218068",
                "name": "Mehfil",
                "uuid": "c9213116-1e89-4cb3-81a9-b11f2d838fd3",
                "city": "3",
                "area": "Gachibowli",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "rfngxpkeablm4ses3d0j",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Tandoor",
                  "Chinese",
                  "Kebabs"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 28,
                "minDeliveryTime": 28,
                "maxDeliveryTime": 28,
                "slaString": "28 MINS",
                "lastMileTravel": 3,
                "slugs": {
                  "restaurant": "mehfil-gachibowli-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "3rd Floor, 2-37/VN/140/A/ Sri Mallikarjuna Towers, Gachibowli Road, Vinayak Nagar, Indira Nagar,  Gachibowli",
                "locality": "Vinayak Nagar",
                "parentId": 637,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "10% off",
                  "shortDescriptionList": [
                    {
                      "meta": "10% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹40 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "10% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹40 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3500,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3500,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3500",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "3 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "218068",
                  "deliveryTime": 28,
                  "minDeliveryTime": 28,
                  "maxDeliveryTime": 28,
                  "lastMileTravel": 3,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.8",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "315029",
                "name": "Olio - The Wood Fired Pizzeria",
                "uuid": "5d180e30-98e3-4b08-aac8-ee232f8a3b9f",
                "city": "3",
                "area": "Gachibowli",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "jqyxaltmh21a7rstt8x1",
                "cuisines": [
                  "Pizzas",
                  "Beverages"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 53,
                "minDeliveryTime": 53,
                "maxDeliveryTime": 53,
                "slaString": "53 MINS",
                "lastMileTravel": 5.5,
                "slugs": {
                  "restaurant": "olio---the-wood-fired-pizzeria-kondapur-kondapur",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "2nd Floor, 2-91/12/6/2, 1st Survey No. 6, Above Mamma Mia Ice Cream and Ganesh Hot Chips, Whitefields, Kondapur, Telangana 500081",
                "locality": "Kondapur",
                "parentId": 11633,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "FLAT125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6381542~p=4~eid=00000187-4b24-34cc-03f9-5b3800260451",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "315029",
                  "deliveryTime": 53,
                  "minDeliveryTime": 53,
                  "maxDeliveryTime": 53,
                  "lastMileTravel": 5.5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "3.9",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "33040",
                "name": "Shah Ghouse Hotel & Restaurant",
                "uuid": "202db6b9-d595-449c-bd97-0610ca334157",
                "city": "3",
                "area": "Hitec City",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "hnx9nazpxdpqpypjo8ld",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Chinese",
                  "Mughlai",
                  "Tandoor"
                ],
                "tags": [],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 36,
                "minDeliveryTime": 36,
                "maxDeliveryTime": 36,
                "slaString": "36 MINS",
                "lastMileTravel": 5.800000190734863,
                "slugs": {
                  "restaurant": "shah-ghouse-hotel-restaurant-gachibowli-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Near Rai Durgam Police Station, Gachibowli Main Road, Gachibowli, Hyderabad",
                "locality": "Bio-Diversity Park",
                "parentId": 19271,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "20% off",
                  "shortDescriptionList": [
                    {
                      "meta": "20% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "20% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5.8 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "33040",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "lastMileTravel": 5.800000190734863,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "627394",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "uuid": "9f5da881-0c0a-4eca-9e17-7e6e3b5b2ca6",
                "city": "3",
                "area": "Manikonda",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "xkb0giahljzc6ewjfhbo",
                "cuisines": [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "slaString": "30 MINS",
                "lastMileTravel": 4.699999809265137,
                "slugs": {
                  "restaurant": "leon's---burgers-&-wings-(leon-grill)-manikonda-manikonda",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Survey No. 201, Ground Floor, Lobby of Block 2, Divyasree Techridge Lanco Hills Village, Manikonda, Gandipet, Rangareddi, Telangana - 500089",
                "locality": "Gandipet",
                "parentId": 371281,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3500,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3500,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3500",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6405611~p=7~eid=00000187-4b24-34cc-03f9-5b390026075a",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "4.6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "627394",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "lastMileTravel": 4.699999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.2",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "70891",
                "name": "Vasista's Sri Lakshmi",
                "uuid": "46869fcb-0908-4fbd-8465-c99d8880ea5e",
                "city": "3",
                "area": "Kondapur Main Road",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "x9xjymfjmmupziz6whzj",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Andhra",
                  "Chinese",
                  "Mughlai"
                ],
                "tags": [],
                "costForTwo": 35000,
                "costForTwoString": "₹350 FOR TWO",
                "deliveryTime": 40,
                "minDeliveryTime": 40,
                "maxDeliveryTime": 40,
                "slaString": "40 MINS",
                "lastMileTravel": 7.099999904632568,
                "slugs": {
                  "restaurant": "vasista-sri-lakshmi-kondapur-kondapur",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "1-55/12/M/1-A-5-B, Kondapur Main Road, Gautami Enclave, Kondapur, Hyderabad, Telangana 500084, India",
                "locality": "Kondapur Main Road",
                "parentId": 387872,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "30% off",
                  "shortDescriptionList": [
                    {
                      "meta": "30% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "30% off up to ₹75 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "30% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "30% off up to ₹75 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 6000,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 6000,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "6000",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "70891",
                  "deliveryTime": 40,
                  "minDeliveryTime": 40,
                  "maxDeliveryTime": 40,
                  "lastMileTravel": 7.099999904632568,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "328934",
                "name": "Raju Gari Biryani",
                "uuid": "ea21b5d5-e90a-4219-8407-06447491b729",
                "city": "3",
                "area": "Manikonda",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "ymiu9cp97z3tow0kknlv",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Snacks",
                  "Mughlai",
                  "Chinese"
                ],
                "tags": [],
                "costForTwo": 20000,
                "costForTwoString": "₹200 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 8,
                "slugs": {
                  "restaurant": "rajugaribiryani-manikonda-manikonda",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "483, OU Colony, Shaikpet, Hyderabad, Telangana 500008, India",
                "locality": "Manikonda",
                "parentId": 165947,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "FLAT125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "FLAT125 off | Use FLATDEAL",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 7600,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 7600,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "7600",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "8 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "328934",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "lastMileTravel": 8,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.7",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "1091",
                "name": "Hitech Bawarchi",
                "uuid": "d0fa83e4-2c2b-4c34-8766-2822321eb51a",
                "city": "3",
                "area": "Gachibowli",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "tgqctbhbkeij8qj6cwg0",
                "cuisines": [
                  "Biryani",
                  "Chinese",
                  "Indian",
                  "Kebabs",
                  "Tandoor"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 25,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 25,
                "slaString": "25 MINS",
                "lastMileTravel": 4.199999809265137,
                "slugs": {
                  "restaurant": "hitech-bawarchi-indiranagar-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "MIG 134 APHB colony Back side DLF, opp christ church, gachibowli hyd",
                "locality": "Indiranagar",
                "parentId": 465,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "50% off",
                  "shortDescriptionList": [
                    {
                      "meta": "50% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "50% off up to ₹100 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "50% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "50% off up to ₹100 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3500,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3500,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3500",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "4.1 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "1091",
                  "deliveryTime": 25,
                  "minDeliveryTime": 25,
                  "maxDeliveryTime": 25,
                  "lastMileTravel": 4.199999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.6",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "166493",
                "name": "Subbayya Gari Hotel",
                "uuid": "35138468-e6bd-418c-9b1c-1f1c7fb2bc6a",
                "city": "3",
                "area": "Hitec City",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "dyewhwljehwirmiy6i63",
                "cuisines": [
                  "South Indian",
                  "Andhra",
                  "Sweets"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 54,
                "minDeliveryTime": 54,
                "maxDeliveryTime": 54,
                "slaString": "54 MINS",
                "lastMileTravel": 5.5,
                "slugs": {
                  "restaurant": "subbayya-gari-hotel-kondapur",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Ektha Pearl, H.no 2-17/89/EP/101, First floor, Above RATNADEEP SUPER MARKET, Laxmi Cyber City, Whitefields, Kothaguda, Hyderabad, Telangana 500081",
                "locality": "Kondapur",
                "parentId": 12343,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "10% off",
                  "shortDescriptionList": [
                    {
                      "meta": "10% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹40 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "10% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "10% off up to ₹40 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "166493",
                  "deliveryTime": 54,
                  "minDeliveryTime": 54,
                  "maxDeliveryTime": 54,
                  "lastMileTravel": 5.5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.6",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "193589",
                "name": "LunchBox - Meals and Thalis",
                "uuid": "c58e585b-e5ad-41c7-8277-bac5c7bef63a",
                "city": "3",
                "area": "Nanakaramguda",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "kleiduaw3gqkff0zuu3y",
                "cuisines": [
                  "North Indian",
                  "Punjabi",
                  "Biryani",
                  "Healthy Food",
                  "Jain",
                  "Thalis",
                  "Indian",
                  "Mughlai",
                  "Desserts"
                ],
                "tags": [],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "slaString": "24 MINS",
                "lastMileTravel": 1.600000023841858,
                "slugs": {
                  "restaurant": "lunchbox-nanakramguda-nanakramguda",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "No 2-53/1/A Nanakramguda, 1st Floor, Near Hanuman Temple, Hyderabad, Telangana 500032",
                "locality": "Near Hanuman Temple",
                "parentId": 4925,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "30% off",
                  "shortDescriptionList": [
                    {
                      "meta": "30% off | Use SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "30% off up to ₹75 | Use code SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "30% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "30% off up to ₹75 | Use code SWIGGYIT",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2700,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2700,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2700",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6413158~p=13~eid=00000187-4b24-34cc-03f9-5b3b00260d5c",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "1.6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "193589",
                  "deliveryTime": 24,
                  "minDeliveryTime": 24,
                  "maxDeliveryTime": 24,
                  "lastMileTravel": 1.600000023841858,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.0",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "323233",
                "name": "Theth Masala",
                "uuid": "6a160ae3-df09-4096-942d-cd5d8e41d1d9",
                "city": "3",
                "area": "Lingampally",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "dukf62o0pqreg7wmks3h",
                "cuisines": [
                  "North Indian",
                  "Chinese",
                  "Continental"
                ],
                "tags": [],
                "costForTwo": 100000,
                "costForTwoString": "₹1000 FOR TWO",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "slaString": "29 MINS",
                "lastMileTravel": 5,
                "slugs": {
                  "restaurant": "theth-masala-lingampally-&-nalagandla-lingampally-&-nalagandla",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "11, ranganath colony, gopanpally thanda, Tellapur Rd, Gopanapalli, Hyderabad, Telangana 500019, India",
                "locality": "Lingampally",
                "parentId": 215688,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6388562~p=16~eid=00000187-4b24-34cc-03f9-5b3c0026107a",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "323233",
                  "deliveryTime": 29,
                  "minDeliveryTime": 29,
                  "maxDeliveryTime": 29,
                  "lastMileTravel": 5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "27447",
                "name": "Pista House Restaurant & Bakery\t",
                "uuid": "9c988bb5-a93a-44de-a47f-b4ccab64cc8b",
                "city": "3",
                "area": "Hitec City",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "v7btfi5brrsijry8j02n",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Chinese",
                  "Kebabs",
                  "Mughlai",
                  "Tandoor",
                  "Desserts"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 39,
                "minDeliveryTime": 39,
                "maxDeliveryTime": 39,
                "slaString": "39 MINS",
                "lastMileTravel": 5,
                "slugs": {
                  "restaurant": "pista-house-multicuisine-restaurant-kondapur-kondapur",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Plot: 7 Survey Number 6, Tirumala House, Beside Bata showroom, opposite Botanical Garden, Kondapur to Gachibowli road",
                "locality": "Kondapur",
                "parentId": 319765,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "40% off",
                  "shortDescriptionList": [
                    {
                      "meta": "40% off | Use GUILTFREE",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹100 | Use code GUILTFREE",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "40% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use GUILTFREE",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "40% off up to ₹100 | Use code GUILTFREE",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "27447",
                  "deliveryTime": 39,
                  "minDeliveryTime": 39,
                  "maxDeliveryTime": 39,
                  "lastMileTravel": 5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.0",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "243870",
                "name": "Kritunga Restaurant",
                "uuid": "7c8a0549-4f2d-4296-82d4-26b7964c36a4",
                "city": "3",
                "area": "Gachibowli",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "ebwsw7chqyxaqrgnuwav",
                "cuisines": [
                  "Biryani",
                  "Andhra",
                  "Rayalaseema",
                  "South Indian",
                  "North Indian",
                  "Chinese"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 5.900000095367432,
                "slugs": {
                  "restaurant": "kritunga-restaurant-gachibowli-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "VR Residency, Plot No. 69&70, lumbini avenue, opp My Home Bhooja, Gachibowli, Hyderabad",
                "locality": "Raidurgam",
                "parentId": 20088,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "20% off",
                  "shortDescriptionList": [
                    {
                      "meta": "20% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "20% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 4400,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 4400,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "4400",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "5.9 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "243870",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 5.900000095367432,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.6",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "436725",
                "name": "TIFFIN DEPOT",
                "uuid": "830ce245-36c0-4d15-9dfc-ae88cfc4ddc6",
                "city": "3",
                "area": "Nanakramguda",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "fundrz2tguru4dkbl8wn",
                "cuisines": [
                  "South Indian"
                ],
                "tags": [],
                "costForTwo": 50000,
                "costForTwoString": "₹500 FOR TWO",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "slaString": "19 MINS",
                "lastMileTravel": 1.7000000476837158,
                "slugs": {
                  "restaurant": "tiffin-depot-nanakramguda-nanakramguda",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "162/1,Q City Road, Gowlidoddy ,hyderabad, telangana",
                "locality": "Q City Road",
                "parentId": 313217,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2700,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2700,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2700",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6301180~p=19~eid=00000187-4b24-34cc-03f9-5b3d00261354",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "1.7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "436725",
                  "deliveryTime": 19,
                  "minDeliveryTime": 19,
                  "maxDeliveryTime": 19,
                  "lastMileTravel": 1.7000000476837158,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "5217",
                "name": "Paradise Biryani",
                "uuid": "55f31337-04ab-4396-8388-64849ececcfd",
                "city": "3",
                "area": "Gachibowli",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "rrvthxcob4ag3cdnrpz6",
                "cuisines": [
                  "Biryani",
                  "Kebabs",
                  "North Indian",
                  "Hyderabadi"
                ],
                "tags": [],
                "costForTwo": 40000,
                "costForTwoString": "₹400 FOR TWO",
                "deliveryTime": 31,
                "minDeliveryTime": 31,
                "maxDeliveryTime": 31,
                "slaString": "31 MINS",
                "lastMileTravel": 3.5,
                "slugs": {
                  "restaurant": "paradise-food-court-gachibowli",
                  "city": "hyderabad"
                },
                "cityState": "3",
                "address": "Plot 22-23, Vinayaknagar,Gachibowli Main Road, Gachibowli, Hyderabad",
                "locality": "Vinayaknagar",
                "parentId": 700,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [],
                "aggregatedDiscountInfo": {
                  "header": "20% off",
                  "shortDescriptionList": [
                    {
                      "meta": "20% off | Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "20% OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "20% off up to ₹50 | Use code TRYNEW",
                      "discountType": "Percentage",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3500,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3500,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3500",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [],
                  "textBased": [],
                  "textExtendedBadges": []
                },
                "lastMileTravelString": "3.5 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "5217",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "lastMileTravel": 3.5,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.5",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            }
        ]

        const resObj={
            "type": "restaurant",
            "data": {
              "type": "F",
              "id": "107089",
              "name": "Punjabi Affair",
              "uuid": "d5c50e27-eb56-416a-92fb-df8ae11d072e",
              "city": "3",
              "area": "Nanakramguda",
              "totalRatingsString": "10000+ ratings",
              "cloudinaryImageId": "yrrbcyedmbdo2s9vwrzs",
              "cuisines": [
                "North Indian",
                "Punjabi",
                "Tandoor",
                "Chinese"
              ],
              "tags": [],
              "costForTwo": 50000,
              "costForTwoString": "₹500 FOR TWO",
              "deliveryTime": 24,
              "minDeliveryTime": 24,
              "maxDeliveryTime": 24,
              "slaString": "24 MINS",
              "lastMileTravel": 1.5,
              "slugs": {
                "restaurant": "punjabi-affair-gachibowli-gachibowli",
                "city": "hyderabad"
              },
              "cityState": "3",
              "address": "Behind Q City Building, My Home Vihanga Main Road, Financial District, Hyderabad",
              "locality": "Vihanga Main Road",
              "parentId": 735,
              "unserviceable": false,
              "veg": false,
              "select": false,
              "favorite": false,
              "tradeCampaignHeaders": [],
              "aggregatedDiscountInfo": {
                "header": "40% off",
                "shortDescriptionList": [
                  {
                    "meta": "40% off | Use SWIGGYIT",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
              },
              "aggregatedDiscountInfoV2": {
                "header": "40% OFF",
                "shortDescriptionList": [
                  {
                    "meta": "Use SWIGGYIT",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "40% off up to ₹80 | Use code SWIGGYIT",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
              },
              "ribbon": [
                {
                  "type": "PROMOTED"
                }
              ],
              "chain": [],
              "feeDetails": {
                "fees": [
                  {
                    "name": "distance",
                    "fee": 2700,
                    "message": ""
                  },
                  {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                  },
                  {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                  }
                ],
                "totalFees": 2700,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2700",
                "icon": ""
              },
              "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
              },
              "longDistanceEnabled": 0,
              "rainMode": "NONE",
              "thirdPartyAddress": false,
              "thirdPartyVendor": "",
              "adTrackingID": "cid=6324544~p=1~eid=00000187-4b24-34cc-03f9-5b370026016f",
              "badges": {
                "imageBased": [],
                "textBased": [],
                "textExtendedBadges": []
              },
              "lastMileTravelString": "1.5 kms",
              "hasSurge": false,
              "sla": {
                "restaurantId": "107089",
                "deliveryTime": 24,
                "minDeliveryTime": 24,
                "maxDeliveryTime": 24,
                "lastMileTravel": 1.5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
              },
              "promoted": true,
              "avgRating": "3.9",
              "totalRatings": 10000,
              "new": false
            },
            "subtype": "basic"
          }
const RestaurantCard = (props) => {
  const { resList } = props;
  return (
    <div className="resCard">
      <img
        className="resImg"
        src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+resList.data.cloudinaryImageId}
      />
      <h3>{resList.data.name}</h3>
      <h4>{resList.data.cuisines}</h4>
      <h4>{resList.data.avgRating}</h4>
      <h4>{resList.data.costForTwo}</h4>
      <h4>{resList.data.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return(   
  <div className="body-container">
      <div className="res-container">
          {resList.map((resObj)=>{
 return <RestaurantCard key={resObj.data.id} resList={resObj}/>
          }
        )}
        
         
   
      </div>
    </div>
  
)};
const Layout = () => (
  <>
    <div className="app-container">
      <Header />
      <Body />
    </div>
  </>
);

/* 
Body
Restaurant container
Restaurant cards  */

root.render(<Layout />);
