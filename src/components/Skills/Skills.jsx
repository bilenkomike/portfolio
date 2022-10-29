
import Title from "components/Title/Title";
import {SkillsComponent,SkillsContent,SkillsImgBlock,SkillsImg,SkillsImgText} from './Skills.styled';
import image1 from './images/clock.png';
import image2 from './images/adaptation.png';
import image3 from './images/planning.png';
import image4 from './images/auditory.png';

const Skills = props => {
    return (
        <SkillsComponent id="skills">
            <Title>Skills</Title>
            <SkillsContent>
                <SkillsImgBlock>
                    <SkillsImg src={image1} />
                    <SkillsImgText>
                        RAPIDITY <br />
                        ALWAYS ON TIME
                    </SkillsImgText>
                </SkillsImgBlock>
                <SkillsImgBlock>
                    <SkillsImg src={image2} />
                    <SkillsImgText>
                        ADAPTIVE
                    </SkillsImgText>
                </SkillsImgBlock>
                <SkillsImgBlock>
                    <SkillsImg src={image3} />
                    <SkillsImgText>
                        TIME MANAGMENT
                    </SkillsImgText>
                </SkillsImgBlock>
                <SkillsImgBlock>

                    <SkillsImg src={image4} />
                    <SkillsImgText>
                        COMUNICATIVE <br />
                        LISTEN FOR COMMENTS
                    </SkillsImgText>

                </SkillsImgBlock>

            </SkillsContent>
        </SkillsComponent>
    );
}

export default Skills;