import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { translate } from 'react-i18next';

const RegisterPhone = ({
  t
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('register:address:label')}</Text>
      <TextInput
        autoFocus
        placeholder="Calle 100 #90-01"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  label: {
    marginBottom: 5,
    fontSize: 22
  },
  input: {
    fontSize: 22
  }
});

RegisterPhone.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate(['register'])(RegisterPhone);
