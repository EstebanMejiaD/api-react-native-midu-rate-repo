import React from 'react'
import {View} from 'react-native'
import StylesText from './StylesText.jsx'

const parseThousands = value => {
    return value >= 1000
        ?  `${Math.round(value / 100) / 10}k`
        : String(value)
}


const ReposStats = ({repo}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    <View>
      <StylesText align="center" fontWeight="bold">
        Star
      </StylesText>
      <StylesText align="center">{parseThousands(repo.stargazersCount)}</StylesText>
    </View>
    <View>
      <StylesText align="center" fontWeight="bold">
        Rating
      </StylesText>
      <StylesText align="center">{parseThousands(repo.ratingAverage)}</StylesText>
    </View>
    <View>
      <StylesText align="center" fontWeight="bold">
        Review
      </StylesText>
      <StylesText align="center">{parseThousands(repo.reviewCount)}</StylesText>
    </View>
  </View>
  )
}

export default ReposStats