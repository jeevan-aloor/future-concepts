import React, { useState, useEffect } from 'react'

function Vedio() {
    const [values, setValues] = useState("")
    const [valuespass, setValuespass] = useState("")
    const [useData, setData] = useState([])

    const buttonSubmit = () => {
        let data = {
            email: values,
            password: valuespass
        }
        if (values.length >= 4) {
            // setData([...useData, data])
        } else {
            alert("please put more than 4 char")
        }
    }
    // console.log(useData)


    async function getData() {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let data = await res.json()
        console.log(data)
        setData(data)

    }

    useEffect(() => {
        getData()

    },[])


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder="enter email" value={values} onChange={(e) => setValues(e.target.value)} />
                <input placeholder="enter password" onChange={(e) => { setValuespass(e.target.value) }} />
                <input type="submit" onClick={buttonSubmit} />
            </form>

            <input type="date" min="2022-03-29" />
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>

                </tr>
                {
                    useData.length > 0 && useData.map((ele) => {
                       return(<tr>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                        </tr>)
                    })
                }

            </table>


        </div>
    )
}

export default Vedio
