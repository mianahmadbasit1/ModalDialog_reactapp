import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddSubscribers from "./compenents/subscribers/addSubscribers";
import Container from "./compenents/template/container";
import SubscriberList from "./compenents/subscribers/subscriberList";
function App() {
  const [subscriberList, setSubscriberList] = useState([]);
  const onAddSubscriberHandler = (sname, spincode) => {
    console.log(sname);
    setSubscriberList((prevState) => {
      return [
        ...prevState,
        { name: sname, pincode: spincode, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Container>
      <AddSubscribers onAddSubscriber={onAddSubscriberHandler}></AddSubscribers>
      <SubscriberList list={subscriberList}></SubscriberList>
    </Container>
  );
}

export default App;
