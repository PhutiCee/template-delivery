import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const WorkCard = ({id,imgUrl,title,rating,price,short_description,long,lat}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{uri: imgUrl,}} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="text-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text>
            <Text>{rating}</Text> . R{price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default WorkCard