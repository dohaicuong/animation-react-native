import { Text, View } from 'react-native'
import { NativeRouter, Routes, Route, Link } from 'react-router-native'
import { ReactSpringPage } from './pages/react-spring'
import { GesturePage } from './pages/gesture'
import { LottiePage } from './pages/lottie'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function App() {
  return (
    <GestureHandlerRootView>
      <NativeRouter>
        <View style={{ marginTop: 48, marginBottom: 48 }}>
          <TextLink to='/' name='react spring' />
          <TextLink to='/gesture' name='gesture' />
          <TextLink to='/lottie' name='lottie' />
        </View>
        <Routes>
          <Route index path='/' element={<ReactSpringPage />} />
          <Route path='/gesture' element={<GesturePage />} />
          <Route path='/lottie' element={<LottiePage />} />
        </Routes>
      </NativeRouter>
    </GestureHandlerRootView>
  )
}

const TextLink = ({ name, to }: { name: string, to: string }) => {
  return (
    <Link to={to}>
      <Text style={{ padding: 16, backgroundColor: '#ececec' }}>
        {name}
      </Text>
    </Link>
  )
}