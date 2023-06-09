import LottieView from "lottie-react-native"

export const LottiePage = () => {
  return (
    <LottieView
      style={{ width: '100%' }}
      // source={require('./loading.json')}
      source={{ uri: 'https://assets5.lottiefiles.com/packages/lf20_fityEfMraU.json' }}
      autoPlay
      loop
    />
  )
}
