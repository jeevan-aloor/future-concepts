import React, { useEffect, useState } from 'react'
import './country.css'
import ScrollAnimation from 'react-animate-on-scroll'
import 'animate.css'

function CountrySearch() {
    const [word, setWord] = useState("")
    const [countryData, setData] = useState([])
    const [time, setdelay] = useState(500)
    // const [hover, setHover] = useState(false);



    function searchinput(e) {
        setWord(e.target.value)

        debounce(getData, time)



    }
    // console.log(word)

    let style1 = {
        // border: "1px solid red",
        width: "200px",
        height: "50px",
        margin: 'auto',
        marginBottom: "10px",
        textAlign: "left",
        paddingTop: "2px",
        color:"white",
        // cursor: "pointer",
        "&:hover": {
            background: "red"
        },
        // backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)'
    }

    let style2 = {
        width: "300px",
        height: "30px",
        border: "none",
        borderBottomColor: "black",
        borderBottom: "2px solid red",
        marginBottom: "20px",
        marginTop: "30px",
        fontSize: "20px",
    }
    let style3 = {
        boxShadow: "rgb(255, 196, 71) 0px 7px 29px 0px",
        width: "300px",
        margin: 'auto',
        overflow: 'hidden',
        height: "280px"
    }



    async function getData() {
        let res = await fetch('https://countries-info-zw6g.onrender.com/countries')
        // console.log("res", res)
        let data = await res.json()
        if (word) {
            let words = word.toLowerCase()
            data = data.filter(item => {
                let country = item.country.toLowerCase()
                return country.includes(words)


            })
        }

        setData(data)
        // console.log(data)
    }

    function debounce(func, delay) {

        setTimeout(() => {
            func()

        })

    }



    useEffect(() => {
        // getData()

    }, [])


    return (
        <div>
            <h1 style={{color:"red"}}  className='animate__animated animate__zoomInDown'>hello dear</h1>
            <ScrollAnimation animateIn="fadeOut" >
  <h1 style={{color:"white"}}>Some Text</h1>
</ScrollAnimation>
            <input placeholder="search cities here" onChange={searchinput} style={style2} />
            <div style={style3}>
            {/* <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutLeft'> */}
                {
                    (countryData.length > 0 && countryData.length < 40) && countryData.map((ele) => (
                        

                        <div key={ele.city} style={style1} id="countrydiv"  >
                           
                            <h1  style={{ fontSize: '15px',color:'whitesmoke' }}>{ele.country}</h1>
                           
                        </div>
                       
                    ))

                }
                 {/* </ScrollAnimation> */}
            </div>


        </div>
    )
}

export default CountrySearch
