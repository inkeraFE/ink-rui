import React from "react";
import { Page, Tabs } from "ink-rui";
import TopBar from "../../components/top_bar/index";
import DemoTitle from "../../components/demo_title/index"

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="tabs-demo-wrapper"
      header={<TopBar title="Tabs" history={history} />}
    >
      <div>
        <DemoTitle>默认</DemoTitle>
        <Tabs
          tabs={['tab1', 'tab2', 'tab3']}
        >
          <div className="content">item1</div>
          <div className="content">item2</div>
          <div className="content">item3</div>
        </Tabs>
        <DemoTitle>无手势</DemoTitle>
        <Tabs
          enableGesture={false}
          tabs={['tab1', 'tab2', 'tab3']}
        >
          <div className="content">item1</div>
          <div className="content">item2</div>
          <div className="content">item3</div>
        </Tabs>
        </div>
    </Page>
  );
};

export default Component;
