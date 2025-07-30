import React from 'react';
import { View, Text } from 'react-native';
import { InputField } from '../../atoms/InputField';
import { FormFieldProps } from './FormField.types';
import { createFormFieldStyles } from './FormField.styles';

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  error,
  helperText,
  containerStyle,
  labelStyle,
  ...inputProps
}) => {
  const styles = createFormFieldStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <View style={styles.labelContainer}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
          {required && <Text style={styles.required}>*</Text>}
        </View>
      )}
      
      <InputField
        error={error}
        helperText={helperText}
        {...inputProps}
      />
    </View>
  );
};
