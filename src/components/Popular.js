import React from "react";
import { Table } from "react-bootstrap";

function Popular({ listItems }) {
    return (
        <div className="container">
            <h4>오늘의 인기 쓰레기</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>아이템</th>
                    </tr>
                </thead>
                <tbody>
                {listItems.map((item, index) => {
                        return (
                            <tr key={"popularlistitems"+index}>
                                <td>{index+1}</td>
                                <td>{item}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Popular;