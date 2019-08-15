import React from "react";
import { Page, Flex } from "ink-rui";
import TopBar from '../../components/top_bar/index'

const Component = ({ history }: any) => {
  return (
    <Page
      header={
        <TopBar
          title='Flex'
          history={history}
        />
      }
    >
      <Flex style={{ padding: '10px 0' }}>
        <Flex flex={1} style={{ background: '#b9b9c3', height: '20px' }} />
        <Flex flex={2} style={{ background: '#a09898', height: '20px' }} />
        <Flex flex={1}  style={{ background: 'grey', height: '20px' }} />
      </Flex>
      <Flex column style={{ height: '80px', margin: '10px 0' }}>
        <Flex flex={1} style={{ background: '#b9b9c3' }} />
        <Flex flex={2} style={{ background: '#a09898' }} />
        <Flex flex={1} style={{ background: '#grey' }} />
      </Flex>
      <Flex
        justifyCenter
        alignCenter
        style={{ background: '#b9b9c3', height: '120px' }}
      >
        justifyCenter alignCenter
      </Flex>
    </Page>
  )
};

export default Component;
