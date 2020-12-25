import React, { useState } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Classifier from "./Classifier";
import Popular from "./Popular";
import Uploader from "./Uploader";
import Latest from "./Latest";
import Statics from "./Statics";
import Introduction from "./Introduction";
import Blog from "./Blog";
import Footer from "./Footer";
import rawData from "./Rawdata";

const top10 = [
                {"id":'wallpaper', "title": '벽지'}, 
                {"id":'tunacan', "title": '참치캔'}, 
                {"id":'pringles', "title": '프링글스통'}, 
                {"id":'coolbag', "title": '보냉백'}, 
                {"id":'battery', "title": '배터리'}, 
                {"id":'cattower', "title": '캣타워'}, 
                {"id":'styrofoam', "title": '스티로폼'}, 
                {"id":'homeappliance', "title": '가전제품'}, 
                {"id":'scissors', "title": '가위'}, 
                {"id":'wood', "title": '나무'},
];
const raw = rawData;

const AppRouter = () => {
    const [imageSrc, setImageSrc] = useState();

    return (
        <Router>
            <header><Link to="/" className="home_header">분리수거 백과사전</Link> </header>
            <Route exact path="/">
                <div className="container">
                    <Uploader setImageSrc={setImageSrc} />
                    <Classifier imageSrc={imageSrc} rawData={raw} />
                    <Popular ranking={top10}/>
                    <Latest rawData={raw}/>
                    <Statics rawData={raw}/>
                    <Introduction />
                </div>
            </Route>
            <Route path="/items/:slug">
                <Blog rawData={raw}/>
            </Route>         
            <Footer />   
        </Router>
    );
};

export default AppRouter;
