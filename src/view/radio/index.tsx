import React, { useState } from "react";
import { Page, Flex, Radio } from "ink-rui";
import TopBar from "../../components/top_bar/index";

import "./style.less";

const Component = ({ history }: any) => {
  const [radio0, setRadio0] = useState('1')
  const [radio1, setRadio1] = useState('1')
  return (
    <Page
      className="radio-demo-wrapper"
      header={<TopBar title="Radio" history={history} />}
    >
      <Flex column className="radio-content">
        <div className="radio-item">
          <span className="radio-title">默认：</span>
          <div className="radio-demo">
            <Radio name='name' value='1' checked={radio0 === '1'} onChange={() => setRadio0('1')}/>
            <Radio name='name' value='2' checked={radio0 === '2'} onChange={() => setRadio0('2')}/>
            <Radio name='name' value='3' checked={radio0 === '3'} onChange={() => setRadio0('3')}/>
          </div>
        </div>
        <div className="radio-item">
          <span className="radio-title">禁用：</span>
          <div className="radio-demo">
            <Radio name='name1' value='1' checked={radio1 === '1'} disabled={radio1 === '2'} onChange={() => setRadio1('1')}/>
            <Radio name='name1' value='2' checked={radio1 === '2'} onChange={() => setRadio1('2')}/>
            <Radio name='name1' value='3' checked={radio1 === '3'} onChange={() => setRadio1('3')}/>
          </div>
        </div>
      </Flex>
    </Page>
  );
};

export default Component;
