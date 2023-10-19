import { SafeAreaView, StyleSheet, Text, View,FlatList,TextInput, ScrollView} from 'react-native';
import product_data from "./product_data.json";
import NewCard from "./components/PatiCard/PatiCard"

export default function App() {
  return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.header_text}>PATIKASTORE</Text>
        <TextInput style={styles.search_bar} placeholder='Ara...'></TextInput>
        </View>
        <ScrollView style={styles.scrollView}>
          <FlatList
          data={product_data}
          numColumns={2}
          renderItem={({item})=>(
            <NewCard
            imgURL={item.imgURL}
            title={item.title}
            price={item.price}
            inStock={item.inStock ? "":"STOKTA YOK"}
            ></NewCard>
          )}
          ></FlatList>
        </ScrollView>


      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginBottom:150,
  },
  header:{
    padding:10,
  },
  header_text:{
    color:"#800080",
    fontSize:25,
    fontWeight:"bold",
    margin:10,
    marginLeft:0
  },
  search_bar:{
    padding:10,
    backgroundColor:"#ECEFF1",
    borderRadius:10,
  },
  scrollView:{
    marginHorizontal:20,
  }
  
});


