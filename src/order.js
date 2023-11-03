import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Card, Checkbox, Container, containerClasses } from '@mui/material';
export default function Order() {



    const [deleteList, setDeleteList] = useState([]);
    const [item, setitem] = useState([
        {
            id: "0",
            link: 'https://i.ibb.co/Lkqr08J/image-1.webp',
            mark: false
        },
        {
            id: "1",
            link: 'https://i.ibb.co/C5Q1xnt/image-2.webp',
            mark: false
        },
        {
            id: "2",
            link: 'https://i.ibb.co/30bDHnG/image-3.webp',
            mark: false
        },
        {
            id: "3",
            link: 'https://i.ibb.co/pJNqctj/image-4.webp',
            mark: false
        },
        {
            id: "4",
            link: 'https://i.ibb.co/Lhgm4mH/image-5.webp',
            mark: false
        },
        {
            id: "5",
            link: 'https://i.ibb.co/t3cJQfT/image-6.webp',
            mark: false
        },
        {
            id: "6",
            link: 'https://i.ibb.co/R48WXwJ/image-7.webp',
            mark: false
        },
        {
            id: "7",
            link: 'https://i.ibb.co/CnjbhVK/image-8.webp',
            mark: false
        },
        {
            id: "8",
            link: 'https://i.ibb.co/Br7kcgF/image-9.webp',
            mark: false
        },
        {
            id: "9",
            link: 'https://i.ibb.co/3sT2M0y/image-10.jpg',
            mark: false
        },
        {
            id: "10",
            link: 'https://i.ibb.co/Sx9P5fx/image-11.jpg',
            mark: false
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
    function handleChange(id) {
        const itemClone = [...item]
        if (itemClone[id].mark == false) {
            const marked = [...deleteList, id];
            setDeleteList(marked);
            itemClone[id].mark = true;
        }
        else{
            const newList = deleteList.filter((item) => item != id);
            setDeleteList(newList);
            itemClone[id].mark = false;
        }







    }

    console.log(deleteList);
    return (
        <Container>
            <h1 >List</h1>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>




                {item.map((item, index) => (
                    <Grid item xs={4}
                        draggable
                        onDragStart={() => (dragitem.current = index)}
                        onDragEnter={() => (draggedOveritem.current = index)}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                    >

                        {index == 0 &&

                            <Card variant="outlined" style={{ padding: 10, margin: 10 }}>
                                 <Checkbox checked={item.mark} onChange={() => handleChange(item.id)} />
                                <p>{item.id}</p>

                                <img style={{ width: 300 }} src={item.link}></img>
                            </Card>

                            ||

                            <Card variant="outlined" style={{ padding: 10, margin: 10 }}>
                                <Checkbox checked={item.mark} onChange={() => handleChange(item.id)} />
                                <p>{item.id}</p>
                                <img style={{ width: 150 }} src={item.link}></img>
                            </Card>

                        }
                    </Grid>

                ))}
            </Grid>

        </Container>
    )
}