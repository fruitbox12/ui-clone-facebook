import React from 'react';

import facebookLogo from '../../assets/facebook-logo.png';

import { 
    Container,
    LeftSide, 
    FacebookIcon,
    Search,
    SearchIcon,
    Main, 
    HomeIcon,
    WatchIcon,
    BuninessIcon,
    GroupsIcon,
    GamesIcon, 
    RightSide, 
    Profile,
    AvatarProfile,
    BgIcon,
    PlusIcon, 
    MessengerIcon, 
    NotificationIcon,
    AccontIcon
} from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <LeftSide>
                <FacebookIcon>
                    <img src={facebookLogo} alt="Facebook" />
                </FacebookIcon>

                <Search>
                    <SearchIcon />
                    <p>Pesquise no Facebook</p>
                </Search>
            </LeftSide>

            <Main>
                <HomeIcon />
                <WatchIcon />
                <BuninessIcon />
                <GroupsIcon />
                <GamesIcon />
            </Main>

            <RightSide>
                <Profile>
                    <AvatarProfile />
                    <p>Thomas</p>
                </Profile>
                
                <BgIcon>
                    <PlusIcon />    
                </BgIcon>

                <BgIcon>
                    <MessengerIcon />
                </BgIcon>

                <BgIcon>
                    <NotificationIcon />
                </BgIcon>

                <BgIcon>
                    <AccontIcon />
                </BgIcon>
                
            </RightSide>
        </Container>
    );
}

export default Header;