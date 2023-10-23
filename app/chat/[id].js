import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router';

import { ArrowLeftIcon, UserIcon, VideoCameraIcon, PhoneIcon, EllipsisVerticalIcon, FaceSmileIcon, PaperClipIcon, CameraIcon } from 'react-native-heroicons/outline'
import { MicrophoneIcon, PaperAirplaneIcon } from 'react-native-heroicons/solid'

const Detail = () => {
  const { id } = useLocalSearchParams();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [dummyChatSpecial, setdummyChatSpecial] = useState([
    {
      message: 'Assalamualaikum',
      sender: true
    },
  ])
  const [dummyChat, setdummyChat] = useState([
    {
      message: 'p',
      sender: true
    },
    {
      message: 'ngops ?',
      sender: true
    },
  ])
  const [chat, setchat] = useState('')

  return (
    <View
      className='items-center relative flex-1'
    >
      {/* status bar */}
      <StatusBar style='light' translucent={false} backgroundColor='#008069'/>

      {/* navbar */}
      <View
        className='bg-[#008069] flex-row py-3 items-center justify-between w-full z-20'
      >
        {/* kanan */}
        <View
          className='flex-row items-center mx-3'
        >
          {/* icon back */}
          <TouchableOpacity
            className='mr-2'
            onPress={() => {
              router.push('/')
            }}
          >
            <View>
              <ArrowLeftIcon color={'#fff'} size={25}/>
            </View>
          </TouchableOpacity>

          {/* avatar */}
          <View
            className='mr-3'
          >
            {
              id === '0' ?
                <Image source={require('../../assets/image/pp1.jpg')} className='object-cover w-[40px] h-[40px] rounded-full'/>
              :
                <View
                  className='bg-[#cfd7da] rounded-full p-2'
                >
                  <UserIcon fill={'#fff'} size={25}/>
                </View>
            }
          </View>

          <View>
            <Text className='text-xl text-white font-semibold'>{id === '0' ? 'Quran ♡' : `Teman ${id}`}</Text>
          </View>
        </View>

        {/* kiri */}
        <View
          className='flex-row justify-between w-[130px]'
        >
          {/* icon video */}
          <TouchableOpacity>
            <VideoCameraIcon fill={'#fff'} size={25}/>
          </TouchableOpacity>

          {/* phone icon */}
          <TouchableOpacity>
            <PhoneIcon fill={'#fff'} size={25}/>
          </TouchableOpacity>

          {/* icon menu dots */}
          <TouchableOpacity>
            <EllipsisVerticalIcon color={'#fff'} size={25}/>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* bg */}
      <Image source={require('../../assets/image/bg_chat.png')} style={{width: windowWidth+70, height: windowHeight+70, position: 'absolute'}} resizeMode="contain"/>

      <View
        className='absolute top-0 w-full h-full z-10 mt-16'
      >
        <ScrollView>
          {/* first chat */}
          <View
            className='bg-[#FEEECC] mx-5 p-3 rounded-xl my-3'
          >
            <Text className='text-center text-[#54666A]'>🔒 Pesan dan panggilan dienkripsi secara end-to-end. Tidak seorang pun di luar chat ini, termasuk WhatsApp, yang dapat membaca atau mendengarkannya. Ketuk untuk info selengkapnya.</Text>
          </View>

          <View
            className='mb-36'
          >
            {
              (id === '0' ? dummyChatSpecial : dummyChat).map((res, index) => {
                return(
                  <View
                    key={index+'chat'}
                    className={`my-1 mx-3 justify-center ${res.sender === false ? 'items-end' : 'items-start'}`}
                  >
                    <View
                      className={`${res.sender === false ? 'bg-[#E6FFDB]' : 'bg-white'} py-3 px-2 rounded-lg w-fit max-w-[85%] relative`}
                    >
                      <View className={`${res.sender === false ? 'bg-[#E6FFDB] -right-1 rounded-tr-md rounded-br-full' : 'bg-white -left-1 rounded-tl-md rounded-bl-full'} w-5 h-3 absolute top-0`}></View>
                      <View
                        className='flex-row items-end'
                      >
                        <Text className='max-w-[85%] mb-5 text-base'>{res.message}</Text>
                        <View
                          className='flex-row'
                        >
                          <Text className={`text-[#8AA088] text-xs `}>12.00</Text>
                          {
                            !res.sender &&
                            <Image source={require('../../assets/image/mark.png')} className='w-[20px] h-[20px]'/>
                          }
                        </View>
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>

      {/* input */}
      <View
        className='absolute bottom-3 z-50 w-[98%] flex-row justify-between items-center'
      >
        {/* input text */}
        <View
          className='bg-white p-3 rounded-full w-[85%] flex-row items-center justify-between overflow-hidden'
        >
          {/* kanan */}
          <View
            className='flex-row items-center'
          >
            <TouchableOpacity>
              <FaceSmileIcon color={'#84969F'} size={30}/>
            </TouchableOpacity>
            <TextInput
              onSubmitEditing={async() => {
                if (id === '0') {
                  const newArray = [
                    ...dummyChatSpecial,
                    {
                      message: chat,
                      sender: false
                    }
                  ]
                  await setdummyChatSpecial(newArray)
                } else{
                  const newArray = [
                    ...dummyChat,
                    {
                      message: chat,
                      sender: false
                    }
                  ]
                  await setdummyChat(newArray)
                }
                setchat('')
              }}
              className={`ml-3 text-lg w-[170px]`}
              placeholder="Ketik Pesan"
              placeholderTextColor={'#84969F'}
              onChangeText={(text) => setchat(text)}
              value={chat}
            />
          </View>

          {/* kiri */}
          <View
            className={`flex-row justify-between items-center w-[70px] transition duration-300 ease-in-out ${chat && 'm-[-40px]'}`}
          >
            <TouchableOpacity>
              <PaperClipIcon color={'#84969F'} size={30}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <CameraIcon color={'#84969F'} size={30}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* input audio */}
        <View>
          {
            chat ?
            <TouchableOpacity
              className='bg-[#00A884] p-3 rounded-full'
              onPress={async() => {
                if (id === '0') {
                  const newArray = [
                    ...dummyChatSpecial,
                    {
                      message: chat,
                      sender: false
                    }
                  ]
                  await setdummyChatSpecial(newArray)
                } else{
                  const newArray = [
                    ...dummyChat,
                    {
                      message: chat,
                      sender: false
                    }
                  ]
                  await setdummyChat(newArray)
                }
                setchat('')
              }}
            >
              <PaperAirplaneIcon fill={'#fff'} size={25}/>
            </TouchableOpacity>
            :
            <TouchableOpacity
              className='bg-[#00A884] p-3 rounded-full'
            >
              <MicrophoneIcon fill={'#fff'} size={25}/>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  )
}

export default Detail