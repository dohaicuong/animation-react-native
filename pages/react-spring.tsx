import { animated, useSpring } from '@react-spring/native'

export const ReactSpringPage = () => {
  const rollin = useSpring({
    delay: 500,
    loop: true,
    from: {
      rotate: "-180deg",
      marginTop: 80,
      marginLeft: 16,
    },
    to: [
      {
        rotate: "0deg",
        marginTop: 80,
        marginLeft: 96
      },
      {
        rotate: "180deg",
        marginTop: 160,
        marginLeft: 96
      },
      {
        rotate: "360deg",
        marginTop: 160,
        marginLeft: 16
      },
      {
        rotate: "540deg",
        marginTop: 80,
        marginLeft: 16
      },
    ],
    // config: {
    //   mass: 10,
    //   tension: 350,
    //   friction: 20
    // }
  })

  return (
    <animated.View
      style={{
        marginTop: rollin.marginTop,
        marginLeft: rollin.marginLeft,
        width: 80,
        height: 80,
        backgroundColor: '#ff6d6d',
        borderRadius: 8,
        transform: [
          { rotate: rollin.rotate }
        ]
      }}
    />
  )
}
