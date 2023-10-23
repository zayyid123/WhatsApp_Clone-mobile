import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { router } from 'expo-router';

// icon
import { UserIcon } from 'react-native-heroicons/outline'

const ChatScreen = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ backgroundColor: 'white' }}
      >
        {
          [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((res, index) => {
            return(
              <TouchableOpacity
                key={index+'chat'}
                className='p-3 flex-row justify-between items-center'
                onPress={() => {
                  router.push(`/chat/${index}`)
                }}
              >
                {/* kanan */}
                <View
                  className='flex-row items-center'
                >
                  {/* icon user */}
                  <View>
                    {
                      index === 0 ?
                      <View
                        className='mr-4'
                      >
                        <Image source={require('../assets/image/pp1.jpg')} className='object-cover w-[45px] h-[45px] rounded-full'/>
                      </View>
                      :
                      <View
                        className='bg-[#cfd7da] rounded-full p-2 mr-4'
                      >
                        <UserIcon fill={'#fff'} size={30}/>
                      </View>
                    }
                  </View>

                  <View>
                    {
                      index === 0 ?
                      <View>
                        <Text className='font-semibold text-lg'>Quran ♡</Text>
                        <Text className='text-[#98A0A3]'>Assalamualaikum</Text>
                      </View>
                      :
                      <View>
                        <Text className='font-semibold text-lg'>Teman {index}</Text>
                        <Text className='text-[#98A0A3]'>Ngops ?</Text>
                      </View>
                    }
                  </View>
                </View>

                {/* kiri */}
                <View>
                  {
                    index === 0 ?
                    <View className='items-center'>
                      <Text className='text-[#157a3cd5] font-semibold'>12.00</Text>
                      <View className='bg-[#23D467] px-[5px] rounded-full mt-1'>
                        <Text className='text-[#ffffff]'>1</Text>
                      </View>
                    </View>
                    :
                    <Text className='text-[#98A0A3]'>Kemarin</Text>
                  }
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>

      {/* new chat */}
      <TouchableOpacity
        className='absolute bottom-6 right-3 bg-[#008267] p-4 rounded-2xl'
      >
        <View
          className='bg-[#FDFDF9] w-[25px] h-[22px] rounded-lg items-center justify-center relative'
        >
          <View className='absolute bg-[#FDFDF9] w-3 h-3 top-0 right-[-2px] rounded-br-full'></View>
          <View className='bg-[#008267] w-[15px] h-[2px] mt-[1.5px] mb-[.1px]'></View>
          <View className='bg-[#008267] w-[15px] h-[2px] mt-[1.5px]'></View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ChatScreen