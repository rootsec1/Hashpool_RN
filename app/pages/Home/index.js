import React from 'react';
import {
    StyleSheet,
    StatusBar,
    Image,
    View
} from 'react-native';
import {
    ApplicationProvider,
    Layout,
    Button,
    Text,
    TopNavigation,
    BottomNavigation,
    BottomNavigationProps,
    BottomNavigationTab,
    BottomNavigationTabProps
} from 'react-native-ui-kitten';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
//LOCAL
import global from '../../global';
import Main from './Main';
import Categories from './Categories';
import Orders from './Orders';
import Settings from './Settings';

class Home extends React.Component {
    state = {
        selectedIndex: 0
    }

    constructor(props) {
        super(props);
        this.renderBottomTabLayout = this.renderBottomTabLayout.bind(this);
        this.renderContent = this.renderContent.bind(this);
    }

    render() {
        const {
            containerStyle,
            topNavigationStyle,
            titleTextStyle,
            subtitleTextStyle
        } = styles;

        return (
            <ApplicationProvider
                mapping={mapping}
                theme={lightTheme}
            >
                <StatusBar hidden />
                <Layout style={containerStyle}>
                    <TopNavigation
                        title='Hashpool'
                        subtitle='Big Bazaar JP Nagar'
                        alignment='center'
                        titleStyle={titleTextStyle}
                        subtitleStyle={subtitleTextStyle}
                        leftControl={<Ionicons name='md-menu' size={32} />}
                        rightControls={[
                            <AntDesign name='shoppingcart' size={32} />
                        ]}
                        style={topNavigationStyle}
                    />
                    { this.renderContent() }
                    { this.renderBottomTabLayout() }
                </Layout>
            </ApplicationProvider>
        );
    }

    renderContent() {
        const {
            contentStyle
        } = styles;
        switch(this.state.selectedIndex) {
            case 0: return <View style={contentStyle}><Main /></View>
            case 1: return <View style={contentStyle}><Categories /></View>
            case 2: return <View style={contentStyle}><Orders /></View>
            default: return <View style={contentStyle}><Settings /></View>
        }
    }

    renderBottomTabLayout() {
        const {
            subtitleTextStyle
        } = styles;

        return (
            <BottomNavigation
                selectedIndex={this.state.selectedIndex}
                onSelect={(selectedIndex) => this.setState({ selectedIndex: selectedIndex })}
                >
                <BottomNavigationTab title='Home' titleStyle={subtitleTextStyle} />
                <BottomNavigationTab title='Categories' titleStyle={subtitleTextStyle} />
                <BottomNavigationTab title='Orders' titleStyle={subtitleTextStyle} />
                <BottomNavigationTab title='Settings' titleStyle={subtitleTextStyle} />
            </BottomNavigation>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        paddingTop: 16
    },
    topNavigationStyle: {
        paddingLeft: 16,
        paddingRight: 16
    },
    titleTextStyle: {
        fontSize: 24,
        color: '#3D5AFE'
    },
    subtitleTextStyle: {
        fontSize: 16
    },
    contentStyle: {
        flex: 1
    }
});

export default Home;