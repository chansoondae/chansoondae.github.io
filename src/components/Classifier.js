import React, { useState, useEffect } from "react";
import ml5 from "ml5";
import ClipLoader from "react-spinners/ClipLoader";
import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Classifier = ({ imageSrc, rawData}) => {
    const [results, setResults] = useState([]);
    const [label, setLabel] = useState('');
    const [url, setUrl] = useState('');
    const [isLoading, setLoading] = useState(false);



    const classifyImg = async () => {
        setResults([]);
        setLabel('');
        setLoading(true);
        const imageModelURL = 'https://teachablemachine.withgoogle.com/models/NwYgSenim/';

        const classifier = ml5.imageClassifier(imageModelURL + 'model.json', () =>
            console.log("Module loaded")
        );

        const image = document.querySelector("#image");

        classifier
            .predict(image, 5, (err, classifiedResults) => {
                return classifiedResults;
            })
            .then((classifiedResults) => {
                setLoading(false);
                setResults(classifiedResults);
                setLabel(classifiedResults[0].label);
            });
    };

    useEffect(() => {
        const findData = (item) => (item.title === label);
        const result = rawData.filter(findData);
        console.log(label);

        if(result.length === 0){
            setUrl("");
        } else {
            setUrl("#items/"+result[0].id);
        }
    }, [label, rawData]);

    return (
        <>
            <div className="container d-flex justify-content-center">
                {imageSrc && <img 
                    id="image"
                    src={imageSrc} 
                    alt={`input for tensorflow`}  
                    className="img-responsive"
                    crossOrigin='anonymous'
                    onLoad={classifyImg}
                    width="40%"
                />}
            </div>
            <div className="container d-flex justify-content-center p-">
            {isLoading ? (
                <ClipLoader />
            ) : (
                <div>
                    {label && <Button variant="primary" size="lg" block href={url} >{label+" 자세히 보기"}</Button>}
                    <ListGroup>
                        {results.filter((item)=>{
                            const {confidence} = item;
                            return confidence > 0.1;})
                        .map((result, index) => {
                            const { label, confidence } = result;
                            return (
                                <ListGroup.Item key={index}>{`${
                                    index + 1
                                }. Predictation : ${label} , ${Math.floor(
                                    confidence * 100
                                )}%`}</ListGroup.Item>
                            );
                        })}
                    </ListGroup>
                    {label && <div className = "listdetail">10% 이상 확률만 리스트 출력</div>}
                </div>
            )}
            </div>
        </>
    );
}

export default Classifier;