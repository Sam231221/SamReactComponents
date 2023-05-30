
import './index.css'
import ImageSlider2 from './ImageSlider'
const index = () => {
    return (
            <ImageSlider2 infinite timer={2000} stopOnManual>
                {/* <div className="cards">
                    <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                </div>
                <div className="cards">
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                </div> */}
                <img src="https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="" />
                <img src="https://c4.wallpaperflare.com/wallpaper/290/826/480/pc-hd-1080p-nature-1920x1080-wallpaper-preview.jpg" alt="" />
            </ImageSlider2>
       
    )
}

export default index