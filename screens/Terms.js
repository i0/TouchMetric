import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, AsyncStorage, Alert} from "react-native";
import {Header, Text, Button, CheckBox} from "react-native-elements";

export default class Terms extends Component {
    static navigationOptions = {
        title: 'Submit'
    };

    constructor(props) {
        super(props);
        this.state = {agreed: false, disabledBtn: true}
    };

    agreed() {
        console.log(this.state.agreed)
        this.setState({agreed: !this.state.agreed, disabledBtn: this.state.agreed})
    }

    continue() {
        AsyncStorage.setItem('agreed', '1');
        this.props.navigation.navigate('Instructions')
    }

    render() {
        return (
            <ScrollView style={[styles.container, {padding: 15}]}>
                <Text style={styles.heading} h4>Terms and Conditions</Text>
                <Text style={styles.instructions}>
                    We cordially invite you to participate in our research study involving mobile application touch
                    behavior. The study involves installing a mobile application and interacting with it in various ways
                    (typing, using gestures, etc.). The experiment is estimated to take 10-15 minutes. We will not
                    collect any personal identifiable data during the study (further details below). Any data we collect
                    will be confidential and will be used to develop a continuous authentication security feature to
                    differentiate between authorized users from unauthorized users to prevent the unauthorized entities
                    from physically using the authorized user’s device. Any participant data we collect will be deleted
                    at the participant’s request (further details below). This study has been cleared by the University
                    of Windsor’s Research Ethics Board.
                    {"\n"}{"\n"}If you are interested in participating or for any additional information, please email
                    Dr. Saeed Samet at Saeed.Samet@uwindsor.ca . Thank you for your time, we really appreciate it! The
                    study details are as follows:
                    {"\n"}{"\n"}PURPOSE OF THE STUDY
                    {"\n"}{"\n"}The purpose of this research is to study a continuous authentication security feature
                    based on biometric touch information. The application collects the touch behaviors of participants
                    and stores the touch data on our servers. We will use this data to detect the patterns and design a
                    new non-intrusive continuous authentication mechanism. The data will help us conduct analysis using
                    machine learning techniques to form anonymized unique user touch behavior profiles which can be used
                    to establish the efficacy of the continuous authentication features’ ability to distinguish whether
                    the phone or application is being used by the authorized user or an unauthorized third party.
                    {"\n"}{"\n"}PROCEDURES
                    {"\n"}{"\n"}If you volunteer to participate in this study, you will be asked to do several simple
                    tasks and the application will collect the following touch and screen attributes during the tasks:
                    pressure, size, touch location, duration, speed, screen orientation and pressed keys
                    {"\n"}{"\n"}CONFIDENTIALITY
                    {"\n"}{"\n"}The application will not store any device identification data, location, any personal
                    user identification data, or any data from your device used beyond the scope of the application
                    mentioned. Data will only be stored locally on your device until you provide consent to participate,
                    complete the experiment, and submit the data at the end through a confirmation page. We will not
                    collect any personal data about you and will not ask for you name, e-mail or passwords.


                    {"\n"}{"\n"}PARTICIPATION AND WITHDRAWAL
                    {"\n"}{"\n"}Once you have submitted your data, you will not be able to remove your data as we will
                    not be able to connect you to your data. You may withdraw from participating any time while before
                    submitting your data.
                    {"\n"}{"\n"}FEEDBACK OF THE RESULTS OF THIS STUDY TO THE PARTICIPANTS
                    {"\n"}{"\n"}A feedback of this research will be available to participants on 18/08/30 through the
                    REB research summary website www.uwindsor.ca/REB.
                    {"\n"}{"\n"}SUBSEQUENT USE OF DATA
                    {"\n"}{"\n"}These data may be used in subsequent studies, in publications, and in presentations
                    {"\n"}{"\n"}RIGHTS OF RESEARCH PARTICIPANTS
                    {"\n"}{"\n"}If you have any questions regards your rights as a research participant, contact:
                    Research Ethics Coordinator, University of Windsor, Windsor, Ontario, N9B 3P4; Telephone:
                    519-253-3000, ext: 3948; email: ethics@uwindsor.ca

                </Text>
                <View>
                    <CheckBox
                        title='I agree to the terms of service'
                        checked={this.state.agreed}
                        onPress={() => {
                            this.agreed()
                        }}
                    />
                    <Button icon={{name: 'check', color: 'white'}}
                            disabled={this.state.disabledBtn}
                            title="Agree and Continue"
                            buttonStyle={{
                                backgroundColor: "rgba(34, 99,216, 1)",
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5,
                                height: 40
                            }}
                            onPress={() => {
                                this.continue()
                            }}
                            textStyle={{fontSize: 13, textAlign: 'center', fontWeight: '500'}}
                            style={{margin: 20}}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
        textAlign: 'center'
    },
    instructions: {
        paddingTop: 10,
        fontSize: 15,
        lineHeight: 17
    },
    text: {
        lineHeight: 25
    },
    bold: {
        fontWeight: 'bold'
    },
    center: {
        textAlign: 'center'
    }
});
