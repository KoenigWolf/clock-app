import type messages from '../../messages/ja.json'

type Messages = typeof messages

declare global {
  interface IntlMessages extends Messages {}
}
