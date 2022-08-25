import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import TailorWork from '../components/TailorWork';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    },[])

return (
<SafeAreaView>
    <View className="flex-row mt-7 ml-5 items-center space-x-3">
            <Image source={{uri: 'https://links.papareact.com/wru'}}
            className="w-7 h-7 bg-gray-300 p-5 rounded-full" />
            <View className="flex-1">
                <Text className="font-bold text-gray-600 text-sm">Template now</Text>
                <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
                
            </View>
            <UserIcon size={35} color="#00CCBB" />
    </View>

      {/*Search */}
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
            <SearchIcon color='gray' size={20} />
            <TextInput placeholder='Template search' keyboardType='default' />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
    </View>

      {/*Body */}
    <ScrollView className="bg-gray-100">
        {/*Categories */}
        <Categories />

        {/*TailorWork */}
        <TailorWork 
            id="123"
            title="Tailor Work" 
            description="Work of mju de Taylor" 
            />
        <TailorWork 
            id="1234"
            title="Stories" 
            description="Random stories from Mju De Taylor" 
            />
        <TailorWork 
            id="12345"
            title="Injury" 
            description="Awesome Injury brand by Mju De Taylor" 
            />

    </ScrollView>
</SafeAreaView>
);
};

export default HomeScreen;