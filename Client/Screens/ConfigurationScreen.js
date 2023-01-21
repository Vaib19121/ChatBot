import {View, Text, StyleSheet, Slider, Switch, Image} from 'react-native';
import React from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {useSelector, useDispatch} from 'react-redux';
import {
  toggle_dark_mode,
  set_model,
  set_temperature,
} from '../Store/Actions/Config_Actions';

export default function ConfigurationScreen() {
  const { darkMode} = useSelector(store => store.config);
  const data = [
    {key: '1', value: 'text-davinci-003'},
    {key: '2', value: 'text-curie-001'},
    {key: '3', value: 'text-babbage-001'},
    {key: '4', value: 'text-ada-001'},
  ];

  const dispatch = useDispatch();

  return (
    <View
      style={{
        ...styles.container,
        ...{backgroundColor: darkMode ? '#303a48' : 'white'},
      }}>
      <View style={styles.model}>
        <Text style={darkMode ? styles.model_text_dark : styles.model_text}>
          Choose Model :{' '}
        </Text>
        <SelectList
          setSelected={value => dispatch(set_model(value))}
          data={data}
          save="value"
          boxStyles={{width: 200}}
          inputStyles={{color: darkMode ? 'white' : '#181818'}}
          arrowicon={
            <Image
              source={
                darkMode
                  ? require('../assets/icon/chevron_down_white.png')
                  : require('../assets/icon/chevron_down.png')
              }
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          }
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={darkMode ? styles.model_text_dark : styles.model_text}>
          Temperature :
        </Text>
        <Slider
          onSlidingComplete={value => dispatch(set_temperature(value))}
          style={{width: 215}}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor="blue"
          maximumTrackTintColor={darkMode ? 'white' : '#181818'}
        />
      </View>
      <View style={styles.model}>
        <Text style={darkMode ? styles.model_text_dark : styles.model_text}>
          Dark Mode :{' '}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={() => dispatch(toggle_dark_mode())}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  model: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: '7%',
  },
  model_text: {
    marginHorizontal: '3%',
    fontSize: 17,
    fontWeight: '400',
  },
  model_text_dark: {
    marginHorizontal: '3%',
    fontSize: 17,
    fontWeight: '400',
    color: 'white',
  },
  dark: {
    backgroundColor: '#181818',
  },
});
