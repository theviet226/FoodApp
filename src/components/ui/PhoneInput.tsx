import {View, Text, StyleSheet, Pressable, TextInput} from 'react-native';
import React, {FC} from 'react';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const PhoneInput: FC<PhoneInputProps> = ({
  value,
  onChangeText,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
        <Text style={styles.phoneText} >🇻🇳</Text>
      </Pressable>
      <View style={styles.phoneInputContainer}>
        <Text style={styles.phoneText}>+84</Text>
        <TextInput
          placeholder="Nhập số điện thoại..."
          keyboardType="phone-pad"
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  countryPickerContainer:{
    backgroundColor: '#fff',
    padding: 8,
    height: 45,
    flexDirection: 'row',
    gap: 5,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 5,
    shadowRadius: 4,
    shadowColor: '#000',
    borderColor: '#000',
    borderRadius: 10,
  },
  phoneInputContainer: {
    backgroundColor: '#fff',
    width: '78%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 5,
    shadowRadius: 4,
    shadowColor: '#000',
    borderColor: '#000',
    borderRadius: 10,
  },
  phoneText:{
    color : '#000',
    fontSize : 16,
    fontWeight : '600'
  },
  input: {
    height: 45,
    // fontFamily: fonts.Medium,
    width:"100%"
},
});

export default PhoneInput;
