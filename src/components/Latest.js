
import React from "react";
import { CardColumns, Card, Button } from "react-bootstrap";

const Latest = ({ rawData }) => {
    return (
        <div className="container">
            <h4>최신 업데이트</h4>
            <CardColumns>
                {rawData.map((item, index) => {
                            return (
                                <Card key={"cardlistitems"+index}>
                                    <Card.Img variant="top" src={item.imgurl} />
                                    <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.method.slice(0,50)}... 
                                        <Button variant="primary" size="sm" href={"#items/"+item.id} >더보기</Button>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
            </CardColumns>
        </div>
    );
}

export default Latest;