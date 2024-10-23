import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function PhysicsScreen() {
    const navigation = useNavigation();
    const [loaded] = useFonts({
        'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={[styles.header, { color: 'white', marginTop: 100, fontWeight: 'bold', marginBottom: 10, fontSize: 26, textAlign: 'left', padding: 30, fontFamily: 'Poppins-ExtraBold' }]}>
                        What is Physics?
                    </Text>
                </View>

                <View style={[styles.paragraphContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20, marginTop: 20 }]}>
                    <Text style={{ fontSize: 42, left: 90, marginTop: 67, fontFamily: 'Poppins-ExtraBold' }}>PHYSICS</Text>
                    <Image source={require('../assets/img/physics.png')} style={[styles.image, { resizeMode: 'contain', width: '20%', alignSelf: 'flex-end', right: 210 }]} />
                    <Image source={require('../assets/img/phy.png')} style={[styles.image, { resizeMode: 'contain', width: '100%', marginTop: 1, alignSelf: 'center' }]} />
                    <Text style={{ padding: 40, fontSize: 23, fontFamily: 'Poppins-Regular' }}>
                    Physics is branch of science that studies the fundamental principles governing the behavior and interactions of matter and energy in the universe. It seeks to understand the nature of the universe through observation, experimentation, and mathematical modeling. By exploring the properties of physical systems, physics aims to explain natural phenomena and develop theories that describe the laws of nature.
                    </Text>
                </View>
            </ScrollView>
            <View style={styles.navContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home.png')} style={{width: 30, height: 30, resizeMode: 'contain' , tintColor:'white',}} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                    <Image source={require('../assets/information-button.png')} style={{ width: 30, height: 30, resizeMode: 'contain', tintColor:'white', }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8312C2',
    },
    itemContainer: {
        flex: 1,
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: '#FAEDFF',
        paddingTop: 9,
    },
    button: {
        backgroundColor: '#ba42ff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        
    },
    buttonText: {
        textAlign: "center",
        color:"white",
    },
    image: {
        width: '33%',
        height: 200,
    },
    paragraphContainer: {
        padding: 20,
        backgroundColor: '#FAEDFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    paragraph: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
    },
    scrollView: {
        padding: 20,
    },
});

export default PhysicsScreen;

