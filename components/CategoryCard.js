import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgurl,title}) => {
  return (
    <TouchableOpacity className="relative mt-1">
        <Image source={{uri: imgurl}} className="w-20 h-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white text-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard