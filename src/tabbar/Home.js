import React from 'react';
import { 
    Text, View, 
    } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Home = ({route,navigation})=>{
    React.useEffect(() => {
        if (route.params?.post) {
            console.log(route.params.post)
        }
      }, [route.params?.post]);
    
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Home</Text>
            <TouchableOpacity style={{marginTop:20,backgroundColor:'#ffff00',}} onPress={()=>{
                navigation.navigate('Detail',{
                    'content': 'Page Detail Content'
                })
            }}>
                <Text style={{}}>go to detail</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginTop:20,backgroundColor:'#ffff00',}} onPress={()=>{
                // navigation.navigate('PostPage')
                navigation.push('Recommend')
            }}>
                <Text style={{}}>go to post</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;