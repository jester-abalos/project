import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

function AboutScreen() {
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
            <Image source={require('../assets/about.png')} style={styles.image} />
            <ScrollView style={[styles.scrollView, { marginTop: -40 , marginBottom:30,}]}>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.header}>
                        ABOUT US
                    </Text>
                    <Text style={styles.paragraph}>
                        Welcome to our ScienceHub, website a collaborative effort by the passionate students of Group 2 from Colegio De Montalban. In compliance with the ITAPPSDEV project, we have created this platform to ignite curiosity and foster a deeper understanding of the vast world of science.
                    </Text>
                    <Text style={styles.paragraph}>
                        The theme of this project is based on a user persona targeting students researching various branches of science. The colors, icons, and pictures are chosen for their aesthetic appeal, aiming to engage users and encourage exploration. The design is inspired by the vast, unknown galaxy, making the mobile application an interactive and engaging platform for learning science.
                    </Text>
                </View>
                
                <View style={styles.paragraphContainer1}>
                <Image source={require('../assets/abalos.png')} style={[styles.image3, {left: 10}]}/>
                    <Text style={styles.paragraph}>
                    UI Design Principles
UX Design Theory
Specialty: Leadership, Expertise, and Professional Coding Skills.                    </Text>
<Text style={styles.paragraph}>
                    Abalos's adherence to UI Design Principles ensures consistency by maintaining uniform elements across the interface reducing the user's learning curve. Simplicity is also prioritized, creating a clear and design free 
of unnecessary clutter.
<Text style={styles.paragraph}>
                    In UX Design Theory, Abalos emphasizes a User-Centered Design by placing the user at the heart of the design process. Furthermore, iterative usability testing with real users is conducted to continually refine and improve the product.                  
                    </Text>
                </Text>
                </View>
                
                   
                <View style={styles.paragraphContainer1}>
                <Image source={require('../assets/mago.png')} style={styles.image3} />
                    <Text style={styles.paragraph}>
                    User persona
Specialty: Research and Documenting.                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    The application of this specialty on the design is to know what is the target audience for the project that will be made and that will be the center of the design witch  is the student and made it easy to use for the younger generation with good appeal for the engagement of audience. In the Documenting I observe what does everyone's input to the project and known the specialties of everyone.                    </Text>
                </View>
                   
                <View style={styles.paragraphContainer1}>
                <Image source={require('../assets/atay.png')} style={styles.image3} />
                    <Text style={styles.paragraph}>
                    Color theory
                    Specialty: Creative Arts                    </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    The application of this specialty on the design is to input her creative mind to think about the icons and pictures that will be in the project to intrigue the mind of the viewers to  explore and know about the science that we know to this day.               
                     </Text>
                     </View>

                     <View style={styles.paragraphContainer1}>
                    <Image source={require('../assets/cabanda.png')} style={[styles.image3, { left: 10 }]} />
                    <Text style={styles.paragraph}>
                    60 30 10 rule 
Specialty: Design Aesthetics                  </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    The application of this specialty on the design is to have keen eye for aesthetics and an ability to visualize balanced color schemes and he give it with the color of 60% Lavander 30% Dark Violet 10% Palevioletred That combination exudes a calming, elegant, and slightly mysterious vibe. Lavender creates a serene, tranquil ambiance, evoking feelings of relaxation and calm.  Dark Violet adds depth and sophistication, giving a touch of luxury and mystery and lastly Pale Violet Red introduces a hint of romance and warmth without overpowering the other colors. Overall, it’s a balanced blend that feels both inviting and intriguing.               
                     </Text>
                     </View>

                     <View style={styles.paragraphContainer1}>
                    <Image source={require('../assets/izen.png')} style={[styles.image3, { left: 10 }]} />
                    <Text style={styles.paragraph}>
                    Typography
Specialty: Font Knowledge                 </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    The application of this specialty on the design is the knowledge of picking the proper font which is Poppins that give sleek and modern, with a clean and geometric feel. It’s professional but not too formal, making it versatile for both digital and print designs. It as the typeface equivalent of a minimalist, stylish wardrobe sharp and polished, but approachable perfect for making a statement without shouting.                     </Text>
                     </View>

                     <View style={styles.paragraphContainer1}>
                    <Image source={require('../assets/aquino.png')} style={[styles.image3, { left: 10 }]} />
                    <Text style={styles.paragraph}>
                    Spacing
Specialty: Hierarchy and Layout Skills                </Text>
                </View>
                <View style={styles.paragraphContainer1}>
                    <Text style={styles.paragraph}>
                    The application of this specialty on the design is the Good spacing in a mobile app design evokes feelings of clarity, ease, and professionalism. It makes the interface look clean and well-organized, reducing cognitive load and making navigation intuitive. Essentially, it creates a calm and user-friendly experience, enhancing both aesthetics and functionality.                     
                    </Text>
                    </View>
            </ScrollView>

            
            <View style={styles.navContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home.png')} style={{width: 30, height: 30, resizeMode: 'contain' , tintColor:'white',}} />
                </TouchableOpacity>
              
            <TouchableOpacity style={styles.button} onPress={() => {
                Alert.alert(
                    "Logout",
                    
                    "Do you want to Exit?",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => navigation.navigate('Login') }
                    ]
                );
            }}>
                    <Image source={require('../assets/logout.png')} style={{ width: 30, height: 30, resizeMode: 'contain', tintColor:'white', }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 44,
        fontFamily: 'Poppins-ExtraBold',
        color: '#4A0665',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
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
        width: '100%',
        height: 280,
        resizeMode: 'cover',
    },
    image2: {
        marginTop: 90,
        resizeMode: 'cover',    
        marginLeft: 1,
    },
    image3: {
         
        resizeMode: 'cover' ,    
        marginLeft: -20,
        width: 400,
        height: 500
    },
    paragraphContainer: {
        flex: 1,
        padding: 20,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#FAEDFF',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    paragraphContainer1: {
        padding: 20,
        backgroundColor: '#FAEDFF',
        
       
    },
    paragraph: {
        fontSize: 18,
        color: '#4A4A4A',
        fontFamily: 'Poppins-Regular',
        padding: 20,
        
        
    },
    scrollView: {
       
    },
});

export default AboutScreen;

