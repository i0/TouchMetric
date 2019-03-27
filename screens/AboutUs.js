import React, {Component} from 'react';
import {Avatar, Card, Divider, Text} from "react-native-elements";
import {Image, View, StyleSheet, ScrollView} from "react-native";

export default class AboutUs extends Component {
    render() {
        return (
            <ScrollView>
                <Card title="Dr. Saeed Samet">
                    <View>
                        <View style={styles.heading}>
                            <Avatar
                                large
                                rounded
                                source={require('../images/samet.png')}
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.7}
                            />
                            <Text style={styles.headingText}>
                                School of Computer Science
                                {"\n"}
                                University of Windsor
                            </Text>
                        </View>
                        <Divider style={styles.divider}/>
                        <View style={styles.row}>
                            <Text style={styles.item}>
                                <Text style={styles.key}>Email: </Text>
                                ssamet@uwindsor.ca
                            </Text>
                            <Divider style={styles.divider}/>
                            <Text style={styles.item}>
                                <Text style={styles.key}>Mobile: </Text>
                                (519) 253-3000</Text>
                            <Divider style={styles.divider}/>
                            <Text style={styles.item}>
                                <Text style={styles.key}>Extension: </Text>
                                3782</Text>
                            <Divider style={styles.divider}/>
                            <Text style={styles.item}>
                                <Text style={styles.key}>Address: </Text>
                                #5102 - Lambton Tower, Windsor, Ontario
                            </Text>
                            <Divider style={styles.divider}/>
                            <Text style={styles.item}>
                                <Text style={styles.key}>Postal Code: </Text>
                                N9B 3P4
                            </Text>
                        </View>
                    </View>
                </Card>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    divider: {
        marginTop: 10,
        marginBottom: 10
    },
    heading: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        marginTop: 15,
        marginBottom: 10,
        color: "gray",
        lineHeight: 20,
        fontSize: 13,
        textAlign: 'center'
    },
    row: {
        flex: 1
    },
    key: {
        fontWeight: 'bold',
    },
    item: {
        color: "gray",
        fontSize: 13,
    },
});