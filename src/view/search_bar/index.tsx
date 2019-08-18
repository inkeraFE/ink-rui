import React from "react";
import { Page, SearchBar } from "ink-rui";
import TopBar from "../../components/top_bar/index";
import DemoTitle from "../../components/demo_title/index";

const Component = ({ history }: any) => {
  const [value, setValue] = React.useState('')

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleSubmit = () => {
    console.log(1111);
  };

  return (
    <Page header={<TopBar title="SearchBar" history={history} />}>
      <div>
        <DemoTitle>默认</DemoTitle>
        <SearchBar
          placeholder="Please Input"
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <DemoTitle>无清空</DemoTitle>
        <SearchBar
          placeholder="Please Input"
          canClear={false}
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </Page>
  );
};

export default Component;
