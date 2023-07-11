import Carousel from 'react-multi-carousel'
import { bannerData } from './FlipkartData';
import "react-multi-carousel/lib/styles.css";
import '../CSS/firstSlider.css'
export const FirstSlider = () => {
  
  // if ({authorized}) {
  //   return <redirect to="/Login" />
  // }
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}

    const responsive = {
       
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
  };
   
  return (
    <div className='firstSlider' >
    <Carousel 
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    dotListClass="custom-dot-list-style"
    keyBoardControl={true}
    slidesToSlide={1}
        showDots={true}
        arrows={null}
    >
    {
        bannerData.map((event , id)=>{
            return(
                <img style={{width:"100%" , height:"130px"}} className='images' src={event.url}  alt='imges' key={id}/>
            )
        })
    }
    </Carousel>

    </div>

  )
}


