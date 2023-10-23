import { View, Text, Modal, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Video, ResizeMode } from 'expo-av'

// svg
import { EllipsisVerticalIcon, ArrowLeftIcon, ChevronUpIcon } from 'react-native-heroicons/outline'

const ModalStatus = ({ modalVisible, setModalVisible }) => {
  const [progress, setProgress] = useState(0); // Mulai dengan 30 detik
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    if (status.didJustFinish === true) {
      setModalVisible(false)
    }
  }, [status])


  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
    >
      <View
        className='bg-black flex-1'
      >
        {/* indicator */}
        <View
          className='items-center'
        >
          <View
            className='mx-3 w-[97%] h-[3px] bg-[#5D5D5D] mt-3 rounded-full'
          >
            <View className={`bg-white h-[3px] rounded-full`} style={{width: `${(status.positionMillis / status.durationMillis) * 100}%`}}></View>
          </View>
        </View>

        {/* navbar */}
        <View
          className='mt-2 flex-row py-3 items-center justify-between w-full z-20'
        >
          {/* kanan */}
          <View
            className='flex-row items-center mx-3'
          >
            {/* icon back */}
            <TouchableOpacity
              className='mr-2'
              onPress={async() => {
                await setProgress(0)
                setModalVisible(false)
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
              <Image source={require('../assets/image/pp1.jpg')} className='object-cover w-[40px] h-[40px] rounded-full'/>
            </View>

            <View>
              <Text className='text-xl text-white font-semibold'>Quran ♡</Text>
              <Text className='text-[#A0ABAD]'>11 menit yang lalu</Text>
            </View>
          </View>

          {/* kiri */}
          <View
            className='flex-row justify-end w-[130px]'
          >
            {/* icon menu dots */}
            <TouchableOpacity>
              <EllipsisVerticalIcon color={'#fff'} size={25}/>
            </TouchableOpacity>
          </View>
        </View>

        {/* image */}
        <View
          className='items-center'
        >
          <Video
            ref={video}
            style={styles.video}
            shouldPlay={true}
            source={require('../assets/video/status1.mp4')}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
        </View>

        {/* caption */}
        <View
          className='bg-[#1b1b1b86] items-center flex-1 p-3 absolute bottom-0 w-full'
        >
          <Text className='text-white mb-4 text-base'>Bismillah</Text>
          <ChevronUpIcon size={20} color={'#fff'}/>
          <Text className='text-white'>Balas</Text>
        </View>
      </View>
    </Modal>
  )
}

export default ModalStatus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: '99%',
    height: '95%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});