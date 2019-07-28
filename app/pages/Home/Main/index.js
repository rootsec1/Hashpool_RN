import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Layout,
    Text
} from 'react-native-ui-kitten';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.renderAds = this.renderAds.bind(this);
        this.renderRecentPurchases = this.renderRecentPurchases.bind(this);
        this.renderPopular = this.renderPopular.bind(this);
    }

    render() {
        const {
            containerStyle
        } = styles;

        return (
            <Layout style={containerStyle}>
                { this.renderAds() }
                { this.renderRecentPurchases() }
                { this.renderPopular() }
            </Layout>
        );
    }

    renderAds() {
        return (
            <View>
                <Text category='h4' status='primary'>{ 'Featured' }</Text>
            </View>
        );
    }

    renderRecentPurchases() {
        return (
            <View>
                <Text category='h4' status='primary'>{ 'Recent Purchases' }</Text>
            </View>
        );
    }

    renderPopular() {
        return (
            <View>
                <Text category='h4' status='primary'>{ 'Popular' }</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    } 
});

export default Main;