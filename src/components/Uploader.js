import React from "react";
import { Form } from "react-bootstrap";

const Uploader = ({ setImageSrc }) => {
    const changeImage = (e) => {
        const imgSrc = e.target.value;
        setImageSrc(imgSrc);
    };
    return (
        <div className="container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Image url 입력하세요. </Form.Label>
                    <Form.Control type="text" placeholder="예) 우산, 형광등, 프링글스통" onChange={changeImage}/>
                    <Form.Text className="text-muted">
                    * 현재 jpg만 지원합니다.</Form.Text>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Uploader;