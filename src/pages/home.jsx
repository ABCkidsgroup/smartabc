import styled from 'styled-components'
import { MotionAnimate } from 'react-motion-animate'
import Shadow from './../img/backshadow.svg'
import Logo from './../img/logo.svg'
import Circle from '../img/PlantImage.svg'
// import { Link } from 'react-router-dom';
// import Facebook from '../img/facebook.svg'
import Instagram from '../img/instagram.svg'
// import Twitter from '../img/twitter.svg'
// import OrangeBoxImg from '../img/'
const Box = styled.div`
    height: 100vh;
    width: 100%;
`

const Navbar = styled.div`
    display: flex;
    width: 99vw;
    height: 16vh;
    flex: 1;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 768px) {
        height: 28vh;
    }
`

const NavbarText = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 35%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #142F38;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

// const TopRight = styled.div`
//     background-color: #142E38;
//     width: 305px;
//     height: 109px;
//     border-radius: 0 24px 0 24px;
// `

const Nav = styled.div`
    display: flex;
    width: 99%;
    justify-content: space-between;
`

const Img = styled.img`
    height: 4vw;
    @media (max-width: 768px) {
        height: 12vw;
    }
`

const CircleImg = styled.img`
    height: 35vw;
    @media (max-width: 768px) {
        margin-top: 24px;
        justify-content: center;
        align-items: center;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
       flex-direction: column;
    }
`

const Card = styled.div`
    background: #D5EEC6;
    border-radius: 214px;
    width: 100px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 12px;
    flex: none;
    order: 0;
    flex-grow: 0;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 33px;
    text-transform: capitalize;
    color: #244030;
    @media (max-width: 768px) {

    }
`

const Button = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 8px 39px;
    width: 110px;
    white-space:nowrap;
    justify-content: center;
    align-items: center;
    background: #318161;
    border: 3px solid #318161;
    border-radius: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    @media (max-width: 768px) {
        font-size: 18px;
        width: 80;
        padding: 4px 20px;
    }
`

const Left = styled.div`
    flex-direction: column;
`

const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    @media (max-width: 768px) {
        /* flex: 1; */
        margin-left: 0;
        margin-right:20px;
        font-size: 32px;
        /* justify-content: center; */
        /* align-items: center; */
    }
`

const TextMainAndTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 768px) {
        line-height: 4px;
    }
`

const TextMain = styled.a`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 82px;
    color: #142E38;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 20px 0px;
    @media (max-width: 768px) {
        font-size: 28px;
        line-height: 44px;
    }
`

const Text = styled.a`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 200;
    font-size: 22px;
    line-height: 33px;
    text-transform: capitalize;
    color: #142E38;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 20px 0px;
    @media (max-width: 768px) {
        font-size: 15px;
        line-height: 24px;
    }
`

const Sociel = styled.img`
    height: 40px;
    width: 40px;
`
const Centralize = styled.div`
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    margin-left: 44px;
    @media (max-width: 768px) {
        margin-left:24px;
    }
`
const Line = styled.div`
    width: 1px;
    height: 8vw;
    border: 1px solid #1A3237;
    background-color: #1A3237;
    @media (max-width: 768px) {
        width: 0px;
        height: 0px;
        border:0px;
    }
    
`
const Sociels = styled.div`
    display:flex; 
    flex-direction:column;
    justify-content:space-around;
    height:450px;
    align-items:center;
    margin-right:44px;
    margin-top:160px;
    @media (max-width: 768px) {
        flex-direction: row;
        margin: 0;
        height: 100px;
    }
`
const Body = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    @media (max-width:768px){
        flex-direction: column;
    }
`
// const DesriptionBody = styled.div`
//     display: flex;
//     flex: 1;
//     height: 36vh;
//     justify-content: flex-end;
//     align-items: flex-end;
// `
// const DescriptionBox = styled.div`
//     height: 150px;
//     width: 700px;
//     background-color: #142E38;

// `
// const DescriptionOrangeBox = styled.div`
//     height: 150px;
//     width: 300px;
//     background-color: #FAB65D;
//     border-radius: 30px 0px 0px 0px;
//     @media (max-width:768px){
//         border-radius: 0px;
//     }
// `
const home = () => {
    return (
        <MotionAnimate>
            <Box style={{ backgroundImage: `url(${Shadow})`, backgroundSize: 'cover' }}>
                <Nav>
                    <Navbar>
                        <div><Img src={Logo}></Img></div>
                        <NavbarText>
                            {/* <div><a style={{ textDecoration: "none", color: '#142F38' }} href="/">О нас</a></div> */}
                            {/* <div><a style={{ textDecoration: "none", color: '#142F38' }} href="/">Наш продукт</a></div> */}
                            {/* <div><a style={{ textDecoration: "none", color: '#142F38' }} href="/">Контакты</a></div> */}
                        </NavbarText>

                    </Navbar>
                    {/* <TopRight></TopRight> */}
                </Nav>
                <Body>
                    <Centralize>
                        <Content>
                            <Left>
                                <Card>Образование</Card>
                                <TextMainAndTextBox>
                                    <TextMain>Помощь вашему <br /> ребенку в учебе</TextMain>
                                    <Text>Проект по развитию вашего ребенка, с помощью <br /> приложения ABC по уникальной авторской методике</Text>
                                </TextMainAndTextBox>
                               <Button onClick={() => { window.location.assign('https://vimeo.com/618944876')}}>Узнать больше</Button>
                            </Left>
                            <Right>
                                <CircleImg src={Circle} />
                            </Right>
                        </Content>
                    </Centralize>
                    <Sociels>
                        {/* <a href="https://www.instagram.com/kubiki_kids_club/"><Sociel src={Facebook} /></a> */}
                        <a href="https://www.instagram.com/kubiki_kids_club/"><Sociel src={Instagram} /></a>
                        {/* <a href="https://www.instagram.com/kubiki_kids_club/"><Sociel src={Twitter} /></a> */}
                        <Line></Line>
                    </Sociels>
                </Body>
                {/* <DesriptionBody>
                    <DescriptionOrangeBox><Img /></DescriptionOrangeBox>
                    <DescriptionBox></DescriptionBox>
                </DesriptionBody> */}

            </Box>
        </MotionAnimate>
    )
}

export default home;