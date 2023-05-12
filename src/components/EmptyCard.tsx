import { FC } from 'react';
import { Card, Placeholder } from 'react-bootstrap';
import { styled } from 'styled-components';

const EmptyCardContainer = styled(Card)`
    box-shadow: 0 25px 35px 0 rgba(0,0,0,0.4)
`;

const EmptyImg = styled(Card)`
    background-color: #35343c;
    min-height: 286px;
    width: auto;
    border: none;
    border-radius: 0;
`;

const EmptyCard:FC = () => {
    return (
        <EmptyCardContainer style={{ width: '18rem' }}>
            <EmptyImg />
            <Card.Body>
                <Placeholder as={Card.Title} animation="wave">
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="wave">
                    <Placeholder xs={7} /> 
                    <Placeholder xs={4} /> 
                    <Placeholder xs={4} />{' '}
                    <Placeholder xs={6} /> 
                    <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button 
                    variant="dark" 
                    md={3}
                    sm={2} 
                    className="m-1"    
                >
                    <i className={`bi bi-github`} />
                </Placeholder.Button>
                <Placeholder.Button 
                    variant="dark" 
                    md={3}
                    sm={2} 
                    className="m-1"    
                >
                    <i className={`bi bi-globe`} />
                </Placeholder.Button>
            </Card.Body>
        </EmptyCardContainer>
    );
};

export default EmptyCard;