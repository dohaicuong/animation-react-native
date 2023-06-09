import { animated, useSpringValue } from '@react-spring/native'
import { Text, View } from 'react-native'
import { State, TapGestureHandler } from 'react-native-gesture-handler'

export const GesturePage = () => {
  const tapColor = useSpringValue('#28b5b5', { 
    config: {
      mass: 10,
      tension: 350,
      friction: 18
    }
  })

  return (
    <View>
      <Text>
        Hello World
      </Text>
      <TapGestureHandler
        numberOfTaps={2}
        onHandlerStateChange={event => {
          if (event.nativeEvent.state === State.ACTIVE) {
            if (tapColor.toJSON() === 'red') tapColor.start('#28b5b5')
            else tapColor.start('red')
          }
        }}
      >
        <animated.View
          style={{
            width: 150,
            height: 150,
            backgroundColor: tapColor as any,
            marginTop: 22,
            marginBottom: 22,
          }} 
        />
      </TapGestureHandler>
    </View>
  )
}
