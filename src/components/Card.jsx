import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

const Card = (props) => {
    let value = props.value;
    let liked = props.liked;
    let setLiked = props.setLiked;

    function updateLiked(id){
        console.log(liked);
        if(liked.includes(id)){
            setLiked((prev) => {
                if(prev.length === 1){
                    return [];
                }
                prev.filter((value) => (value !== id));
            })
            toast.warning('Like Removed');
        }
        else{
            if(liked.length === 0){
                setLiked([id]);
            }
            else{
                setLiked((prev) => [...prev, id]);
            }
            toast.success('Like Added');
        }
    }

    return (
        <div className="card">
            <div className="image">
                <img src={value.image.url} alt={value.image.alt} />
            <div className="icon" onClick = {() => {
                updateLiked(value.id);
            }}>
                {liked.includes(value.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)}
            </div>
            </div>

            <div className="info">
                <div className="title">{value.title}</div>

                <div className="desc">{
                (value.description.length > 100) ? (value.description.substring(0, 200) + '...') : (value.description)
                }</div>
            </div>
        </div>
    )
}

export default Card