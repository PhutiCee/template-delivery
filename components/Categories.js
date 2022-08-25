import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        <CategoryCard imgurl={'https://links.papareact.com/gn7'} title="Test1" />
        <CategoryCard imgurl={'https://links.papareact.com/wru'} title="Test2" />
        <CategoryCard imgurl={'https://links.papareact.com/gn7'} title="Test1" />
        <CategoryCard imgurl={'https://links.papareact.com/wru'} title="Test2" />
        <CategoryCard imgurl={'https://links.papareact.com/gn7'} title="Test1" />
        <CategoryCard imgurl={'https://links.papareact.com/wru'} title="Test2" />
        <CategoryCard imgurl={'https://links.papareact.com/wru'} title="Test3" />
    </ScrollView>
  )
}

export default Categories