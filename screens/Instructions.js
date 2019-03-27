import React, {Component} from 'react';
import {Button, Card, Text} from "react-native-elements";
import {Image, ScrollView, View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Instructions extends Component {
    constructor(props) {
        super(props);
        // this.props.navigation.navigate('Terms')
    };
    startButtonPress = () => {
        this.props.navigation.navigate('Activities');
    };

    render() {
        return (
            <ScrollView>
                <Card>
                    <Text style={styles.instructions}>
                        This study involves installing a mobile application and interacting with it in various ways
                        (typing, using gestures, etc.). The experiment is estimated to take 10-15 minutes. We will not
                        collect any personal identifiable data during the study. Any data we collect will be
                        confidential and anonymous, you will not be identified in any way. This study has been approved
                        by the University of Windsor’s Research Ethics Board.
                        {"\n\n"}
                        Please complete the following activities on each page:
                        {"\n\n"}
                        The first screen contains an icon which you will be required to drag and drop to the 4 specified
                        squares located at each corner of the screen in order, labeled by 1, 2, 3, and 4. After you drag
                        and drop the icon to the square labeled "1", you must drag it to the next square that appears,
                        which is "2", and so on. Once you have dragged and dropped the icon through all 4 squares you
                        may move on to the next activity.
                        {"\n\n"}On the second screen, you will interact with several swipe bars to drag the cursor to
                        the specified percent.
                        {"\n\n"}On the third screen you will be asked to input various text entries (words, numbers,
                        letters.

                        {"\n\n"}Once you have completed the activities, swipe to the last page where you may review the
                        submission options.
                        {"\n\n"}Press the submit button to complete the submission of the data. Thank you for your time,
                        we really appreciate it!
                    </Text>
                    <Button
                        onPress={this.startButtonPress}
                        title="Start"
                        titleStyle={{fontWeight: "700"}}
                        buttonStyle={styles.startButton}
                        containerStyle={{marginTop: 20}}
                    />
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    startButton: {
        backgroundColor: "#0076f4",
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    },
    instructions: {
        padding: 10,
        lineHeight: 20,
        color: '#555'
    }
});