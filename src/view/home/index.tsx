import React, { useEffect } from "react";
import Header from "./header";
import ItemBar from "./itemBar";

import './style.less'

const compList: any[] = [
  {
    title: "Common",
    childs: [
      {
        text: "Flex",
        routeName: "flex",
      },
    ],
  },
];

const Home: React.FC = () => {
  useEffect(() => {
    if (localStorage.showCtrl === void 0) {
      const ctrlArr = '0'.repeat(compList.length).split('').map(function (el, index) {
        return !!~~el
      })
      localStorage.showCtrl = JSON.stringify(ctrlArr)
    }
  }, [])
  return (
    <div className="home-page">
      <Header />
      <div className="clearfix home-wrapper">
        <div className="content-wrapper">
          {compList.map((item, index) => {
            return <ItemBar key={index} info={item} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
