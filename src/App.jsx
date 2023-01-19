import Login from './pages/Login';
import Card_layout from './layouts/Card_layout';
import Img_sponsored from './assets/image_sponsored.jpg'

function App() {
  return (
    <Card_layout Page={Login} Content={Img_sponsored}/>
  )
}

export default App
