import React, { Component } from 'react';
import { View, 
        FlatList, 
        Text, 
        TouchableOpacity,
        StyleSheet,
        Alert
} from 'react-native';

import { updateTodoList, deleteTodoList, queryAllTodoLists } from '../databases/Schemas';
import realm from '../databases/Schemas';
import Swipeout from 'react-native-swipeout';

let FlatListItem = props => {
    const { itemIndex, id, name, creationDate, popupDialogComponent, onPressItem } = props
    showEditModal = () => {

    }
    showDeleteConfirmation = () => {
        Alert.alert(
            'Delete',
            'Delete a todoList',
            [
                {
                    text: 'No', onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: "Yes", onPress: () => {

                    }
                },
            ],
            
        )
    }



    return(
        <Swipeout right={[
            {
                text:"Edit",
                backgroundColor:'rgb(81,134,237)',
                onPress: showEditModal
            },
            {
                text:"Delete",
                backgroundColor:'rgb(217,80,64)',
                onPress: showDeleteConfirmation
            }
        ]} autoClose={true}>

        </Swipeout>
    )
}


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: []
        };
    }
    reloadData = () => {
        queryAllTodoLists().then(( todoLists )  => {
            this.setState({ todoLists: todoLists });
        }).catch((error) => {
            this.setState({ todoLists: [] });
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderComponent />
                <FlatList 
                    style={styles.flatList}
                    data={this.state.todoLists}
                    renderItem={({ item, index }) => <FlatListItem {...item} itemIndex={index}
                        popupDialogComponent= {this.refs.popupDialogComponent}
                    onPressItem={() => {
                        alert("you press an item");
                    }} />}
                    keyExtractor={item => item.id}
                />
                <PopupDialogComponent ref={"popupDialogComponent"} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
    }
})