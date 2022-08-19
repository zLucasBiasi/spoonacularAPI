import { useEffect, useState } from "react";
import baseUrl from "../../services/Api";
import * as S from "./style";

export const Recipes = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const { results } = await baseUrl("complexSearch");
      setData(results);
      setPage();
    };
    getData();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <div key={item.id}>
          {" "}
          <h1> {item.title}</h1>
        </div>
      ))}
    </>
  );
};
