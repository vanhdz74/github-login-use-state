import React from "react";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import User from "./components/Users";
import Image from "./components/image";
import Posts from "./components/Posts";

const App = () => {
  // const title = "JS nang cao";
  // const handleClick = (e) => {
  //   console.log("hello", e);
  // };

  // // Render JSX theo dk
  // const isLogin = true;

  const users = [
    {
      id: 1,
      name: "User 1",
      email: "User1@gmail.com",
      image:
        "https://dulichdaiviet.com/uploaded/2024/06/8-diadiem-dulich-anhquoc-noitieng-gvt-2.jpg",
    },
    {
      id: 2,
      name: "User 2",
      email: "User2@gmail.com",
      image:
        "https://dulichdaiviet.com/uploaded/2024/06/8-diadiem-dulich-anhquoc-noitieng-gvt-2.jpg",
    },
    {
      id: 3,
      name: "User 3",
      email: "User3@gmail.com",
      image:
        "https://dulichdaiviet.com/uploaded/2024/06/8-diadiem-dulich-anhquoc-noitieng-gvt-2.jpg",
    },
  ];

  const handleGetData = (value) => {
    console.log(value);
  };

  return (
    // <React.Fragment>
    //   <Header />
    //   <h1 style={{ color: "red ", fontWeight: "bold" }}>Hoc React</h1>
    //   <h2>{title}</h2>
    //   <button
    //     // note: boc ben ngoai eventHandler co tham so => ko bi chay trc khi click
    //     onClick={() => {
    //       handleClick("Nam");
    //     }}
    //   >
    //     Click me
    //   </button>
    //   {/* {isLogin ? (
    //     <h2>Caho mung b quay tro lai</h2>
    //   ) : (
    //     <h2>Vui long nhap de tiep tuc!</h2>
    //   )} */}

    //   {isLogin && <h2>Caho mung b quay tro lai</h2>}

    //   {users.map(({ id, name }) => {
    //     return <h3 key={id}>{name}</h3>;
    //   })}
    //   <Footer />
    // </React.Fragment>

    <div>
      <h1>Danh sach User </h1>
      {/* {users.map((user) => {
        // dung spread {...user}
        return (
          <React.Fragment key={user.id}>
            <User {...user}>
              <Image src={user.image} width="200px" />
              <p>Anh cua {user.name}</p>
            </User>
            <hr />
          </React.Fragment>
        );
      })} */}
      <Posts onGetData={handleGetData}></Posts>
    </div>
  );
};

export default App;
