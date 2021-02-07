import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function ImgUpload(props) {
  const [imgData, setImgData] = useState(null);
  const [name, setName] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      setName(e.target.files[0].name);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const Img = styled.img`
    width: 90vw;
    margin-top: 10px;
    @media (max-width: 320px) {
      width: 80vw;
    }
  `;
  const Wrap = styled.div`
    width: 90vw;
    padding: 16px;
    border: 1px solid black;
    margin: auto;
    @media (max-width: 320px) {
      width: 100vw;
    }
  `;
  const Input = styled.input`
    color: transparent;
  `;
  const Form = styled.form`
    display: flex;
    justify-content: center;
    margin: 20px;
    @media (max-width: 320px) {
      margin: 20px;
    }
  `;
  const Nav = styled.p`
  margin:2rem;
  cursor:pointer;
  font-size:2rem;
`;
  return (
    <>
    <Nav onClick={()=>{props.history.push(`/`)}}>Comment board</Nav>
    <Nav onClick={()=>{props.history.push(`/imgupload`)}}>Upload img</Nav>
    <Nav onClick={()=>{props.history.push(`/msgboard`)}}>Msg board</Nav>
      <Form>
        <Wrap>
          <Input id="profilePic" type="file" onChange={onChangePicture} />
          <p>檔案名稱：{name}</p>
          <Img src={imgData} />
        </Wrap>
      </Form>
    </>
  );
}

export default withRouter(ImgUpload);
