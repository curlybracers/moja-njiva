import React from 'react';
import { StyleSheet, TextInput, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeNote } from '../../redux/actions/basicStateActions';
import { Text, Block } from '../../components';
import { theme } from '../../theme';

const Input = props => {
  const { field } = props;
  const note = useSelector(state => state[field].note);
  const dispatch = useDispatch();
  return (
    <Block style={styles.inputBlock}>
      <Text gray2>Napomena: </Text>
      <TextInput
        value={note}
        onChangeText={e => dispatch(changeNote(field, e))}
        style={styles.input}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        multiline
      />
    </Block>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBlock: {
    alignItems: 'flex-start',
    marginHorizontal: theme.sizes.base * 3,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: '500',
    color: theme.colors.black,
    paddingHorizontal: theme.sizes.base,
    height: theme.sizes.base * 3,
    width: Dimensions.get('window').width - theme.sizes.base * 6,
  },
});
