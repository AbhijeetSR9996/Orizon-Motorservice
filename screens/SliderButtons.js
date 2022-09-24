import React from 'react';
import { View,StyleSheet,Text,FlatList,Dimensions,Button} from 'react-native';
import Screen1 from './Screen1';

const SliderButtons = () => {
  return <MySlider/>;
};

 class MySlider extends React.Component {
  state = {
    data: [<Screen1/>,'B','C'],
  };

  currentIndex = 0;
  
  scrollFirst = () => {
    if(this.currentIndex !== 0) {
      this.flatListRef.scrollToIndex({
        index:this.currentIndex - 2, animated:true,
      });
    }
  };
  scrollSecond = () => {
    if(this.currentIndex !== this.state.data.length -2) {
      this.flatListRef.scrollToIndex({
        index:this.currentIndex  + 1, animated:true,
      });
    }};
  scrollThird = () => {
    if(this.currentIndex !== this.state.data.length -1) {
      this.flatListRef.scrollToIndex({
        index:this.currentIndex + 2, animated:true,
      });
    }
  };

  onViewableItemsChanged = ({viewableItems,changed}) => {
    if(changed[0].isViewable) {
      this.currentIndex = changed[0].index;
    }
  };

  render() {
    return  (
      <View style={styles.container}>
        <FlatList ref={ref => {this.flatListRef = ref;}}
        onViewableItemsChanged={this.onViewableItemsChanged}
        horizontal={true} pagingEnabled={true}
        data={this.state.data} renderItem={({item}) => (<Text key={item} style={styles.item}>{item}</Text>)}/>
      <View style={styles.buttonContainer}>
        <Button title={'First'} onPress={this.scrollFirst} />
        <Button title={'Second'} onPress={this.scrollSecond}/>
        <Button title={'Third'} onPress={this.scrollThird}/>

      </View>
      </View>
    );
  };
}

const styles = StyleSheet.create ({
  container:{
    flex:1,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    alignItems:'center'
  },
  item:{
    flex:1,
    fontSize:150,
    borderWidth:1,
    borderColor:'blue',
    width:Dimensions.get('window').width - 20,
  },
  buttonContainer:{
    justifyContent:'center',
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:10,
  },
});

export default SliderButtons;


