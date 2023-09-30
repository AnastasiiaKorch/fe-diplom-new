import React from "react";
import PropTypes from "prop-types";

import OptionItem from "./OptionItem/OptionItem";
import options from "../../../data/options/options";

export default function Options({onChangeOption}){
  return (
    <div>{options.map((item)=> (
      <OptionItem
                  onChangeOption={onChangeOption}
                  name={item.name}
                  title={item.title}
                  key={item.id}
                  img={item.img}
      />
    ))}
    </div>
  );
}

Options.propTypes = {
  onChangeOption: PropTypes.func.isRequired
};