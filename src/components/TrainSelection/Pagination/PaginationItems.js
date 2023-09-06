import React from "react";
import PropTypes from "prop-types";

import {Pagination} from "antd";
import 'antd/dist/antd.css';
import './Pagination.scss';

function PaginationItems({current, onChange, total, pageSize}){
  return (
    <section className="pagination">
      <Pagination
        current={current}
        total={total}
        hideOnSinglePage
        onChange={onChange}
        showLessItems
        showSizeChanger={false}
        pageSize={pageSize}
        />

    </section>
  );
}
PaginationItems.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
};
PaginationItems.defaultProps = {
  total: 0,
}

export default PaginationItems;