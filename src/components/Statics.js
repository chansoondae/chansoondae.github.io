import React from "react";

const Statics = ({ rawData }) => {
    return (
        <div className="container d-flex justify-content-around statics p-3">
            <div className="row">
                <div className="col d-flex justify-content-center statics_num">{rawData.length}</div>
                <div className="col d-flex justify-content-center statics_num">5</div>
                <div className="w-100"></div>
                <div className="col d-flex justify-content-center statics_title">검색 가능한 쓰레기 종류</div>
                <div className="col d-flex justify-content-center statics_title">새로 등록된 쓰레기</div>
            </div>
        </div>
    );
}

export default Statics;