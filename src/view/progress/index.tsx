import React from "react";
import { Page, Flex, Progress } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="progress-demo-wrapper"
      header={<TopBar title="Progress" history={history} />}
    >
      <Flex column className="content">
        <div className="title">默认</div>
        <div className="item">
          <Progress percent={20}/>
          <div className="value">20%</div>
        </div>
        <div className="item">
          <Progress percent={40}/>
          <div className="value">40%</div>
        </div>
      </Flex>
      <Flex column className="content">
        <div className="title">自定义</div>
        <div className="item">
          <Progress strokeColor="#6cbcd2" percent={60}/>
          <div className="value">60%</div>
        </div>
        <div className="item">
          <Progress strokeColor="#6cd298" strokeHeight={3} percent={80}/>
          <div className="value">80%</div>
        </div>
      </Flex>
    </Page>
  );
};

export default Component;
