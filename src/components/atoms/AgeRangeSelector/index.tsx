import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { AgeRangeSelectorProps, AgeRangeSelectorRef } from './AgeRangeSelector.types';
import { createAgeRangeSelectorStyles } from './AgeRangeSelector.styles';
import { useTranslation } from '../../../shared/utils/translations';
import { logger } from '../../../shared/utils/logger';
import { theme } from '../../../theme';

export const AgeRangeSelector = React.memo(
  forwardRef<AgeRangeSelectorRef, AgeRangeSelectorProps>(({
    min = 18,
    max = 60,
    step = 1,
    initialRange = [20, 35],
    onChange,
    locale = 'en',
    disabled = false,
    style,
  }, ref) => {
    const [range, setRange] = useState<[number, number]>(initialRange);
    const styles = createAgeRangeSelectorStyles();
    const { t } = useTranslation(locale);

    useEffect(() => {
      logger.componentMount('AgeRangeSelector', { min, max, step, initialRange });
      return () => {
        logger.componentUnmount('AgeRangeSelector');
      };
    }, []);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setRange(initialRange);
        onChange(initialRange);
        logger.info('AgeRangeSelector reset to initial range', { initialRange });
      },
    }));

    const handleValuesChange = (values: number[]) => {
      const oldRange = range;
      const newRange: [number, number] = [values[0], values[1]];
      setRange(newRange);
      onChange(newRange);
      logger.valueChange('AgeRangeSelector', oldRange, newRange);
    };

    const displayText = `${range[0]} - ${range[1]} ${t.age.yearsShort}`;

    return (
      <View style={[styles.container, disabled && styles.disabled, style]}>
        <View style={styles.header}>
          <Text style={styles.valueText}>{displayText}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <MultiSlider
            values={[range[0], range[1]]}
            sliderLength={280}
            onValuesChange={handleValuesChange}
            min={min}
            max={max}
            step={step}
            allowOverlap={false}
            snapped={true}
            selectedStyle={{
              backgroundColor: theme.colors.accent.main,
            }}
            unselectedStyle={{
              backgroundColor: theme.colors.surface.secondary,
            }}
            containerStyle={styles.slider}
            trackStyle={{
              height: 4,
              borderRadius: 2,
            }}
            markerStyle={{
              backgroundColor: theme.colors.accent.main,
              height: 20,
              width: 20,
              borderRadius: 10,
            }}
            pressedMarkerStyle={{
              backgroundColor: theme.colors.accent.dark,
              height: 24,
              width: 24,
              borderRadius: 12,
            }}
            enabledOne={!disabled}
            enabledTwo={!disabled}
          />
        </View>
        <View style={styles.ageIndicators}>
          <Text style={styles.ageIndicator}>{min}</Text>
          <Text style={styles.ageIndicator}>{max}+</Text>
        </View>
      </View>
    );
  })
);

AgeRangeSelector.displayName = 'AgeRangeSelector';
