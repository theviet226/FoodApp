import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import BreakText from '../../components/ui/BreakText';
import PhoneInput from '../../components/ui/PhoneInput';
import SocicalLogin from '../../components/ui/SocicalLogin';
import { resetAndNavigate } from '../../utils/NavigationUtils';


const {width, height} = Dimensions.get('window');

const LoginScreen: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin =async () =>{
    setLoading(true)
    setTimeout(()=>{
        setLoading(false)
        resetAndNavigate('UserBottomTab')
    },2000)
  }
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/poster.jpg')}
        style={styles.cover}
      />
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}>
        <Text style={styles.sloText}>
          VietNam #1 Food Delivery and Dining App
        </Text>
        <BreakText text='Log in or sign up'/>
        <PhoneInput
          onFocus={() => {}}
          onChangeText={() => {}}
          onBlur={() => {}}
          value={phone}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin} activeOpacity={0.8} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.continueText}>Continue</Text>
          )}
        </TouchableOpacity>
        <BreakText text='or'/>
        <SocicalLogin/>
      </ScrollView>
      <View style={styles.footer}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cover: {
    width: '100%',
    height: height * 0.4,
    resizeMode: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bottomContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  sloText: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#000',
  },
  continueText:{
    color: '#fff',
    fontSize : 18
  },
  buttonContainer: {
    backgroundColor: '#d41b1b',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    marginVertical: 5,
    borderRadius: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 26,
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerTextContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  footerText: {
    textDecorationLine: 'underline',
    fontSize: 10,
  },
});

export default LoginScreen;
