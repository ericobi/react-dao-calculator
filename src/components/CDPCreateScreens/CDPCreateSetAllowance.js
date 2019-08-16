import React, { useState } from 'react';
import { Box, Text, Input, Card, Button, Grid } from '@makerdao/ui-components-core';

import lang from 'languages';
import ScreenFooter from './ScreenFooter';
import useMaker from 'hooks/useMaker';

import { ReactComponent as Checkmark } from 'images/checkmark.svg';

const SuccessButton = () => {
  return (
    <Button variant="primary-outline" width="13.0rem" mt="xs" disabled>
      <Checkmark />
    </Button>
  );
};

const CDPCreateSetAllowance = ({
  selectedIlk,
  proxyAddress,
  hasAllowance,
  dispatch
}) => {
  const { maker } = useMaker();
  const [isDeployingProxy, setIsDeployingProxy] = useState(false);
  const [isSettingAllowance, setIsSettingAllowance] = useState(false);

  async function deployProxy() {
    setIsDeployingProxy(true);
    try {
      const proxyAddress = await maker.service('proxy').ensureProxy();
      dispatch({
        type: 'set-proxy-address',
        payload: { address: proxyAddress }
      });
    } catch (err) {}
    setIsDeployingProxy(false);
  }

  async function setAllowance() {
    setIsSettingAllowance(true);
    try {
      const gemToken = maker.getToken(selectedIlk.currency.symbol);
      await gemToken.approveUnlimited(proxyAddress);
      dispatch({ type: 'set-ilk-allowance', payload: { hasAllowance: true } });
    } catch (err) {}
    setIsSettingAllowance(false);
  }

  return (
    <Box maxWidth="71.8rem">
      <Text.h2 textAlign="center" mb="xl">
        {lang.cdp_create.exchange_api_keys_title}
      </Text.h2>
      <Card px="2xl" py="l" mb="xl">
        <Grid gridRowGap="xs">
          <Text.h4>Data Input</Text.h4>
          <Text.p color="darkLavender" fontSize="l" lineHeight="normal">
            {lang.cdp_create.setup_proxy_proxy_text}
          </Text.p>
          {
          //  proxyAddress ? (
          //  <SuccessButton />
          // ) : (
          //   <Button
          //     width="13.0rem"
          //     mt="xs"
          //     onClick={deployProxy}
          //     disabled={isDeployingProxy || isSettingAllowance}
          //     loading={isDeployingProxy}
          //   >
          //     {lang.cdp_create.setup_proxy_proxy_button}
          //   </Button>
          // )
          }
          <Input value="MakerDAO_collateral_types_aggregate_exchange_data.json" readOnly disabled>
            
          </Input>
        </Grid>
        {/* <Grid gridRowGap="xs" mt="l">
          <Text.h4>Set allowance</Text.h4>
          { <Text.p color="darkLavender" fontSize="l" lineHeight="normal">
            {lang.formatString(
              lang.cdp_create.setup_proxy_allowance_text,
              selectedIlk.currency.symbol
            )}
          </Text.p> }
          {
            //hasAllowance ? (
            <SuccessButton />
          // ) : (
          //   <Button
          //     width="13.0rem"
          //     mt="xs"
          //     onClick={setAllowance}
          //     disabled={isDeployingProxy || isSettingAllowance}
          //     loading={isSettingAllowance}
          //   >
          //     {lang.cdp_create.setup_proxy_allowance_button}
          //   </Button>
          // )
          }
        </Grid> */}
      </Card>
      <ScreenFooter
        dispatch={dispatch}
        canProgress={true}
        canGoBack={false}
      />
    </Box>
  );
};

export default CDPCreateSetAllowance;
