import React from 'react'

import { CustomToggler } from 'react-custom-toggler'
import 'react-custom-toggler/dist/index.css'


const data = [
  { label: 'Hello', value: 'world' },
  { label: 'What', value: 'now' },
  { label: 'Good', value: 'morning' }
]


const App = () => {
  return (
    <div className="container">
      <h2>Demo - Custom Toggler</h2>

      <h3>For default styles, include css</h3>
      <pre>{`import 'react-custom-toggler/dist/index.css'`}</pre>

      <h3>Default</h3>
      <pre>
        {`<CustomToggler
        data={data}
        onChange={(value) => console.log(value) }/>`}
      </pre>
      <h4>Result:</h4>
      <CustomToggler
      data={data}
      onChange={(value) => console.log(value) }/>
      <div className="spacer" />
      <h3>Specify selected item:</h3>
      <pre>
        {`<CustomToggler
        data={data}
        defaultSelected={'world'}
        onChange={(value) => console.log(value) }/>`}
      </pre>
      <h4>Result:</h4>
      <CustomToggler
      data={data}
      defaultSelected={'world'}
      onChange={(value) => console.log(value) }/>

      <div className="spacer" />
      <h3>Full options:</h3>
      <pre>
        {`<CustomToggler
        data={data}
        defaultSelected={'world'}
        disabled={false}
        disabledClass="custom-disabled"
        containerClass="custom-container"
        itemClass="custom-item"
        onChange={(value) => console.log(value) }
        onFocus={(e) => { console.log('Focus: ', e)}}
        onBlur={(e) => { console.log('Blur: ', e)}}
        ariaLabel="Custom toggler"
        />`}
      </pre>


    </div>

    
  )
}

export default App
