import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LocationHeader = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const opacity = scrollY.interpolate({
        inputRange: [0, 80],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={[styles.animatedHeader, { opacity }]}>
            <View style={styles.container}>
                <View style={styles.locationContainer}>
                    <View style={styles.flexRowGap}>
                        <View style={styles.flexRowGap}>
                            <Icon name="location" size={30} color={'#fff'} />
                        </View>
                        <TouchableOpacity style={styles.flexColumn}>
                            <Text style={styles.locationText}>
                                144 Hà Huy Tập{' '}
                                <Icon name="chevron-down" size={16} color={'#fff'} />
                            </Text>
                            <Text style={styles.subLocationText}>Thanh Khê, Đà Nẵng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexRowGap}>
                        <TouchableOpacity style={styles.profileAvatar}>
                            <Image source={require('../../assets/images/golden_circle.png')} style={styles.goldenCircle} />

                            <Image source={require('../../assets/images/mixicity.png')} style={styles.profileImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    animatedHeader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexColumn: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 10,
    },
    locationText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    subLocationText: {
        color: '#fff9',
        fontSize: 14,
        fontWeight: '400',
    },
    content: {
        marginTop: 100,
        padding: 20,
    },
    contentText: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 24,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50,
        resizeMode: 'contain'
    },
    goldenCircle: {
        width: 50,
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        height: 50,
        borderRadius: 50,
    },
    profileAvatar: {
        width: 40,
        marginHorizontal: 5,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default LocationHeader;
