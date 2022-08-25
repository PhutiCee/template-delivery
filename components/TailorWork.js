import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import WorkCard from './WorkCard'

const TailorWork = ({id,title,description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4">
                {/*WorkCard */}
                <WorkCard 
                    id="123" 
                    imgurl="https://cdn.pixabay.com/photo/2022/07/10/19/28/mountains-7313638_960_720.jpg"
                    title="T-shirt"
                    rating={4.5}
                    price={150}
                    short_description="Short description"
                    long={20}
                    lat={0} />
                <WorkCard 
                    id="123" 
                    imgurl="https://links.papareact.com/wru"
                    title="T-shirt"
                    rating={4.5}
                    price={150}
                    short_description="Short description"
                    long={20}
                    lat={0} />
        </ScrollView>
    </View>
)
}

export default TailorWork