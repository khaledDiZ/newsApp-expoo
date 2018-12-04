import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    search(text = "iraq") {
        if (!text) {
            text = "iraq";
        }
        this.setState({ value: text });
        this.props.searchFun(text);
        console.log(text);
    }
    render() {
        return (
            <View style={{ flex: 0.15, backgroundColor: "greem" }}>
                <TextInput
                   onChangeText={this.search.bind(this)}
                   value={this.state.value}
                 />
            </View>
        );
    }
}