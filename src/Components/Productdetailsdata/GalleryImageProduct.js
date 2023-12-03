import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Rating from 'react-rating-stars-component';
import { useDispatch, useSelector } from "react-redux"
import {PostCommenttoProduct} from '../../redux/actions/Comment';
import { useParams } from 'react-router-dom'
import {success} from '../../utility/Toast'
const GalleryImageProduct = ({ imageOne, imageTwo, imageThree, imageFour }) => {
    let user = {};
    if (localStorage.getItem('user')) {
        user = JSON.parse(localStorage.getItem('user'))
    }

    const [rateData, setRateData] = useState(0);
    const params = useParams();
    let img1 = ""
    let img2 = ""
    let img3 = ""
    let img4 = ""

    img1 = imageOne !== "" ? imageOne : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img2 = imageTwo !== "" ? imageTwo : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img3 = imageThree !== "" ? imageThree : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    img4 = imageFour !== "" ? imageFour : "https://lepgo-23.s3.eu-central-1.amazonaws.com/lepgo/images/products/1685888838_IMG-20230604-WA0001_out.jpg";

    const images = [
        {
            original: imageOne ? imageOne : imageOne,
            thumbnail: imageOne ? imageOne : imageOne,
        },
        {
            original: imageTwo ? imageTwo : imageOne,
            thumbnail: imageTwo ? imageTwo : imageOne,
        },
        {
            original: imageThree ? img3 : imageOne,
            thumbnail: imageThree ? img3 : imageOne,
        },
        {
            original: imageFour ? img4 : imageOne,
            thumbnail: imageFour ? img4 : imageOne,
        },
    ];

    const dispatch = useDispatch();
    const [commentData , setCommentData] = useState("")
    const [loading, setloading] = useState(true)

    console.log(rateData);
    console.log(commentData);
    console.log(params.id);
    
    const postCommentData = async(e)=>{
        setloading(true)
        await dispatch(PostCommenttoProduct({
            rate:rateData,
            comment:commentData,
            product_id:params.id
        }))
        setloading(false)
        success("تم رفع تعليقك")
        setTimeout(()=>{
            window.location.reload(`/product/${params.id}`)
        } , 500)
    }

    const comments = useSelector(state=>state.CommentReducer.posts)
    // if(comments){
    //     console.log(comments);
    // }
    return (
        <div>
            <div className='product-gallary-card' style={{ maxWidth: "100%", objectFit: "cover", maxHeight: "350px" }}>
                <ImageGallery items={images} style={{ maxHeight: "50px", objectFit: "cover" }} />
            </div>
            <div style={{ marginTop: "120px" , marginRight:"20px" }}>
                <p>اضف تعليق علي هذا المنتج</p>
                <div>
                    <div className='userDiv'>
                        <img className='userImage' src={user.image} alt="userImage" />
                        <span className='mx-2'>{user.name}</span>
                        <Rating
                            count={5} // number of stars
                            onChange={(newRating) => setRateData(newRating)}
                            size={24} // size of stars
                            color="#ffd700" // color of stars
                            activeColor="#fa923f" // color of selected stars
                        />
                        <textarea cols="30" rows="5" className='mt-3'value={commentData} placeholder='اكتب تعليقك علي هذا المنتج' onChange={(e)=>setCommentData(e.target.value)}></textarea>
                        <button className='btn commentBtn mt-3' onClick={postCommentData}>نشر التعليق</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImageProduct
