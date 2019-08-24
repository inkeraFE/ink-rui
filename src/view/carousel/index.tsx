import React from "react";
import { Page, Carousel } from "ink-rui";
import TopBar from "../../components/top_bar/index";
import DemoTitle from "../../components/demo_title/index"

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="carousel-demo-wrapper"
      header={<TopBar title="Carousel" history={history} />}
    >
      <div className="carousel-content-demo">
        <DemoTitle>默认</DemoTitle>
        <Carousel>
          <div className="carousel-item-demo item1">item1</div>
          <div className="carousel-item-demo item2">item2</div>
          <div className="carousel-item-demo item3">item3</div>
        </Carousel>
        <DemoTitle>分页</DemoTitle>
        <Carousel dots autoPlay>
            <div className="carousel-item-demo item1">item1</div>
            <div className="carousel-item-demo item2">item2</div>
            <div className="carousel-item-demo item3">item3</div>
        </Carousel>
        <DemoTitle>无手势</DemoTitle>
        <Carousel disabledGesture autoPlay loop>
            <div className="carousel-item-demo item1">item1</div>
            <div className="carousel-item-demo item2">item2</div>
            <div className="carousel-item-demo item3">item3</div>
        </Carousel>
        </div>
    </Page>
  );
};

export default Component;
