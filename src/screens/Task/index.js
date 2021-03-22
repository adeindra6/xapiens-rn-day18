import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {TitleComponent, ListComponent} from '@components';
import {GraphQLProvider} from '../../config/apollo';

const TaskScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        navigation.openDrawer();
    }, []);

    return(
        <GraphQLProvider>
            <View style={styles.bg}>
                <TitleComponent title="Todo Apps" />
                <ListComponent />
            </View>
        </GraphQLProvider>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'indigo',
    },
});

export default TaskScreen;