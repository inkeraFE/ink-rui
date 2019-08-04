import React, { useState } from "react";
import classnames from "classnames";

import { history } from "../../util";

interface ItemBarProps {
  children?: React.ReactNode;
  info: {
    title: string;
    childs: any[];
  };
  index: number;
}

function ItemBar({ info, index }: ItemBarProps) {
  const [isShow, setShow] = useState(
    localStorage.showCtrl && JSON.parse(localStorage.showCtrl)[index]
  );

  const handleSetShow = (event: any) => {
    const state = !isShow;
    const iconDom = event.currentTarget.children.item(1);
    const ctrlJSON = JSON.parse(localStorage.showCtrl);
    let animDeg = 0;
    setShow(state);
    if (state) animDeg = 180;
    iconDom.style.transform = "rotate3d(0, 0, 1, " + animDeg + "deg)";
    ctrlJSON[index] = state;
    localStorage.showCtrl = JSON.stringify(ctrlJSON);
  };

  return (
    <div className="item-wrapper">
      <div className="title" onClick={handleSetShow}>
        <div className="text">{info.title}</div>
        <i
          className={classnames("icon iconfont iconjiantouxia", {
            "icon-rotate": isShow === true,
          })}
        />
      </div>
      {isShow ? (
        <ul className="comp-list">
          {info.childs.map((item, index) => {
            return (
              <li className="comp-item" key={index} onClick={() => history.push(`/${item.routeName}`)}>
                <span>{item.text}</span>
                <i className="iconfont">&#xe646;</i>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default ItemBar;
