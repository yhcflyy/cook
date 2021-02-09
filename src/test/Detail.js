import React from "react";
import { View , Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Detail = ({route,navigation})=>{
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'cyan'}}>
            <Text>Detail Page</Text>
            {/* <Text>{route.params['itemId']}</Text>
            <Text>{route.params['content']}</Text> */}
            <TouchableOpacity style={{marginTop:20}} onPress={()=>{
                // navigation.navigate('Detail')
                navigation.push('Detail')}}>
            <Text>goto detail</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop:20}} onPress={()=>{
                // navigation.navigate('Detail')
                // navigation.goBack()
                navigation.popToTop()
                }}>
            <Text>goback</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Detail;