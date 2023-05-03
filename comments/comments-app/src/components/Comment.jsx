import React, { useState } from 'react'
import { Box, Accordion, AccordionButton, AccordionPanel, AccordionItem, AccordionIcon,Text } from '@chakra-ui/react'
// import { AccordionIcon } from '@chakra-ui/icons'

function Comment() {
    const [userComment, setComment] = useState([{
        id: "001",
        author: "albert",
        body: "Whats the status?",
        timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
        points: "2",
        replies: [
            {
                id: "003",
                author: "haren",
                body: "Wrote the test suites, waiting for approval?",
                timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
                points: "3",
                replies: [
                    {
                        id: "004",
                        author: "albert",
                        body: "Thanks for the update!",
                        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                        points: "8"
                    }
                ]
            },
            {
                id: "002",
                author: "Nrupul",
                body: "looking forward for the demo!",
                timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
                points: "2",
                replies: [
                    {
                        id: "004",
                        author: "albert",
                        body: "Thats Great !",
                        timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                        points: "8"
                    }
                ]

            }
        ]
    }
    ])
    return (
        <div>
            {userComment.map((ele) => (
                <div style={{ border: "1px solid red", backgroundColor: "#242424" }}>
                    <p style={{ color: "#b5e48c" }}>{`${ele.author} ${ele.points} points 23 minutes ago`}</p>
                    <Text  color="#FFFFFF" fontSize="30px">{ele.body}</Text>
                    <h4 style={{ color: "#e7c6ff" }}>Reply  Give    Award   Share   Report  Save</h4>
                    <h4><Accordion allowToggle border="none"   >
                        <AccordionItem>
                            <h2>
                                <AccordionButton w="100px" bg="red" _hover="none">
                                    <Box as="span" flex='1' textAlign='left'>
                                        Reply
        </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {ele.replies.map((item) => (
                                    <div style={{ marginLeft: "100px" }}>
                                        <p style={{ color: "#b5e48c" }}>{item.author} {item.points} points 19 minutes ago</p>
                                        <Text style={{ color: "#FFFFFF" }} fontSize="23px">{item.body}</Text>
                                        <h4 style={{ color: "#e7c6ff" }}>Reply Give Award Share Report Save</h4>
                                        <div style={{ marginLeft: "100px" }}>
                                            {/* {ele.replies[0].replies.author} */}
                                            <Accordion allowToggle  border="none"  >
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton w="100px" bg="red" _hover="none">
                                                            <Box as="span" flex='1' textAlign='left' >
                                                                Reply
        </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        {item.replies.map((val) => (
                                                            <div>
                                                                <p style={{ color: "#b5e48c" }}>{val.author} {val.points}  points 16 minutes ago</p>
                                                                <Text color="#FFFFFF" fontSize="20px">{val.body}</Text>
                                                                <h4 style={{ color: "#e7c6ff" }}>Reply  Give  Award  Share  Report  Save</h4>
                                                            </div>

                                                        ))}

                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>



                                        </div>


                                    </div>

                                ))
                                }

                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>

                    </h4>


                </div>

            ))}
            {/* <Accordion allowToggle   >
                <AccordionItem>
                    <h2>
                        <AccordionButton w="200px">
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
        </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion> */}

        </div>
    )
}

export default Comment
