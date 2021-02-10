import React from 'react'
import {
    FlatList,
    View,
    Text,
    Image,
    SafeAreaView,
    Dimensions,
    StyleSheet,
} from 'react-native'

const screenW = Dimensions.get('window').width;
const cols = 2; // 列数
const left = 10; // 左右边距
const top = 10; // 上下边距
const ImageWH = (screenW - (cols + 1) * left) / cols; // 图片大小


class Recommend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        fetch('https://api.xiachufang.com/v2/homepage1810/paged_waterfall_recommendations.json?_ts=1612968351.507698&api_key=07397197043fafe11ce5c65c10febf84&api_sign=a06d8bb73c9eaad6dc52d88d07c6b170&cursor=&location_code=156510100000000&nonce=D1B2656E-FF42-47DA-BB1A-03ADB35C60F7&origin=iphone&size=20&sk=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOjEwNDMzODcxMSwidWlkIjoxMjM0NDExOTksImlhdCI6MTYxMjM2NjgwNC4wLCJvIjoyfQ.7Qg6kwCJDGnZWgdlfSw49KjRO31n5PO2kVpc3HP6Xz4&timezone=Asia/Shanghai&version=237.7.7&webp=1',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then((result) => {
                var arr = new Array()
                result.content.recommendations.forEach(element => {
                    if (typeof (element.object.title_1st) !== "undefined") {
                        arr.push(element)
                    }
                });
                this.setState({
                    dataList: arr
                })
            })
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <FlatList data={this.state.dataList}
                        renderItem={this.renderItem.bind(this)}
                        keyExtractor={item => item.object.identification}
                        numColumns={2}>
                    </FlatList>
                </View>
            </SafeAreaView>
        )
    }

    renderItem(item) {
        return <View style={styles.itemStyle}>
            <Image style={{
                width: ImageWH,
                height: ImageWH
            }} source={{ 'uri': 'https://i2.chuimg.com/' + item.item.object.image.ident + '?imageView2/1/w/160/h/160/q/90/format/webp'}}></Image>
            <Text numberOfLines={2} lineBreakMode='tail'>{item.item.object.title_1st}</Text>
        </View >
    }
}

const styles = StyleSheet.create({
    itemStyle : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        width : ImageWH,
        height : ImageWH + 50
    }
})

export default Recommend;