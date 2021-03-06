import React from 'react';
import styled from 'styled-components';
import {Link as ReactRouterDomLink } from 'react-router-dom';


export const Li = styled.li`
margin-left:${p=>p.right && 'auto'};
@media(max-width: 768px){
margin-left:0;
flex: 0 0 100%;
border-bottom:0.5px solid #366a82;


}`
/////Logo navbar////////
export const Logo =styled.img`
position: relative;
height:24px;
padding-right:13px ;

@media (max-width: 768px) {
  display:none;

}
`
export const LogoRes = styled.img`
display:none;
 @media(max-width: 768px){
   position:fixed;
   margin: 13px 0px 0px 11px;
display:flex;
flex-direction:left;
    width: 40px;
    border-radius:4px;
 }
`
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

@media(max-width: 768px){
    background:#336279; /*background menu responsive nav*/
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
li:nth-child(10) {order: 2;}/*home*/
li:nth-child(3) {order: 3;
  flex: 0 0 50%;
}/*register logout*/
 li:nth-child(2) {order: 4;
flex: 0 0 50%;
}/*login profile*/

 li:nth-child(4) {order: 5;}/*arrange add*/
 li:nth-child(9) {order: 6;}/*portfolio*/
 li:nth-child(8) {order: 7;}/*send*/
 li:nth-child(7) {order: 8;}
 li:nth-child(6) {order: 9;}
 li:nth-child(5) {order: 10;}







}`

export const Link = ({border,yellow,send,logo,isActive, children, ...props}) => {
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
color:${p=>p.yellow? '#fce7b3':'#eaedf2'};/*text*/
display: block;
font-weight:${p=>p.isActive ? 'bold' :''};
padding:13px;
@media(max-width: 768px){
display:${p=>p.logo? "none" : 'block'};
}

&:hover{
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
 }`


export const Hamburger = styled.div`
 @media(max-width: 768px){
    margin:6px 15px 6px 40px;
    display:block;
     background: #e6e9f2;
    height:3px;
    width: 20px;
    border-radius:4px;
  &:active  {
  background-color:#dfc887;
  &:before{
    background-color:#dfc887;
  }
  &:after{
    background-color:#dfc887;
  }
  }
&:before,&:after {
  content:'';
     display:block;
     background: #e6e9f2;
    height:3px;
    width: 20px;
    border-radius:4px;
 }
 &:before{

     transform:translateY(-6px);   
 }
 &:after{
     transform:translateY(3px);
 }
 }
`
