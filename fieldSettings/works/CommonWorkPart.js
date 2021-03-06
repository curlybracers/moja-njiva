import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Block } from '../../components';
import PaidAndConsumptionSegment from './PaidAndConsumptionSegment';
import DoneAndPlaningSegment from './DoneAndPlaningSegment';
import DatePicker from './DatePicker';
import SubTotal from './SubTotal';
import { theme } from '../../theme';

const CommonWorkPart = ({ field, name, work, children }) => {
  const { done, planing, paid, paidPrice, oilConsumption, workName } = work;
  const actionArgumentObject = { field, workName };

  return (
    <Block flex={false}>
      <Text center medium title gray style={styles.workName}>
        {name}
      </Text>

      <Block row>
        <DoneAndPlaningSegment
          done={done}
          planing={planing}
          actionArgumentObject={actionArgumentObject}
        />
        <DatePicker actionArgumentObject={actionArgumentObject} isActive={planing} />
      </Block>

      <Block style={{ height: done || planing ? null : 0, overflow: 'hidden' }}>
        <PaidAndConsumptionSegment
          paid={paid}
          actionArgumentObject={actionArgumentObject}
          paidPrice={paidPrice}
          oilConsumption={oilConsumption}
        />
        {children}
        <SubTotal field={field} work={work} />
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  workName: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: theme.colors.gray,
    marginBottom: theme.sizes.base,
    paddingBottom: theme.sizes.base,
  },
});

export default CommonWorkPart;
