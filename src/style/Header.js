import React from 'react';
import styled from 'styled-components';
import {Link as ReactRouterDomLink } from 'react-router-dom';


export const Li = styled.li`
margin-left:${p=>p.right && 'auto'};
@media(max-width: 768px){
margin-left:0;
flex: 0 0 100%;
border-bottom:1px solid #366a82;
&:nth-of-type(1) {
    order: 1;
  }
  &:nth-of-type(3) {/*about */
    order: 2;
    flex: 0 0 50%;
  }

  &:nth-of-type(2) {/*portfolio*/
    order: 3;
    flex: 0 0 50%;
  }
  &:nth-of-type(4) {/* addproject */
    order: 4;
  }
  &:nth-of-type(5) {/* admin */
    order: 8;
  }
  &:nth-of-type(6) {/* register/logout */
    order: 7;
  }
  &:nth-of-type(7) {/* sendrequest */
    order: 6;
  }
  &:nth-of-type(8) {/* HOME */
    order: 5;
  }

}`

export const HeaderWrapper = styled.div`
 position:absolute;
 top:0px;
height:46px;
 z-index:5;
width:100%;
border-bottom:1px solid #c7cad1;
margin: 0px auto;
background:#0f1f2f;/*background nav responsive*/
@media(max-width: 768px){
    position:fixed;
}
`

export const Menu = styled.nav`

display:block;
background:#0f1f2f;/*background nav*/
&:hover{
  transition:display 1s;
}
@media(max-width: 768px){
    background:#336279;/*background menu responsive nav*/
}
`

export const Ul = styled.ul`
list-style-type:none;
display:flex;
padding:0;
margin:0;
@media(max-width: 768px){
    flex-direction: row;
    flex-wrap: wrap;

}`

export const Link = ({logo,isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};
///////Styled----Link//////////////////
export const StyledLink = styled(Link)`
text-decoration:none;
position:relative;
color:#eaedf2;/*text*/
display: block;
font-weight:${p=>p.isActive ? 'bold' :''};
padding:13px;
@media(max-width: 768px){
display:${p=>p.logo? "none" : 'block'};
}

&:hover{
  border-bottom:1px solid #c7cad1;
    background-color: #c7cad1;
    color:#0f1f2f;
  transition:color 1s;
}
`



///////////HAMBURGER ICONS/////////////////
export const MobileMenuIcon = styled.div`
 @media(max-width: 768px){

 margin: auto 0 auto auto;
 width:60px;
 
padding:16px;
    cursor:pointer;
 }`
export const M = styled.div`
 @media(max-width: 768px){
    margin:6px 15px 6px 40px;
    display:block;
     background: #e6e9f2;
    height:3px;
    width: 20px;
    border-radius:4px;
 
&:before,&:after {

 }
 &:before{
    content:'';
     display:block;
     background: #e6e9f2;
    height:3px;
    width: 20px;
    border-radius:4px;
     transform:translateY(-6px);
     
 }
 &:after{
    content:'';
     display:block;
     background: #e6e9f2;
    height:3px;
    width: 20px;
    border-radius:4px;
     transform:translateY(3px);
 }
 }
`