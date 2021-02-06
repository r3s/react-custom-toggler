# react-custom-toggler

> Simple react customizable multiple options toggle component

[![NPM](https://img.shields.io/npm/v/react-custom-toggler.svg)](https://www.npmjs.com/package/react-custom-toggler) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-toggler
```

## Demo
[Demo](https://r3s.github.io/react-custom-toggler/)

## Usage

```jsx
import React, { Component } from 'react'

import CustomToggler from 'react-custom-toggler'
import 'react-custom-toggler/dist/index.css'

class Example extends Component {
  render() {
    return <CustomToggler data={data} />
  }
}
```

### Props

```js
// propTypes
CustomToggler.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string
  })).isRequired,
  containerClass: PropTypes.string,
  itemClass: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClass: PropTypes.string,
  defaultSelected: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  ariaLabel: PropTypes.string
}

```

#### data: required
`data` is an array of objects with properties `label` and `value`.
```js
const data = [
  { label: 'Hello', value: 'world' },
  { label: 'What', value: 'now' },
  { label: 'Good', value: 'morning' }
]
```
Each object inside data can also contain `ariaLabel` property. Eg:
```js
const data = [
  { label: 'Yes', value: 'yes', ariaLabel: 'Yes' },
  { label: 'No', value: 'no', ariaLabel: 'No },
]
```

#### defaultSelected
`defaultSelected` prop can be passed to specify the default value. The vlaue should be present in the `data` prop.
```js
const data = [
  { label: 'Hello', value: 'world' },
  { label: 'What', value: 'now' },
  { label: 'Good', value: 'morning' }
]
<CustomToggler data={data} defaultSelected="world" />
```

#### disabled
`disabled` prop can be passed to specify if the toggle is disabled. If disabled, the click/keydown events will not work on the toggle.
```js
<CustomToggler data={data} disabled />
```

#### disabledClass
`disabledClass` is a custom class name (string) for styling the disabled state.
```js
<CustomToggler data={data} disabled disabledClass="custom-disabled" />
```

#### containerClass
`containerClass` is a custom class name (string) for the main toggle container div.


#### itemClass
`itemClass` is custom class name (string) for each option/item in the toggle.

#### ariaLabel
`ariaLabel` is a string to be passed for aria-label.


#### onChange, onFocus, onBlur
These functions are run when value is changed, item is focussed and item is blurred respectively.



## License

MIT © [r3s](https://github.com/r3s)
