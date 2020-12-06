import React from "react";
// async function getData() {
//     const url ="https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch";
//     const response = await fetch(url, {
//         method:"POST",
//         headers: new HashChangeEvent({Authorization:"Bearer tTU3gFVUdP"}),
//         body: {email:"mayankmittal@intugine.com"}
//     });
//     const data = await response.json();
//     console.log(data);
// }
//
// const scan = getData().scan;


const scan =[
    {
        "time": "2019-07-18 02:13:57",
        "location": "Consignment Out for Delivery",
        "status_detail": "OUT FOR DELIVERY"
    },
    {
        "time": "2019-07-17 23:02:24",
        "location": "Waybill Undelivered",
        "status_detail": "UN-DELIVERED"
    },
    {
        "time": "2019-07-17 03:59:19",
        "location": "Consignment Out for Delivery",
        "status_detail": "OUT FOR DELIVERY"
    },
    {
        "time": "2019-07-15 18:49:46",
        "location": "Waybill Undelivered",
        "status_detail": "UN-DELIVERED"
    },
    {
        "time": "2019-07-15 04:14:20",
        "location": "Consignment Out for Delivery",
        "status_detail": "OUT FOR DELIVERY"
    },
    {
        "time": "2019-07-13 20:41:28",
        "location": "Consignment Arrived at DELHI",
        "status_detail": "ARRIVED AT DESTINATION"
    },
    {
        "time": "2019-07-11 07:01:53",
        "location": "Consignment In Transit To Next Hub",
        "status_detail": "IN-TRANSIT"
    },
    {
        "time": "2019-07-11 03:05:26",
        "location": "Consignment Arrived at BANGALORE",
        "status_detail": "IN-TRANSIT"
    },
    {
        "time": "2019-07-11 00:00:00",
        "location": "Waybill Generated at WHITEFIELD",
        "status_detail": "BOOKED"
    }
]
export default scan;