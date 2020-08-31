import styled from 'styled-components';

import { AiFillHome, AiTwotoneShop, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { SiYoutubetv } from 'react-icons/si';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BiPlus, BiBell } from 'react-icons/bi';
import { TiArrowSortedDown } from 'react-icons/ti';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: calc((100vh) / 10);
  padding: 0 15px;
  background-color: var(--color-dark-secondary);
  border: 1px solid var(--color-dark-primary) 0;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FacebookIcon = styled.div`
    > img {
        width: 40px;
        height: 40px;
        
    }
`;

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    background-color: var(--color-dark-primary);
    border-radius: 20px;
    padding: 0 30px 0 10px;

    > p {
        color: var(--search-icon-dark);
        font-size: 17px;
    }
`;

export const SearchIcon = styled(AiOutlineSearch)`
    width: 22px;
    height: 22px;
    fill: var(--search-icon-dark);
    margin-right: 5px;
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const HomeIcon = styled(AiFillHome)`
    width: 23px;
    height: 23px;
    fill: var(--bg-dark-icons);
    margin: 0 50px;
`;

export const WatchIcon = styled(SiYoutubetv)`
    width: 23px;
    height: 23px;
    fill: var(--bg-dark-icons);
    margin: 0 50px;
`;

export const BuninessIcon = styled(AiTwotoneShop)`
    width: 23px;
    height: 23px;
    fill: var(--bg-dark-icons);
    margin: 0 50px;
`;

export const GroupsIcon = styled(HiOutlineUserGroup)`
    width: 23px;
    height: 23px;
    fill: var(--bg-dark-icons);
    margin: 0 50px;
`;

export const GamesIcon = styled(IoLogoGameControllerB)`
    width: 23px;
    height: 23px;
    fill: var(--bg-dark-icons);
    margin: 0 50px;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;

    > p {
        color: var(--text-dark-primary);
        font-size: 15px;
        margin: -4px 0;
    }
`;

export const AvatarProfile = styled.div`
    width: 20px;
    height: 20px;
    background-color: gray;
    border-radius: 50%;
    margin-right: 8px;
`;

export const BgIcon = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: 40px;
    height: 40px;
    background-color: var(--bg-dark-icons);
    border-radius: 50%;
    margin-right: 10px;
`;

export const PlusIcon = styled(BiPlus)`
    width: 20px;
    height: 20px;
    fill: var(--text-dark-primary);
`;

export const MessengerIcon = styled(FaFacebookMessenger)`
    width: 20px;
    height: 20px;
    fill: var(--text-dark-primary);
`;

export const NotificationIcon = styled(BiBell)`
    width: 20px;
    height: 20px;
    fill: var(--text-dark-primary);
`;

export const AccontIcon = styled(TiArrowSortedDown)`
    width: 20px;
    height: 20px;
    fill: var(--text-dark-primary);
`;