import Container from "../template/container";
import "./addSubscriber.css";
import Button from "../template/Button";
import { useState } from "react";
import ErrorModal from "../template/ErrorModel/ErrorModel";
const AddSubscribers = (props) => {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState();
  //for name search console store the data
  const onNameChange = (events) => {
    console.log("name input", events.target.value);
    setName(events.target.value);
  };
  //for pincode save the data
  const onPincodeChange = (events) => {
    console.log("pin code is:", events.target.value);
    setPincode(events.target.value);
  };
  const onSubmitHandler = (events) => {
    events.preventDefault();
    if (name.trim().length == 0) {
      console.log("name is not valid");
      setError({
        title: "Invalid Name",
        content:
          "Name is the mandotry field. Please enter the name of subscriber",
      });
      return;
    }
    if (pincode < 5 && pincode < 0) {
      console.log("pincode input is not valid");
      setError({
        title: "Invalid Pincode",
        content:
          "Pincode is the mandotry field. Please enter the pincode of subscriber",
      });
      return;
    }
    console.log("update state is", name, pincode);
    //for add subscriber call
    props.onAddSubscriber(name, pincode);
    // For reset form use the value={name or pincode }
    setPincode("");
    setName("");
  };
  const onCloseHandler = () => {
    setError(null);
  };
  return (
    //htmlfor use for binding the element
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onClose={onCloseHandler}
        ></ErrorModal>
      )}
      <form onSubmit={onSubmitHandler}>
        <Container className="input">
          <label htmlFor="name">Name</label>

          <input
            id="name"
            type="text"
            value={name}
            name={name}
            onChange={onNameChange}
          ></input>

          <label htmlFor="pincode">Pincode </label>
          <input
            id="pincode"
            value={pincode}
            type="number"
            onChange={onPincodeChange}
          ></input>
          <Button type="submit">Save</Button>
        </Container>
      </form>
    </div>
  );
};

export default AddSubscribers;
