import React from 'react';
import { Switch, Block } from '../../components';
import FertilizationSegment from './FertilizationSegment';
import { changeMixed } from '../../redux/actions/specialActions';

const Fertilization = ({ fertilizationData, field, turn }) => {
  const { mixed } = fertilizationData;

  return (
    <>
      <FertilizationSegment
        field={field}
        fertilizationData={fertilizationData}
        actionArgumentObject={{ field, turn }}
        place={1}
      />

      <Switch
        label="Mešam sa još jednim đubrivo"
        action={changeMixed}
        actionArgumentObject={{ field, turn, value: mixed, workState: 'fertilizationState' }}
        withAnimation
      />
      <Block style={{ height: mixed ? null : 0, overflow: 'hidden' }}>
        <FertilizationSegment
          field={field}
          fertilizationData={fertilizationData}
          actionArgumentObject={{ field, turn }}
          place={2}
        />
      </Block>
    </>
  );
};

export default Fertilization;
