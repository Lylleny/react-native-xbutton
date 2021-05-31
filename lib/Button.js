
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import {APP_COLOR} from "../app-config";

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    textStyle:PropTypes.object,
    style: PropTypes.object,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    activeOpacity: PropTypes.number,
    image:PropTypes.element,
    isLoading:PropTypes.bool
};

const defaultButtonStyle = {
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:APP_COLOR //默认颜色和APP主色调一样
};
const defaultTextStyle = {
    color:'#fff',
    fontSize: 18
};

const Button = ({ onPress, disabled, textStyle, style, text, activeOpacity,image,isLoading }) => {
    let disabledButtonStyle = {};
    if (disabled) {disabledButtonStyle.backgroundColor = '#c4c4c4';}
    return (
        <TouchableOpacity
            style={[defaultButtonStyle,style,disabledButtonStyle]}
            onPress={isLoading ? null : onPress}
            disabled={disabled}
            activeOpacity={activeOpacity}
        >
            { !isLoading && image ? image : null }
            { !isLoading && image ? <View style={{width:5}}/> : null }
            { !isLoading ? <Text style={[defaultTextStyle,textStyle]}>{text}</Text> : null }
            { isLoading ? <ActivityIndicator size={'small'} color='#fff'/> : null }
        </TouchableOpacity>
    )};

Button.propTypes = propTypes;

Button.defaultProps = {
    onPress() {},
    disabled: false,
    activeOpacity: 0.7,
    isLoading:false,
};

export default Button;

