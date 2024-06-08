import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

interface AboutUsProps {
    reset: () => void;
}

export default function AboutUs({ reset }: AboutUsProps) {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerContent}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerTitle}>Elevate Your Images with Emoji Edits</Text>
                        <Text style={styles.headerSubtitle}>
                            Easily add fun and expressive emojis to your photos and images. Unleash your creativity and make your visuals stand out.
                        </Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={reset}>Experience Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={require('../assets/images/unnamed.png')} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Meet the OG Emoji Edits Creator</Text>
                <View style={styles.teamContainer}>
                    <View style={styles.teamMember}>
                        <Image source={require('../assets/images/Soumitra-Mishra.jpeg')} style={styles.teamImage} />
                        <Text style={styles.teamName}>Soumitra Mishra</Text>
                        <Text style={styles.teamRole}>Creator</Text>
                        <Text style={styles.teamDescription}>
                            Soumitra Mishra is a passionate Teacher who loves teaching.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Features</Text>
                <Text style={styles.sectionSubtitle}>
                    Emoji Edits offers a range of powerful features to help you enhance your images and express your creativity.
                </Text>
                <View style={styles.featuresContainer}>
                    <View style={styles.feature}>
                        <View style={styles.featureIconContainer}>
                            <BrushIcon style={styles.featureIcon} />
                        </View>
                        <Text style={styles.featureTitle}>Add Emojis</Text>
                        <Text style={styles.featureDescription}>
                            Easily add fun and expressive emojis to your images to enhance your visuals.
                        </Text>
                    </View>
                    <View style={styles.feature}>
                        <View style={styles.featureIconContainer}>
                            <ShareIcon style={styles.featureIcon} />
                        </View>
                        <Text style={styles.featureTitle}>Download Easily</Text>
                        <Text style={styles.featureDescription}>
                            Download your edited images directly.
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>&copy; 2024 Emoji Edits. All rights reserved.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(3 7 18)',
        padding: 20,
    },
    headerContainer: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#00b894',
        borderBottomWidth: 2,
    },
    headerContent: {
        flexDirection: width > 600 ? 'row' : 'column',
        alignItems: width > 600 ? 'center' : 'center',
        justifyContent: 'center',

    },
    headerTextContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        color: '#ffffff',
        fontSize: width * 0.06,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    headerSubtitle: {
        color: '#cccccc',
        fontSize: width * 0.04,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#00b894',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 26,
    },
    headerImage: {
        borderRadius: 50,
        width: width > 600 ? 400 : width * 0.8,
        height: width > 600 ? 400 : width * 0.8,
        marginTop: 20,
    },
    section: {
        marginTop: 20,
        alignItems: 'center',
        borderBottomColor: '#00b894',
        borderBottomWidth: 2,
    },
    sectionTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 50,
        fontSize: width * 0.03,
    },
    sectionSubtitle: {
        color: '#cccccc',
        fontSize: width * 0.015,
    },
    teamContainer: {
        flexDirection: 'row',
        marginTop: 20,
        flexWrap: 'wrap',

    },
    teamMember: {
        marginRight: 20,
        marginBottom: 20,
        maxWidth: '48%',

    },
    teamImage: {
        width: 200,
        height: 200,
        borderRadius: 50,
        marginLeft: 120,
        marginBottom: 30,
    },
    teamName: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 8,
        fontSize: width * 0.02,
    },
    teamRole: {
        color: '#cccccc',
        marginBottom: 8,
        fontSize: width * 0.02,
    },
    teamDescription: {
        color: '#cccccc',
        marginBottom: 8,
        fontSize: width * 0.01,
    },
    featuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        marginLeft: 100,
    },
    feature: {
        marginRight: 20,
        marginBottom: 20,
        maxWidth: '48%',
    },
    featureIconContainer: {
        backgroundColor: '#00b894',
        width: 70,
        height: 70,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    featureIcon: {
        width: 24,
        height: 24,
        color: '#ffffff',
    },
    featureTitle: {
        color: '#ffffff',

        fontWeight: 'bold',
        marginTop: 5,
        fontSize: width * 0.02,
    },
    featureDescription: {
        color: '#cccccc',
        fontSize: width * 0.02,
    },
    socialLinksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
    },
    socialLink: {
        backgroundColor: '#00b894',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    socialLinkText: {
        color: '#ffffff',
        textAlign: 'center',
    },
    footer: {
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 20,
    },
    footerText: {
        color: '#cccccc',
    },
});
interface SvgProps {
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: React.CSSProperties;
}

function BrushIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CloudIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ExpandIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 16.2V21m0 0h4.8M3 21l6-6"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 7.8V3m0 0h-4.8M21 3l-6 6"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 7.8V3m0 0h4.8M3 3l6 6"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function FilterIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <polygon
                points="22 3 2 3 10 12.46 10 19 14 21 14    14 12.46 22 3"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ScalingIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M14 15H9v-5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 3h5v5"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 3 9 15"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ShareIcon(props:SvgProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <polyline
                points="16 6 12 2 8 6"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <line
                x1="12"
                x2="12"
                y1="2"
                y2="15"
                stroke="#000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
