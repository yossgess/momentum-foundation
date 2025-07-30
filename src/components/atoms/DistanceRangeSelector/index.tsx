import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { DistanceRangeSelectorProps, DistanceRangeSelectorRef } from './DistanceRangeSelector.types';
import { createDistanceRangeSelectorStyles } from './DistanceRangeSelector.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';

export const DistanceRangeSelector = React.memo(
  forwardRef<DistanceRangeSelectorRef, DistanceRangeSelectorProps>(({
    min = 0,
    max = 100,
    step = 5,
    initialValue = 30,
    onChange,
    locale = 'en',
    icon,
    disabled = false,
    style,
  }, ref) => {
    const [value, setValue] = useState(initialValue);
    const styles = createDistanceRangeSelectorStyles();
    const { t } = useTranslation(locale);

    useEffect(() => {
      logger.componentMount('DistanceRangeSelector', { min, max, step, initialValue });
      return () => {
        logger.componentUnmount('DistanceRangeSelector');
      };
    }, []);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setValue(initialValue);
        onChange(initialValue);
        logger.info('DistanceRangeSelector reset to initial value', { initialValue });
      },
    }));

    const handleValueChange = (newValue: number) => {
      const oldValue = value;
      setValue(newValue);
      onChange(newValue);
      logger.valueChange('DistanceRangeSelector', oldValue, newValue);
    };

    const displayText = `${t.distance.within} ${value} ${t.distance.km}`;

    return (
      <View style={[styles.container, disabled && styles.disabled, style]}>
        <View style={styles.header}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={styles.valueText}>{displayText}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={min}
            maximumValue={max}
            step={step}
            value={value}
            onValueChange={handleValueChange}
            minimumTrackTintColor={theme.colors.accent.main}
            maximumTrackTintColor={theme.colors.surface.secondary}
            thumbTintColor={theme.colors.accent.main}
            disabled={disabled}
          />
        </View>
      </View>
    );
  })
);

DistanceRangeSelector.displayName = 'DistanceRangeSelector';
