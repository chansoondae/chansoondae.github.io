
import React from "react";
import { CardColumns, Card, Button } from "react-bootstrap";

function Latest({ listItems }) {
    return (
        <div className="container">
            <h4>최신 업데이트</h4>
            <CardColumns>
                {listItems.map((item, index) => {
                            return (
                                <Card key={"cardlistitems"+index}>
                                    <Card.Img variant="top" src={item.imgurl} />
                                    <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.content.slice(0,50)}... 
                                        <Button variant="primary" size="sm" disabled>더보기</Button>
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