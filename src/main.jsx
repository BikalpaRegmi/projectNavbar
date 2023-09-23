import React from 'react'
import ReactDOM from 'react-dom'
import Apps from './Apps'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
ReactDOM.render(<>
<BrowserRouter>
<Apps/>
</BrowserRouter>
</>,document.getElementById('root'))