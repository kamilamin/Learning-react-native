import React from 'react';
import {Text} from 'react-native';

export const Header = () => {
    return(
        <Text style={styles.textStyle}>Albums</Text>
    )
};


const styles = {
    textStyle: {
        fontSize: 20
    }
}