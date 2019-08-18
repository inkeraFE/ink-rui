import React from "react";
import { Page, Flex, Button } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  return (
    <Page
      className="button-demo-wrapper"
      header={<TopBar title="Button" history={history} />}
    >
      <Flex className="demo-wrapper" column>
        <div>
          <Button type="primary" size="large">
            Primary
          </Button>
          <Button type="danger" size="large">
            Danger
          </Button>
          <Button type="warning" size="large">
            Warning
          </Button>
          <Button size="large">Default</Button>
        </div>
        <div>
          <Button type="primary" style={{marginRight: 10}}>Primary</Button>
          <Button type="danger" style={{marginRight: 10}}>Danger</Button>
          <Button type="warning" style={{marginRight: 10}}>Warning</Button>
          <Button>Default</Button>
        </div>
        <div>
          <Button type="primary" disabled>disabled</Button>
        </div>
      </Flex>
    </Page>
  );
};

export default Component;
