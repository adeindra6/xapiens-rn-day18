import React from 'react';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {QUERY_USERTASK} from '@config/graphql/Query/usertask';

const ListComponent = (props) => {
    const {loading, data, error} = useQuery(QUERY_USERTASK);
    console.log(data);

    return(
        <View>
            {loading && <Text>Sedang mengambil data...</Text>}
            {!loading && Object.keys(data).length > 0 && (
                <FlatList
                    data={data.user}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity>
                                <Text>{item.usertask.task}: {item.name}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
            )}
        </View>
    );
};

export default ListComponent;