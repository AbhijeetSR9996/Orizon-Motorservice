import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Date = () => {
    return (
        <>
            <Text style={styles.txt1}>Service Date</Text>
            <ScrollView horizontal={true} style={styles.ScrollViewContainer} >
                <View style={styles.ImageContain}>
                <View style={styles.View1}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>
                <View style={styles.View2}></View>

                    <Text style={styles.txtdate1}>01</Text>
                    <Text style={styles.txtdate2}>02</Text>
                    <Text style={styles.txtdate3}>03</Text>
                    <Text style={styles.txtdate4}>04</Text>
                    <Text style={styles.txtdate5}>05</Text>
                    <Text style={styles.txtdate6}>06</Text>
                    <Text style={styles.txtdate7}>07</Text>
                    <Text style={styles.txtdate8}>08</Text>
                    <Text style={styles.txtdate9}>09</Text>
                    <Text style={styles.txtdate10}>10</Text>
                    <Text style={styles.txtdate11}>11</Text>
                    <Text style={styles.txtdate12}>12</Text>
                    <Text style={styles.txtdate13}>13</Text>
                    <Text style={styles.txtdate14}>14</Text>
                    <Text style={styles.txtdate15}>15</Text>
                    <Text style={styles.txtdate16}>16</Text>
                    <Text style={styles.txtdate17}>17</Text>
                    <Text style={styles.txtdate18}>18</Text>
                    <Text style={styles.txtdate19}>19</Text>
                    <Text style={styles.txtdate20}>20</Text>
                    <Text style={styles.txtdate21}>21</Text>
                    <Text style={styles.txtdate22}>22</Text>
                    <Text style={styles.txtdate23}>23</Text>
                    <Text style={styles.txtdate24}>24</Text>
                    <Text style={styles.txtdate25}>25</Text>
                    <Text style={styles.txtdate26}>26</Text>
                    <Text style={styles.txtdate27}>27</Text>
                    <Text style={styles.txtdate28}>28</Text>
                    <Text style={styles.txtdate29}>29</Text>
                    <Text style={styles.txtdate30}>30</Text>

                    <Text style={styles.txtday1}>Sat</Text>
                    <Text style={styles.txtday2}>Sun</Text>
                    <Text style={styles.txtday3}>Mon</Text>
                    <Text style={styles.txtday4}>Tue</Text>
                    <Text style={styles.txtday5}>Wed</Text>
                    <Text style={styles.txtday6}>Thu</Text>
                    <Text style={styles.txtday7}>Fri</Text>
                    <Text style={styles.txtday8}>Sat</Text>
                    <Text style={styles.txtday9}>Sun</Text>
                    <Text style={styles.txtday10}>Mon</Text>
                    <Text style={styles.txtday11}>Tue</Text>
                    <Text style={styles.txtday12}>Wed</Text>
                    <Text style={styles.txtday13}>Thu</Text>
                    <Text style={styles.txtday14}>Fri</Text>
                    <Text style={styles.txtday15}>Sat</Text>
                    <Text style={styles.txtday16}>Sun</Text>
                    <Text style={styles.txtday17}>Mon</Text>
                    <Text style={styles.txtday18}>Tue</Text>
                    <Text style={styles.txtday19}>Wed</Text>
                    <Text style={styles.txtday20}>Thu</Text>
                    <Text style={styles.txtday21}>Fri</Text>
                    <Text style={styles.txtday22}>Sat</Text>
                    <Text style={styles.txtday23}>Sun</Text>
                    <Text style={styles.txtday24}>Mon</Text>
                    <Text style={styles.txtday25}>Sat</Text>
                    <Text style={styles.txtday26}>Sun</Text>
                    <Text style={styles.txtday27}>Mon</Text>
                    <Text style={styles.txtday28}>Tue</Text>
                    <Text style={styles.txtday29}>Wed</Text>
                    <Text style={styles.txtday30}>Thu</Text>

                </View>
            </ScrollView>
        </>
    )
}

export default Date

const styles = StyleSheet.create(
    {
        ScrollViewContainer: {
            backgroundColor: 'white',
            margin: 10,
            bottom:415
        },
        ImageContain: {
            flexDirection: 'row',
            padding: 10
        },
        View1:{
            height:80,
            width:60,
            borderWidth:1,
            borderColor:'grey',
            borderRadius:15,
            margin:3,
            marginStart:-5
        },
        View2:{
            height:80,
            width:60,
            borderWidth:1,
            borderColor:'grey',
            borderRadius:15,
            margin:3
        },
    
        txt1:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontWeight: 'bold', 
            fontSize: 18, 
            position: 'absolute', 
            paddingStart: 35,
            top:175 
        },

        txtdate1:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1 
        },
        txtdate2:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:67
        },
        txtdate3:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:132
        },
        txtdate4:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:197 
        },
        txtdate5:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:265
        },
        txtdate6:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:330 
        },
        txtdate7:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:396 
        },
        txtdate8:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:462 
        },
        txtdate9:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:529 
        },
        txtdate10:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:594
        },
        txtdate11:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:660 
        },
        txtdate12:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:725 
        },
        txtdate13:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:792 
        },
        txtdate14:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:857
        },
        txtdate15:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:923
        },
        txtdate16:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:989 
        },
        txtdate17:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1055 
        },
        txtdate18:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1122 
        },
        txtdate19:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1187
        },
        txtdate20:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1255 
        },
        txtdate21:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1322 
        },
        txtdate22:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1387 
        },
        txtdate23:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1452 
        },
        txtdate24:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1518
        },
        txtdate25:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1585
        },
        txtdate26:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1651 
        },
        txtdate27:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1717
        },

        txtdate28:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1783
        },
        txtdate29:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1850
        },
        txtdate30:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 25, 
            fontWeight: '900', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 10,
            top:12,
            left:1915 
        },

        txtday1:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1 
        },
        txtday2:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:67
        },
        txtday3:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:132
        },
        txtday4:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:197 
        },
        txtday5:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:265 
        },
        txtday6:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:330 
        },
        txtday7:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:396 
        },
        txtday8:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:462 
        },
        txtday9:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:529
        },
        txtday10:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:594
        },
        txtday11:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:660 
        },
        txtday12:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:725 
        },
        txtday13:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:792 
        },
        txtday14:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:857 
        },
        txtday15:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:923 
        },
        txtday16:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:989
        },
        txtday17:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1055 
        },
        txtday18:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1122
        },
        txtday19:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1187 
        },
        txtday20:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1255 
        },
        txtday21:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1322 
        },
        txtday22:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1387 
        },
        txtday23:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1452 
        },
        txtday24:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1518 
        },
        txtday25:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1585 
        },
        txtday26:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1651 
        },
        txtday27:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1717 
        },
        txtday28:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1783 
        },
        txtday29:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1850 
        },
        txtday30:{
            color: 'black', 
            textTransform: 'capitalize', 
            fontSize: 15, 
            fontWeight: '500', 
            position: 'absolute', 
            margin: 10, 
            paddingStart: 12, 
            top:50,
            left:1915 
        },

    }) 