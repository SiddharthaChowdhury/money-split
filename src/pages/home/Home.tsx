import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from '../../../redux/IState';

interface IHomeState {};
interface IHomeDispatch {};
interface IHomeProps extends IHomeState, IHomeDispatch {}

const HomeView: React.FC<IHomeProps> = () => {
    return(
        <View>
            <Text>Welcome Home</Text>
        </View>
    )
} 

const mapState = (state: IState): IHomeState => ({});
const mapDispatch = (dispatch: Dispatch): IHomeDispatch => ({});
const Home = connect(mapState, mapDispatch)(HomeView);

export default Home;