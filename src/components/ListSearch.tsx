import React, { FC } from "react";
import { Input, Space } from "antd";
import { useState, ChangeEvent, useEffect } from "react";
// useloaction是获取当前的location对象，useNavigate是跳转的方法
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const { Search } = Input;
const ListSearch: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const search = searchParams.get(LIST_SEARCH_PARAM_KEY);
    if (search) {
      setValue(search);
    }
  }, [searchParams]);
  const handleSearch = (value: string) => {
    nav(`${pathname}?${LIST_SEARCH_PARAM_KEY}=${value}`);
  };
  return (
    <Space>
      <Search
        allowClear
        placeholder="input search text"
        onSearch={handleSearch}
        onChange={handleChange}
        enterButton
        value={value}
        style={{ width: 200 }}
      />
    </Space>
  );
};

export default ListSearch;
