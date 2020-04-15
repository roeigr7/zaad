import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

/////////FORM//////////////////////////

///////Form title///
export const FormTitle=styled.h2`
background:#e8d08f;
color: #0F1F2F;
font-weight:bold;
text-align:center;
padding:0;
margin:0;
border-radius:6px;

`
///Form Container///
export const Form=styled.form`

margin: 10px auto;
display:flex;
padding:1px;
width:50%;
justify-content:center;
flex-direction:column;
background:none;
box-sizing:border-box;
box-shadow: 0px 0px 0px 9px rgba(15,31,47,1);
border-radius:6px;

@media(max-width: 768px){
width:95%;
}
`

////////-LABEL-///////////////
export const InputContainer = styled.div`
position:relative;
margin-top:10px;

padding:0;

`
export const Label = styled.label`
position:absolute;
top:0;
right:0;
padding:10px 0;
font-size:16px;
color:#cfd1d6;
text-align:right;
pointer-events: none;
transition:0.5s;
`
///////////////////INPUT////////////////
export const Input = styled.input`
width:100%;
padding:8px 0;
font-size:16px;
color:#cfd1d6;

border:none;
border-bottom: 1px solid #e1e4ea;
outline:none;
background-color: transparent;
text-align:right;

&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}

&:valid {
    background-color: rgba(255,255,255,0.05);
}

&:valid  ~${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
   
}
`





////////////////////////////////TextArea//////////////////////////////////////////

export const TextArea = styled.textarea.attrs(()=>({
    rows: '1'
}))`
background-color:#c7cad1;
width:100%;
padding:8px 0;
font-size:16px;
color:#cfd1d6;

border:none;

border-bottom: 1px solid #c7cad1;
outline:none;
background:transparent;
text-align:right;

&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.05);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}
`
///////////DATE//////////////////////
export const StyledDatePicker = styled(ReactDatePicker)`
position:relative;
text-align:center;

background-color:#d6a549;
padding:8.2px 0;
margin:0;
font-size:16px;
color:#cfd1d6;
margin-bottom: 30px;
border:none;
border-bottom: 1px solid #dfc887;
outline:none;
background:transparent;
&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:red;
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.04);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}

`
//////SELECT////////////////

export const Select = styled.select`
box-sizing:border-box;
max-width: 100%;
text-overflow: ellipsis;
background-color:#c7cad1;
padding:8px 10px;
font-size:16px;
color:#c7cad1;
margin-bottom:${p => p.portfolio ? '0px': '30px'};
border: none;
border-bottom: 2px solid #dfc887;
outline:none;
background:transparent;
text-align:right;
border-radius:4px;




&:focus ~  ${Label} {
    top:-15px;
    right:0;
    color:'#33627A';
    font-size:10px;
}
&:valid {
    background-color: rgba(255,255,255,0.05);
}

&:valid  ~ ${Label} {
    top:-15px;
    right:0;
    color:#06c954;
    font-size:10px;
}

`
export const Option = styled.option`
color:${p => p.disabled? '#c7cad1' :'#E6E9F2'};
background:${p => p.disabled? '#b8bbc1' :'#33627A'};
max-width: 70%;

`

export const FlexFields = styled.div`
padding: 0;
flex-direction:row;
display:flex;
position:relative;
justify-content:space-between;
flex-wrap: wrap;
@media(max-width: 768px){
justify-content:center;

}
`

export const ErrorLabel= styled.label`
position:absolute;
margin-top:10px;
top:${p => p.tiny ? '29px' :'4px'};
border:0px solid #ff0000;
font-weight:bold;
left:${p => p.tiny ? '30%' :'0'};
color:red;
border-radius:4px;
text-align: right;
`
export const SelectWrapper = styled.div`
@media(max-width: 768px){
width:100%;
}
`

