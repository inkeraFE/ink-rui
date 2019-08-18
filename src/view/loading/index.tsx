import React from "react";
import { Page, Flex, Loading } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="loading-demo-wrapper"
      header={<TopBar title="Loading" history={history} />}
    >
      <Flex className="demo-item" justifyBetween alignCenter>
        <div className="title">默认：</div>
        <Loading/>
      </Flex>
    </Page>
  );
};

export default Component;
