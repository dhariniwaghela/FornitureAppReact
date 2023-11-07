import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons'



const Home = () => {
  
  return (
    
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
        <Ionicons name='location-outline' size= {24}/>
        <View>
      <Text style={styles.textStyle}>Inter Black</Text>
      </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home

