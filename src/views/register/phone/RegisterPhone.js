import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { translate } from 'react-i18next';
import noop from 'lodash/noop';

const RegisterPhone = ({
  t,
  phone,
  onPhoneChange,
  isSubmitEnabled,
  handleSubmit
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('register:phone:label')}</Text>
      <TextInput
        keyboardType="phone-pad"
        autoFocus
        placeholder="321 00000000"
        style={styles.phoneInput}
        onChangeText={onPhoneChange}
        value={phone}
      />
      <Button
        onPress={handleSubmit}
        title={t('common:navigation:next')}
        disabled={!isSubmitEnabled}
      />
      <Text style={styles.termsLegend}>
        {t('common:termsLegend')}
      </Text>
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
  phoneInput: {
    fontSize: 22
  },
  termsLegend: {
    marginTop: 20,
    color: 'gray',
    fontSize: 8
  }
});

RegisterPhone.propTypes = {
  t: PropTypes.func.isRequired,
  phone: PropTypes.string.isRequired,
  onPhoneChange: PropTypes.func.isRequired,
  isSubmitEnabled: PropTypes.bool,
  handleSubmit: PropTypes.func
};

RegisterPhone.defaultProps = {
  handleSubmit: noop
};

export default translate(['register', 'common'])(RegisterPhone);
