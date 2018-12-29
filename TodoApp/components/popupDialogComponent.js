import React, { Component } from 'react';
import { 
        View, Text, Image, TouchableOpacity, TextInput,
        StyleSheet, Alert, Platform
    } from 'react-native';
import { insertNewTodoList, updateTodoList } from '../databases/Schemas';
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog';

export default class PopupDialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id=0,
            name: '',
            isAddNew: true
        }
    }
    render() {
        return(
            <PopupDialog
                dialogTitle={<DialogTitle title={dialogTitle} />}
                width={0.7} height={180}
                ref={"popupDialog"}
            >
                <View style={StyleSheet.container}>

                </View>
            </PopupDialog>
        )
    }
}