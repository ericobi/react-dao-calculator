import React from 'react';
import { hot } from 'react-hot-loader/root';
import Footer from '@makerdao/ui-components-footer';
import Header from '@makerdao/ui-components-header';
import { Box, Flex, Card, Text } from '@makerdao/ui-components-core';
import LandingHeroLayout from 'layouts/LandingHeroLayout';

import { Title } from 'components/Typography';

import useModal from 'hooks/useModal';

const MyCard = ({title, onClick}) => (
  <Box mx="l" style={{
    cursor: 'pointer'}} onClick={onClick}>
    <Card width="400px" height="250px">
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Text.h2>{title}</Text.h2>
        <br />
        <Text.h2>Parameters</Text.h2>
        <br />

        {/* Delete below later */}
        <Text.h1>&#10230;</Text.h1>
      </Flex>
    </Card>
  </Box>
);

function Landing() {

  const { show } = useModal();
  return (
    <Box width="100%">
      <Header />
      <Box bg="backgroundGrey">
        <LandingHeroLayout>
          <Flex flexDirection="column">
            {/* <Title pb="l" textAlign="center">
              Risk Portal
            </Title> */}
            <Flex pb="l" flexDirection="row" justifyContent="space-around">
              {/* <MyCard title="Governance" onClick={() =>
                show({ modalType: 'cdpcreate', modalTemplate: 'fullscreen' })
              } />
              <MyCard title="Programmatic" /> */}
            </Flex>
          </Flex>
        </LandingHeroLayout>
      </Box>
      <Footer />
    </Box>
  );
}

export default hot(Landing);
