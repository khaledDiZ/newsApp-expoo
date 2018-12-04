import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class NewsItem extends Component {
    render() {
        let { item } = this.props;
        const { description, publishedAt, title, urlToImage } = item;
        return (
            <View style={styles.iitemNewsContainer}>
                <Image
                   style={styles.image}
                   resizeMode="cover"
                   source={{ url: urlToImage }}
                 />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>{description}</Text>
                    <Text style={styles.title}>{publishedAt}</Text>
                </View>
            </View>
        );    
    }
}

const styles = StyleSheet.create({
    iitemNewsContainer: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "red"
    },
    image: { height: 40, width: 95 },
    title: { marginLeft: 20 }
});