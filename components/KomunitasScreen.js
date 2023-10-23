import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const KomunitasScreen = () => {
  return (
    <View
      className='flex-1 items-center bg-white'
    >
      {/* icon */}
      <View>
        <Image source={require('../assets/image/komunitas_icon.png')} className='w-[350px] m-[-100px]' resizeMode="contain"/>
      </View>

      {/* text */}
      <Text className='font-bold mt-3 text-xl'>Tetap terhubung dengan komunitas</Text>
      <Text className='text-center max-w-[330px] mt-2'>Komunitas menyatukan anggota dalam group berdasarkan topik dan memudahkan untuk menerima pengumuman admin. Setiap komunitas yang anda ikuti akan muncul di sini.</Text>

      {/* button */}
      <TouchableOpacity
        className='mt-2'
      >
        <Text className='text-[#08a07e]'>Lihat contoh komunitas {'>'}</Text>
      </TouchableOpacity>


      {/* button mulai */}
      <TouchableOpacity
        className='mt-8 bg-[#008069] w-[80%] py-2 rounded-full'
      >
        <Text className='text-white text-center'>Mulai Komunitas Anda</Text>
      </TouchableOpacity>
    </View>
  )
}

export default KomunitasScreen