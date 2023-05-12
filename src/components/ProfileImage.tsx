import { FC } from 'react';
import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';

import ProfilePic from '../images/profile/profile.png';

const ImgCard = styled(Card)`
    max-width: 250px;
    margin: 10px;
    border: none;
`;

const ProfileImg = styled.img`
    border-radius: 15px;
`;

const ProfileImage:FC = () => {

    return (
        <ImgCard className='m-100 d-flex justify-content-end'>
            <ProfileImg src={ProfilePic} />
        </ImgCard>
    )
};

export default ProfileImage;