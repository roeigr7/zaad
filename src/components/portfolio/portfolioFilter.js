import React from "react";
import { Select,Option } from "../../style/style";
import { categories } from "../../utilities/constAccessories";

const PortfolioFilter = ({category,catFilter}) => (
<Select 
value={category||''} 
dir="rtl" 
 onChange={(e)=>{
 catFilter(e.target.value)
          }}>
  <Option key={''}  value=''>הכל</Option>;
{categories&&categories.map((opt, key) => {
        return <Option key={key} value={opt.id}>{opt.fullName}</Option>;
      })}
    
      </Select>
);

export default PortfolioFilter;
