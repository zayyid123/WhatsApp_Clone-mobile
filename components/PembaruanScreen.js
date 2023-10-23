import { View, Text, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'

// svg
import { EllipsisVerticalIcon, PlusIcon, ArrowLeftIcon } from 'react-native-heroicons/outline'
import { CameraIcon, PencilIcon } from 'react-native-heroicons/solid'
import ModalStatus from './ModalStatus'

const PembaruanScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View
      className='flex-1 relative'
    >
      <ScrollView
        contentContainerStyle={{ backgroundColor: '#fff', flex: 1 }}
      >
        {/* title */}
        <View
          className='mx-3 flex-row justify-between items-center mt-4'
        >
          <Text className='font-bold text-lg'>Status</Text>
          <TouchableOpacity>
            <EllipsisVerticalIcon color={'#A0ABAD'} size={30}/>
          </TouchableOpacity>
        </View>

        {/* add sattus */}
        <TouchableOpacity
          className='mx-3 my-4 flex-row items-center'
        >
          {/* avatar */}
          <View
            className='flex-row items-end'
          >
            {/* image */}
            <View>
              <Image source={require('../assets/image/saya.jpg')} className='object-cover w-[50px] h-[50px] rounded-full' />
            </View>

            {/* icon add */}
            <View
              className='bg-[#00A67F] rounded-full border-2 border-white ml-[-20px]'
            >
              <PlusIcon color={'#fff'} size={20}/>
            </View>
          </View>

          {/* text */}
          <View
            className='ml-3'
          >
            <Text className='font-bold text-base'>Status Saya</Text>
            <Text className='text-[#A0ABAD]'>Ketuk untuk memperbarui status</Text>
          </View>
        </TouchableOpacity>

        {/* pembaruan terkini*/}
        <View
          className='mx-3'
        >
          <Text className='text-[#7d858a] font-semibold'>Pembaruan Terkini</Text>
        </View>

        {/* status */}
        <TouchableOpacity
          className='mx-3 mt-4 flex-row items-center'
          onPress={() => {
            setModalVisible(true)
          }}
        >
          {/* avatar */}
          <View
            className='border-2 border-[#2EC96D] rounded-full'
          >
            <Image source={require('../assets/image/pp1.jpg')} className='object-cover w-[50px] h-[50px] rounded-full m-[2px]'/>
          </View>

          {/* text */}
          <View
            className='ml-3'
          >
            <Text className='font-bold text-base'>Quran ♡</Text>
            <Text className='text-[#A0ABAD]'>11 menit yang lalu</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* new text status */}
      <TouchableOpacity
        className='absolute bottom-24 right-4 bg-[#DEFFF2] p-4 rounded-2xl shadow-2xl'
      >
        <PencilIcon size={20} color={'#008267'}/>
      </TouchableOpacity>

      {/* new status */}
      <TouchableOpacity
        className='absolute bottom-6 right-3 bg-[#008267] p-4 rounded-2xl'
      >
        <CameraIcon size={25} color={'#FDFDF9'}/>
      </TouchableOpacity>

      {/* modal status view */}
      <ModalStatus modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </View>
  )
}

export default PembaruanScreen