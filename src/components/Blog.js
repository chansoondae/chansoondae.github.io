import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = ({rawData}) => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [tag, setTag] = useState('');
    const [reusable, setReusable] = useState('');
    const [category, setCategory] = useState('');
    const [method, setMethod] = useState('');
    const [tip, setTip] = useState('');
    

    useEffect(() => {
        const findData = (item) => (item.id === slug);
        const result = rawData.filter(findData);

        if(result.length === 0){
            setLoading(false);
        } else {
            setLoading(true);
            setTitle(result[0].title);
            setImgUrl(result[0].imgurl);
            setTag(result[0].tag);
            setReusable(result[0].reusable);
            setCategory(result[0].category);
            setMethod(result[0].method);
            setTip(result[0].tip);
        }
    }, [slug, rawData]);

    return (
        loading && <div className="container">
            <hr></hr>
            
            <div className="col">
                <div className="row justify-content-center my-2 blogTitle"><h2>{title}</h2></div>
                <div className="row justify-content-center my-2 blogContent">{tag}</div>
                <div className="row justify-content-center my-2 blogContent">재활용: {reusable}</div>
                <div className="row justify-content-center my-2 blogContent">분류: {category}</div>
                <div className="row justify-content-center my-5 blogContent"><h4>분리배출방법</h4> <p>{method}</p></div>
                <div className="row justify-content-center my-2 blogContent"><h4>알아두면 좋은 점</h4> <p>{tip}</p></div>
                <div className="row justify-content-center my-2 ">
                    <img 
                        src={imgUrl} 
                        alt={`item`}  
                        className="img-responsive"
                        width="450px"
                    />
                </div>
            </div>
        </div>
    );
}

export default Blog;