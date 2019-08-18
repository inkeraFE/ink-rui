import React, { useState } from "react";
import { Page, Flex, Switch } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  const [switch0, setSwitch0] = useState(false)
  return (
    <Page
      className="switch-demo-wrapper"
      header={<TopBar title="Switch" history={history} />}
    >
      <Flex column className="switch-content">
        <div className="switch-item">
          <span className="switch-title">默认</span>
          <div className="switch-demo">
            <Switch checked={switch0} onChange={() => setSwitch0(!switch0)} />
            <span>{switch0}</span>
          </div>
        </div>
      </Flex>
    </Page>
  );
};

export default Component;
