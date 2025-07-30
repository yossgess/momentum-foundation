import { ViewStyle, TextStyle } from 'react-native';
import { InputFieldProps } from '../../atoms/InputField/InputField.types';

export interface FormFieldProps extends Omit<InputFieldProps, 'label'> {
  label?: string;
  required?: boolean;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}
