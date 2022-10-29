import { Intro as IntroMain,IntroImg, IntroHover, IntroText } from './Intro.styled';
import image from './images/bg-image.png';


const Intro = props => {


    return <IntroMain>
            <IntroHover >
                <IntroText>“Simplicity and Rapidity <br />
                    Rules the World”</IntroText>
            </IntroHover>
            <IntroImg src={image}  />


            
        </IntroMain>
}


export default Intro;