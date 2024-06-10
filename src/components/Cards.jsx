import React from 'react'
import Card from './Card.jsx'
import { useState } from 'react';

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [liked, setLiked] = useState([]);

    let allCourses = [];
    
    if(category === 'All'){
        Object.values(courses).forEach((value) => {
            value.forEach((data) => {
                allCourses.push(data);
            })
        })
    }
    else {
        courses[category].forEach((value) => {
            allCourses.push(value);
        })
    }

    return (
        allCourses.map((value) => (
            <Card value = {value} key = {value.id} liked = {liked} setLiked = {setLiked}></Card>
        ))
    )
}

export default Cards