
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        fontSize: 100,
        padding: 30,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 100,
        color:'#fff'
    }

})

export default props =>

<View style={styles.display}>
   <Text styles={styles.displayValue} numberOfLines={1}>{props.value}</Text>
</View>