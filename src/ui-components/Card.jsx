import React from 'react'
import { CARDS } from '../util/constants'

export default function Card ({ configuration }) {
  return (CARDS[configuration.selectedCard])
}

Card.preview = () => (
  <span
    style={{
      border: '#333 1px solid',
      padding: '2px 8px',
      borderRadius: 2
    }}
  >
    Card
  </span>
)

export const configTypes = {
  selectedCard: Object.keys(CARDS)
}

export const defaultConfig = {
  selectedCard: 'reason-for-visit'
}

export const description =
  'Cards offer a way to group related information together while keeping the page organized and structured. Cards may contain a variety of different types of information. They are also collapsable and expandable to be able to show/hide information as needed.'
