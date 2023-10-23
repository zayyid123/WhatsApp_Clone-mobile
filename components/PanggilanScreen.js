import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

// icon
import { LinkIcon, UserIcon, PhoneIcon, ArrowUpRightIcon } from 'react-native-heroicons/outline'

const PanggilanScreen = () => {
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ backgroundColor: 'white' }}
      >
        {/* buat panggilan */}
        <TouchableOpacity>
          <View
            className='flex-row m-3 items-center'
          >
            {/* icon */}
            <View
              className='bg-[#00A984] mr-4 p-2 rounded-full'
            >
              <View
                className='rotate-45'
              >
                <LinkIcon color={'#fff'} size={30}/>
              </View>
            </View>

            {/* text */}
            <View>
              <Text className='font-semibold text-lg'>Buat tautan panggilan</Text>
              <Text className='text-[#989ea3] max-w-[200px]'>Bagikan tautan untuk panggilan WhatsApp Anda</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* terbaru */}
        <Text className='mx-3 mt-2 font-semibold text-base'>Terbaru</Text>

        {/* panggilan */}
        <View>
          {
            [1,2,3,4,5,6,7,8,9,10,11].map((res, index) => {
              return(
                <TouchableOpacity 
                  key={'panggilan'+index}
                  className='mx-3 mt-5 flex-row justify-between items-center'
                >
                  {/* kanan */}
                  <View
                    className='flex-row'
                  >
                    {/* icon */}
                    <View
                      className='bg-[#cfd7da] rounded-full p-2 mr-4'
                    >
                      <UserIcon fill={'#fff'} size={30}/>
                    </View>

                    {/* information */}
                    <View>
                      <Text className='font-semibold text-lg'>Teman {res}</Text>
                      <View
                        className='flex-row items-center'
                      >
                        <ArrowUpRightIcon size={15} color={'#08A07E'}/>
                        <Text className='text-[#989ea3] ml-2'>12 Oktober 15.00</Text>
                      </View>
                    </View>
                  </View>

                  {/* kiri */}
                  <View>
                    <PhoneIcon size={30} fill={'#08A07E'}/>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
      
      {/* new call */}
      <TouchableOpacity
        className='absolute bottom-6 right-3 bg-[#008267] p-4 rounded-2xl'
      >
        <PhoneIcon size={25} fill={'#FDFDF9'}/>
      </TouchableOpacity>
    </View>
  )
}

export default PanggilanScreen