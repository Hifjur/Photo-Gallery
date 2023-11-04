import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import {  Button, Card, CardActionArea, Checkbox, Container } from '@mui/material';

export default function Order() {


//State management
    const [deleteList, setDeleteList] = useState([]);
    const [item, setitem] = useState([
        {
            id: 0,
            link: 'https://i.ibb.co/Lkqr08J/image-1.webp',
            mark: false
        },
        {
            id: 1,
            link: 'https://i.ibb.co/C5Q1xnt/image-2.webp',
            mark: false
        },
        {
            id: 2,
            link: 'https://i.ibb.co/30bDHnG/image-3.webp',
            mark: false
        },
        {
            id: 3,
            link: 'https://i.ibb.co/pJNqctj/image-4.webp',
            mark: false
        },
        {
            id: 4,
            link: 'https://i.ibb.co/Lhgm4mH/image-5.webp',
            mark: false
        },
        {
            id: 5,
            link: 'https://i.ibb.co/t3cJQfT/image-6.webp',
            mark: false
        },
        {
            id: 6,
            link: 'https://i.ibb.co/R48WXwJ/image-7.webp',
            mark: false
        },
        {
            id: 7,
            link: 'https://i.ibb.co/CnjbhVK/image-8.webp',
            mark: false
        },
        {
            id: 8,
            link: 'https://i.ibb.co/Br7kcgF/image-9.webp',
            mark: false
        },
        {
            id: 9,
            link: 'https://i.ibb.co/3sT2M0y/image-10.jpg',
            mark: false
        },
        {
            id: 10,
            link: 'https://i.ibb.co/Sx9P5fx/image-11.jpg',
            mark: false
        },
    ]


    )

    const dragitem = useRef(0)
    const draggedOveritem = useRef(0)

// Functions 
    function handleSort() {
        const itemClone = [...item];
        const temp = itemClone[dragitem.current];
        itemClone[dragitem.current] = itemClone[draggedOveritem.current] // Swapping current item with dragged over item
        itemClone[draggedOveritem.current] = temp ;
        // console.log("Seleted object",itemClone[dragitem.current].id);
        // console.log("Hover over object",itemClone[draggedOveritem.current].id);
        itemClone[dragitem.current].id = dragitem.current; // Changing #id of the moved item to match dom index
        itemClone[draggedOveritem.current].id = draggedOveritem.current;
        // console.log(itemClone)
        setitem(itemClone);
    }
    function handleChange(id) { //changes in check mark adds and deletes the item from the delete items list
        const itemClone = [...item]
        if (itemClone[id].mark == false) { // adding itmes to the delete items list
            const marked = [...deleteList, id];
            setDeleteList(marked);
            itemClone[id].mark = true;
        }
        else {
            const newList = deleteList.filter((item) => item != id); // filtering unchecked itmes from the delete items list 
            setDeleteList(newList);
            itemClone[id].mark = false;
        }
    }
    function deleteItem() { // Delete fucntion to delete the selected images
        const newList = item.filter(value => !deleteList.includes(value.id)); //deleting the selected itmes from the DOM
        console.log(newList);
        for (let i = 0; i < newList.length; i++) // Loop to match the id number to the index number and prevent it from crashing beucase of invalid id
        {
            newList[i].id = i;
        }
        setitem(newList);
        setDeleteList([]);

    }
//console.log(item)
//JSX 
    return (
        <Container>
            <h1 style={{ textAlign: 'start' }}>GALLERY</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid item xs={6}>
                    <p style={{ fontSize: 25, padding: 10, border: "solid", borderRadius:5 }}>{deleteList.length} Files Selected </p>
                </Grid>
                <Grid item xs={6}>
                    <Button style={{ textAlign: 'end', backgroundColor: "red", color: "white", marginTop: 45 }} variant="contained" onClick={deleteItem}>Delete</Button>
                </Grid>

            </Grid>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                {item.map((item, index) => (
                    <div 
                        draggable
                        onDragStart={() => (dragitem.current = index)}
                        onDragEnter={() => (draggedOveritem.current = index)}
                        onDragEnd={handleSort}
                        onDragOver={(e) => e.preventDefault()}
                        
                    >

                        {index == 0 &&
                            <Grid item xs={12}>
                                <CardActionArea>
                                <Card variant="outlined" style={{ padding: 10, margin: 10, border: "solid gray"}}>
                                    <Checkbox checked={item.mark} onChange={() => handleChange(item.id)} />
                                    <img style={{ width: 300 }} src={item.link}></img>
                                </Card>
                                </CardActionArea>
                            </Grid>
                            ||
                            <Grid item xs={12}>
                                <CardActionArea>
                                <Card variant="outlined" style={{ padding: 10, margin: 10 }}>
                                    <Checkbox checked={item.mark} onChange={() => handleChange(item.id)} />
                                    <img style={{ width: 200 }} src={item.link}></img>
                                </Card>
                                </CardActionArea>
                            </Grid>
                        }
                    </div>

                ))}
            </Grid>

        </Container >
    )
}