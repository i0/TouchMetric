import React, {Component} from 'react';
import {Header, Text} from "react-native-elements";
import { View, StyleSheet, Image, PanResponder} from "react-native";
import logger from '../helpers/logger'

export default class Activity1 extends Component {
    state = {
      opacity_box2: 0,
      opacity_box3: 0,
      opacity_box4: 0
    }
    static navigationOptions = {
        title: 'Activity 1'
    };
    _panResponder: {};
    _previousLeft: 0;
    _previousTop: 0;
    _iconStyles: {};
    icon: null;
    view: null;
    componentWillMount() {

      const $ = this;
      let released = 1;
      this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: function(e, gestureState){
            logger(1, e.nativeEvent, 'start')
          },
          onMoveShouldSetPanResponder: function(){return true;},
          onPanResponderGrant: function(e, gestureState) {
              $._highlight();
          },
          onPanResponderMove: function(e, gestureState) {
            logger(1, e.nativeEvent, 'move')
              $._iconStyles.style.left = $._previousLeft + gestureState.dx;
              $._iconStyles.style.top = $._previousTop + gestureState.dy;
              $._updateNativeStyles();
          },
          onPanResponderRelease: function(e, gestureState){
            logger(1, e.nativeEvent, 'end')
              $._unHighlight();
              $._previousLeft += gestureState.dx;
              $._previousTop += gestureState.dy;
              released++;
              switch(released){
                case 2:
                  $.setState({opacity_box2: 1})
                  break;
                case 3:
                  $.setState({opacity_box3: 1})
                  break;
                case 4:
                  $.setState({opacity_box4: 1})
                  break;
                case 5:
                  setTimeout(function(){
                    $.props.navigation.navigate('Activity2');
                  }, 200);
                  break;
              }
          },
          onPanResponderTerminate: function(e, gestureState){
              $._unHighlight();
              $._previousLeft += gestureState.dx;
              $._previousTop += gestureState.dy;
          },
      });
      this._previousLeft = 20;
      this._previousTop = 84;
      this._iconStyles = {
          style: {
              left: this._previousLeft,
              top: this._previousTop,
              // backgroundColor: 'green',
          }
      };
    };
    _highlight() {
        // this._iconStyles.style.backgroundColor = 'blue';
        this._updateNativeStyles();
    };
    _unHighlight() {
        // this._iconStyles.style.backgroundColor = 'green';
        this._updateNativeStyles();
    };
    componentDidMount() {
      this._updateNativeStyles();
    };

    _updateNativeStyles() {
        this.icon && this.icon.setNativeProps(this._iconStyles);
    };
    saveLayout(){
      const $ = this;
      this.view.measureInWindow((x, y, width, height) => {
        $._previousLeft = x + (width/5);
        $._previousTop = y - (height/2);
        $._iconStyles.style.top = $._previousTop
        $._iconStyles.style.left = $._previousLeft
        $._iconStyles.style.opacity = 1
        $._updateNativeStyles();
      })
    };

    render() {
        return (
            <View>
                <Header centerComponent={{ text: 'Activity 1', style: { color: '#fff' } }} />
                <View style={styles.container}>
                  <View {...this._panResponder.panHandlers} style={{position: 'absolute', zIndex:99}}>
                    <Image ref={(icon) => { this.icon = icon; }} style={styles.icon} source={require('../images/plurilock.png')}/>
                  </View>
                    <Text style={styles.heading} h4>Drag and Move</Text>
                    <Text style={styles.instructions}>Please drag and drop the icon to the square 1 located at the
                        left top corner. After you
                        drag and drop the icon to the square labeled 1, you must drag it to the next square that appears,
                        which is 2, and so on. Once you have dragged and dropped the icon through all 4 squares you may move
                        on to the next activity.</Text>

                    <View style={styles.boxContainer}>

                        <View style={styles.row}>
                            <View style={[styles.box, styles.box1]}>
                                <Text style={styles.boxText}>1</Text>
                            </View>
                            <View style={[styles.box, styles.box2, {opacity: this.state.opacity_box2}]}>
                                <Text style={styles.boxText}>2</Text>
                            </View>
                        </View>
                        <View style={styles.middle}>
                          <View ref={ref => this.view = ref} style={[styles.iconHolder]} onLayout={() => this.saveLayout()}>
                          </View>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.box, styles.box3, {opacity: this.state.opacity_box3}]}>
                                <Text style={styles.boxText}>3</Text>
                            </View>
                            <View style={[styles.box, styles.box4, {opacity: this.state.opacity_box4}]}>
                                <Text style={styles.boxText}>4</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    icon: {
        width: 50,
        height: 50,
        zIndex:99,
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0
    },
    heading: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    instructions: {
        paddingTop: 5,
        fontSize: 12,
        lineHeight: 17
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 2,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxContainer: {
        marginTop: 10
    },
    box: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        zIndex: 1
    },
    box1: {
        backgroundColor: 'purple',
    },
    box2: {
        backgroundColor: 'blue',
    },
    box3: {
        backgroundColor: 'green',
    },
    box4: {
        backgroundColor: 'red',
    },
    iconHolder: {
        backgroundColor: '#ccc',
        borderRadius: 0,
        height: 90,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        zIndex: 0
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
