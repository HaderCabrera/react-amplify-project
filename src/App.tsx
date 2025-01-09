import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Hola a todos</h1>
    </div>
  )
}

export default App
