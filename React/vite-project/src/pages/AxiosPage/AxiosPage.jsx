import { useEffect } from "react";
import instance from "../../service/AxiosOrder";
export default function AxiosPage() {
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    instance
      .get("/companies")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Axios Page</h1>
    </div>
  );
}
