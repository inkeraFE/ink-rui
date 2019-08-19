import React from "react";
import { Page, Header } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="header-demo-wrapper"
      header={<TopBar title="Header" history={history} />}
    >
      <div style={{ padding: '20px 0' }}>
        <Header
          left={
            <i className="icon iconfont">&#xe790;</i>
          }
          center={
            <span className='title'>标题</span>
          }
          right={
            <i className="icon iconfont">&#xe646;</i>
          }
        />
      </div>
    </Page>
  );
};

export default Component;
