// import NewNavbar  from './NewNavbar'
import NavBarBottom from './NavBarBottom'
import CallapiProductTwo from './CallapiProductTwo'
import {FirstSlider} from './firstSlider'
import { BannerDown3 } from './BannerDown3'
import { CallapiProductFour } from './CallapiProductFour'

export const Home = ({ authorized }) => {

  // const navigate = useNavigate()
  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     navigate('/Login')
  //   }
  // },[])

  return (
    <div>
      <NavBarBottom />
      <FirstSlider />
      <BannerDown3 />
      <CallapiProductTwo />
      <CallapiProductFour />
    </div>
  )
};