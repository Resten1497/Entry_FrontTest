import {
    QueryClientProvider,
    QueryClient,
    useQuery,
  } from "@tanstack/react-query";
  import React from "react";
  import axios from "axios";
  
  const queryClient = new QueryClient();
  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <GetData />
      </QueryClientProvider>
    );
  }
  
  function GetData() {
    const { isLoading, error, data, isSuccess } = useQuery(["data"], async () => {
      const { data } = await axios.post("https://entrylist.herokuapp.com/admin/");
      return data;
    });
    if (error) {
      return <div>Error</div>;
    }
    if (isSuccess) {
      return (
        <>
          {data.map((item, index) => {
            console.log(item);
            return (
              <>
                <tr>
                  <td>{item.visitorName}</td>
                  <td>{item.visitorPhoneNumber}</td>
                  <td>{item.visitorReason}</td>
                  <td>{item.entranceTime}</td>
                  <td>{item.entranceTime}</td>
                  <td>{item.exitTime}</td>
                </tr>
              </>
            );
          })}
        </>
      );
    }
  }
//   {visitorName: '테스트2', visitorPhoneNumber: '010-7378-6614', visitorReason: '동아리 활동', entranceTime: '2022. 8. 8. 오전 10:04:12', exitTime: null}
//   entranceTime: "2022. 8. 8. 오전 10:04:12"
//   exitTime: null
//   visitorName: "테스트2"
//   visitorPhoneNumber: "010-7378-6614"
//   visitorReason: "동아리 활동"
  
  export default App;