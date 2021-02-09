import React,{ useEffect } from "react";
import { 
    Button,
    View,
} from "react-native";
import { TextInput } from "react-native";

const PostPage = ({route,navigation}) => {
    const [postText, setPostText] = React.useState('');
    useEffect(()=>{
        return () => {
            console.log("Behavior right before the component is removed from the DOM.");
        }
    },[])
    return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <TextInput style={{backgroundColor:'#ffff00',width:'100%',height:80}}
                      value={postText} onChangeText={setPostText}
           ></TextInput>
           <Button title='back' onPress={()=>{
               navigation.navigate('Home',{'post':postText})
           }}></Button>
       </View>
    )
}

export default PostPage;