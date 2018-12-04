import React, { Component } from 'react';
import { View } from 'react-native';
import { Constants } from 'expo';
import Header from '../components/header';
import SearchBar from '../components/searchBar';
import NewsList from '../components/newsList';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }





        componentDidMount() {
            this.search("iraq")
        }

        

        search(q){
            fetch(
                `https://newsapi.org/v2/everything?q=${q}&apiKey=aa6e134256da400ab70f257ea8f0b920`
            )
            .then(res => res.json())
            .then(news => {
                this.setState({ news :news.articles});
            }).catch((err)=>{
                console.log(err)
            });
        }





        updateParent(data){
            this.setState(data)
        };





        render() {
            return (
                <View style={{ flex: 1, marginTop: Constants.statusBarHeight}}>
                    <Header />
                    <SearchBar searchFun={this.search.bind(this)}/>
                    <NewsList news={this.state.news}/>
                </View>
            );
        }
    


}