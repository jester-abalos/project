import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

function ChemistryScreen() {
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
                        What is Chemistry?
                    </Text>
                </View>

                <View style={[styles.paragraphContainer, { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20, marginTop: 20 }]}>
                    <Text style={{ fontSize: 40, left: 100, marginTop: 67, fontFamily: 'Poppins-ExtraBold' }}>CHEMISTRY</Text>
                    <Image source={require('../assets/img/chemistry.png')} style={[styles.image, { resizeMode: 'contain', width: '20%', alignSelf: 'flex-end', right: 230 }]} />
                    <Image source={require('../assets/img/chem.png')} style={[styles.image, { resizeMode: 'contain', width: '100%', marginTop: 1, alignSelf: 'center' }]} />
                    <Text style={{ padding: 40, fontSize: 23, fontFamily: 'Poppins-Regular' }}>
                    Chemistry is the scientific study of matter,
its properties, composition, structure, and
the changes it undergoes during chemical reactions. It explores how substances interact, combine, and change, providing insight into everything from the ingredients in cooking to the processes in our bodies and the materials that make up the world around us.                    </Text>
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
        fontFamily: 'Poppins-ExtraBold',
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
        fontFamily: 'Poppins-ExtraBold',
    },
    scrollView: {
        padding: 20,
    },
});

export default ChemistryScreen;


