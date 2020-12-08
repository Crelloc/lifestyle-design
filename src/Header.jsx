import React from 'react';
import styled from 'styled-components';
import { Icon } from "atomize";


const Header = ({SetWidth, isExpaned}) => {
    const toggleExpansion = () => {
        SetWidth(current_val => !current_val);
    } 
    return (
        <HeaderSection>
            <LogoSection>
                <a href="/"><h1>Nike React Demo</h1></a>
            </LogoSection>
            <Menu>
                <a href="https://github.com/Crelloc/lifestyle-design" rel="noopener noreferrer" target="_blank">View Code</a>
                
                { isExpaned ? <Icon name="LongLeft" size="20px" onClick={() => {
                        toggleExpansion();
                    }}/> : <Icon name="LongRight" size="20px" onClick={() => {
                                toggleExpansion();
                            }}/>
                
                }
            </Menu>
        </HeaderSection>
    );
};

export default Header;

const HeaderSection = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

const LogoSection = styled.div`
    font-family: 'Ubuntu', sans-serif;

    a {
        color: black;
    }
`;

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    a {
        color: black;
        margin-right: 20px;
    }

    font-family: 'Ubuntu', sans-serif;
`;