import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar'

//tab
const Tab = createMaterialTopTabNavigator();

// svg
import { CameraIcon, MagnifyingGlassIcon, EllipsisVerticalIcon } from 'react-native-heroicons/outline'
import { UserGroupIcon } from 'react-native-heroicons/solid'

// screen
import KomunitasScreen from '../components/KomunitasScreen';
import ChatScreen from '../components/ChatScreen';
import PembaruanScreen from '../components/PembaruanScreen';
import PanggilanScreen from '../components/PanggilanScreen';

const App = () => {
  return (
    <View
      style={{ flex: 1 }}
    >
      {/* status bar */}
      <StatusBar style='light' translucent={false} backgroundColor='#008069'/>

      {/* navbar whatsapp */}
      <View
        className='bg-[#008069] flex-row justify-between px-3 py-4 items-center'
      >
        {/* logo */}
        <View>
          <Text
            className='text-[#EDF8FA] text-2xl'
          >
            WhatsApp
          </Text>
        </View>

        {/* action button */}
        <View
          className='flex-row justify-between items-center min-w-[110px]'
        >
          {/* camera */}
          <TouchableOpacity>
            <CameraIcon color={'#EDF8FA'} size={28}/>
          </TouchableOpacity>

          {/* search */}
          <TouchableOpacity>
            <MagnifyingGlassIcon color={'#EDF8FA'} size={28}/>
          </TouchableOpacity>

          {/* setting */}
          <TouchableOpacity>
            <EllipsisVerticalIcon color={'#EDF8FA'} size={28}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* content chat */}
      <NavigationContainer
        independent={true}
      >
        <Tab.Navigator
          initialRouteName='Chat'
          screenOptions={{
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { 
              backgroundColor: '#008069',
            },
          }}
        >
          <Tab.Screen 
            name="Komunitas" 
            component={KomunitasScreen} 
            options={{
              title: ({focused}) => {
                return(
                  <View>
                    <UserGroupIcon fill={focused ? '#EDF8FA' : '#7DBCAF'} size={28}/>
                  </View>
                )
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#EDF8FA',
              },
            }}
          />
          <Tab.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={{
              title: ({focused}) => {
                return(
                  <View
                    className='flex-row items-center justify-center'
                  >
                    <Text
                      className={`${focused ? 'text-[#EDF8FA]' : 'text-[#7DBCAF]'} font-semibold mr-2`}
                    >
                      Chat
                    </Text>
                    <View
                      className={`${focused ? 'bg-[#EDF8FA]' : 'bg-[#7DBCAF]'} px-[3.4px] py-[1px] rounded-full`}
                    >
                      <Text
                        className='text-[#008069] font-semibold px-1'
                      >
                        1
                      </Text>
                    </View>
                  </View>
                )
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#EDF8FA'
              }
            }}
          />
          <Tab.Screen 
            name="Pembaruan" 
            component={PembaruanScreen} 
            options={{
              title: ({ focused }) => {
                return(
                  <View
                    className='flex-row items-center justify-center'
                  >
                    <Text className={`${focused ? 'text-[#EDF8FA]' : 'text-[#7DBCAF]'} mr-1 font-semibold`}>Pembaruan</Text>
                    <View className={`${focused ? 'bg-[#EDF8FA]' : 'bg-[#7DBCAF]'} h-2 w-2 rounded-full`}></View>
                  </View>
                )
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#EDF8FA'
              }
            }}
          />
          <Tab.Screen 
            name="Panggilan" 
            component={PanggilanScreen} 
            options={{
              title: ({ focused }) => {
                return(
                  <View
                    className='flex-row items-center justify-center'
                  >
                    <Text className={`${focused ? 'text-[#EDF8FA]' : 'text-[#7DBCAF]'} mr-1 font-semibold`}>Panggilan</Text>
                  </View>
                )
              },
              tabBarIndicatorStyle: {
                backgroundColor: '#EDF8FA'
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App