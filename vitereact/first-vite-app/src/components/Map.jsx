import React, { useState } from 'react'

function Map() {
    const [place, setPlace] = useState([
        {
            name: "Kundapura Beach",
            ratingno: "4.0",
            ratingimage: "https://t3.ftcdn.net/jpg/04/20/03/48/240_F_420034841_AKpgqQGkkUyeD7oWc9y8vGTMwT4GmbHm.jpg",
            address: "Near kundapura name called kodi",
            position: "opened"
        },
        {
            name: "Sea Land",
            ratingno: "4.5",
            ratingimage: "https://t4.ftcdn.net/jpg/02/74/86/39/240_F_274863915_4JnfDXwTaTsjg5w5e7keElOipBswjAte.jpg",
            address: "Located in Maravante Beach it is A bar serve near Beach ",
            position: "opened"
        }, {
            name: "Marvante Beach",
            ratingno: "5.0",
            ratingimage: "https://t3.ftcdn.net/jpg/04/19/83/52/240_F_419835276_5YVsWliq1nNWZWv2jr40Z7DuhR2C9Gs5.jpg",
            address: "Beach Located in Kundapura taluk village Called Maravante",
            position: "opened"
        }, {
            name: "Jeevan Aloor",
            ratingno: "5.0",
            ratingimage: "https://t3.ftcdn.net/jpg/04/19/83/52/240_F_419835276_5YVsWliq1nNWZWv2jr40Z7DuhR2C9Gs5.jpg",
            address: "One of the Famous place in Kundapura Taluk ",
            position: "opened"
        }
    ])
    const [city, setCity] = useState("kundapura")
    const [source, setSoure] = useState(`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)



    function Add() {
        setSoure(`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`)

    }

    return (
        <>
            <input placeholder="ENTER CITY" style={{ width: "300px", height: "30px", marginBottom: "30px" }} onChange={(e) => setCity(e.target.value)} />
            <button onClick={Add} style={{ height: "30px", marginLeft: "20px", backgroundColor: "pink" }}>SEARCH</button>
            <div >

                <iframe src={source} frameborder="10" width="900" height="500"  ></iframe>
                {
                    place.map((ele) => (
                        <div style={{ width: "600px", margin: "auto", borderBottom: "1px solid grey" }}>
                            <h2>{ele.name}</h2>
                            <div style={{ display: "flex", gap: "20px", textAlign: "center", paddingLeft: "220px" }}>
                                <h3>{ele.ratingno}</h3>
                                <img src={ele.ratingimage} alt="rate" style={{ width: "100px", height: "40px" }} />
                            </div>
                            <h3>{ele.address}</h3>
                            <p style={{ color: "red" }}>{ele.position}</p>
                        </div>
                    ))
                }



            </div>
        </>
    )
}

export default Map
