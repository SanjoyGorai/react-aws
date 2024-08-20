import { useState } from 'react'
import ImageComponent from './components/ImageComponent'
import Editor from './components/Editor'
// import AWS from 'aws-sdk';


// AWS.config.update({
//   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//   secretAccessKey: 'P8j25ps4GbZ1pCTDi94oCfhDui8QBbyoGJBCSqzH',
//   region: process.env.REACT_APP_AWS_REGION,
// });


function App() {

  return (
    <>
      <h1 className='font-bold p-2'>AWS</h1>
      <ImageComponent />
      <Editor />
    </>
  )
}

export default App
