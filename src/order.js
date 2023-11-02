import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Card, Container, containerClasses } from '@mui/material';
export default function Order() {




    const [item, setitem] = useState([
        {
            id: "1",
            link: 'https://i.ibb.co/Lkqr08J/image-1.webp',
        },
        {
            id: "2",
            link: 'https://i.ibb.co/C5Q1xnt/image-2.webp',
        },
        {
            id: "3",
            link: 'https://i.ibb.co/30bDHnG/image-3.webp',
        },
        {
            id: "4",
            link: 'https://i.ibb.co/pJNqctj/image-4.webp',
        },
        {
            id: "5",
            link: 'https://i.ibb.co/Lhgm4mH/image-5.webp',
        },
        {
            id: "6",
            link: 'https://i.ibb.co/t3cJQfT/image-6.webp',
        },
        {
            id: "7",
            link: 'https://i.ibb.co/R48WXwJ/image-7.webp',
        },
        {
            id: "8",
            link: 'https://i.ibb.co/CnjbhVK/image-8.webp',
        },
        {
            id: "9",
            link: 'https://i.ibb.co/Br7kcgF/image-9.webp',
        },
        {
            id: "10",
            link: 'https://i.ibb.co/3sT2M0y/image-10.jpg',
        },
        {
            id: "11",
            link: 'https://i.ibb.co/Sx9P5fx/image-11.jpg',
        },
    ]

       
    )

    const dragitem = useRef(0)
    const draggedOveritem = useRef(0)

    function handleSort() {
        const itemClone = [...item]
        const temp = itemClone[dragitem.current]
        itemClone[dragitem.current] = itemClone[draggedOveritem.current]
        itemClone[draggedOveritem.current] = temp
        setitem(itemClone)
    }

    return (
        <Container>
            <h1 >List</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>




                {item.map((item, index) => (
                    <div
                        draggable
                        onDragStart={() => (dragitem.current = index)}
                        onDragEnter={() => (draggedOveritem.current = index)}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                    >
                        
                            <Card variant="outlined" style={{ padding: 10, margin: 10 }}>
                                <p>{item.id}</p>

                                <img style={{ width: 150 }} src={item.link}></img>
                            </Card>
                       
                        



                    </div>
                ))}
            </Grid>

        </Container>
    )
}