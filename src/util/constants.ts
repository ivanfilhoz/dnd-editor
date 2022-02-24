import ActiveLinkText from '../ui-components/ActiveLinkText'
import Button from '../ui-components/Button'
import CheckBox from '../ui-components/CheckBox'
import Grid from '../ui-components/Grid'
import Header from '../ui-components/Header'
import Label from '../ui-components/Label'
import RadioButton from '../ui-components/RadioButton'
import Text from '../ui-components/Text'
import TextArea from '../ui-components/TextArea'
import Style from '../ui-plugins/Style'

export const COMPONENTS = {
  div: Grid,
  label: Label,
  text: Text,
  header: Header,
  textarea: TextArea,
  'active-text-link': ActiveLinkText,
  'standard-action-button-primary': Button,
  'checkbox-standard': CheckBox,
  'radio-button-standard': RadioButton
}

export const COMPONENTS_MODULES = {
  div: import(`../ui-components/Grid`),
  label: import(`../ui-components/Label`),
  text: import(`../ui-components/Text`),
  header: import(`../ui-components/Header`),
  textarea: import(`../ui-components/TextArea`),
  'active-text-link': import(`../ui-components/ActiveLinkText`),
  'standard-action-button-primary': import(`../ui-components/Button`),
  'checkbox-standard': import(`../ui-components/CheckBox`),
  'radio-button-standard': import(`../ui-components/RadioButton`)
}

export const COMPONENTS_GROUPS = {
  Layout: ['div'],
  Text: ['text', 'header', 'label', 'textarea'],
  Buttons: [
    'active-text-link',
    'standard-action-button-primary',
    'checkbox-standard',
    'radio-button-standard'
  ]
}

export const PLUGINS = {
  Style: Style
}

export const PLUGINS_MODULES = {
  Style: import(`../ui-plugins/Style`)
}

export const CARDS = {
  'reason-for-visit': 'Reason For Visit',
  'vital-signs': 'Vital Signs',
  'history-summary': 'History Summary',
  'physical-exam': 'Physical Exam',
  'review-of-systems': 'Review of Systems',
  'assessment-plan': 'Assessment Plan'
}
