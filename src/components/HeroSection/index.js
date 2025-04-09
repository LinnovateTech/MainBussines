import React from "react";
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle } from './HeroStyle'
import { Bio } from '../../data/constants';
import HeroImg from './Heroimage.jpeg';

const HeroSection = () => {
    return (
        <section id="sobre">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>{Bio.name}</Title>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SubTitle>{Bio.description2}</SubTitle>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </section >
    )
}

export default HeroSection;