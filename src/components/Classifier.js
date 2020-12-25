import React, { useState } from "react";
import ml5 from "ml5";
import ClipLoader from "react-spinners/ClipLoader";
import { ListGroup } from "react-bootstrap";

function Classifier({ imageSrc }) {
    const [results, setResults] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const classifyImg = async () => {
        setLoading(true);
        // const classifier = ml5.imageClassifier("MobileNet", () =>
        //     console.log("Module loaded")
        // );

        // load the model and metadata
        // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
        // or files from your local hard drive
        // Note: the pose library adds "tmImage" object to your window (window.tmImage)

        const classifier = ml5.imageClassifier('./model/model.json', () =>
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
            });
    };
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
                    width="50%"
                />}
            </div>
            <div className="container d-flex justify-content-center p-">
            {isLoading ? (
                <ClipLoader />
            ) : (
                <ListGroup>
                    {results.map((result, index) => {
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
            )}
            </div>
        </>
    );
}

export default Classifier;