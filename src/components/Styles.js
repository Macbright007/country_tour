import styled from "styled-components";

export const Container = styled.main``;

export const Navigation = styled.nav`
  border: 2px solid rgb(242, 236, 236);
  background: rgb(255 255 255);

  .nav__nav {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
  }

  .nav__nav h1 {
    color: #111517;
    font-weight: 700;
  }

  .left__side {
    margin-top: 1.6rem;
  }

  .left__side span {
    color: #111517;
    font-weight: 600;
  }
`;

export const SearchCont = styled.form`
  border: 2px solid rgb(223, 218, 218);
  box-shadow: 1px 1px 2px rgb(223, 218, 218);
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  padding: 0 1rem 0 2rem;
  background: #fff;
  cursor: pointer;

  input[type="search"] {
    width: 91%;
    padding: 15px;
    background: rgb(255 255 255);
    border: none;
    outline: none;
  }

  input[type="search"]::placeholder {
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Wrapper = styled.section`
  background: rgb(250 250 250);
  border-top: 2px solid rgb(242, 236, 236);
  //   height: 100vh;

  .main__wrapper {
    // border: 2px solid blue;
    width: 100%;
    max-width: 1200px;
    margin: 3rem auto;
  }
  .search__filter {
    display: flex;
    justify-content: space-between;
    // border: 2px solid blue;
    // width: 100%;
    // max-width: 1350px;
  }

  .card__wrapper{
    // border: 2px solid green;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

export const Card = styled.div`
  border: none;
// border: 2px solid black;
  box-shadow: 1px 1px 12px rgb(207, 205, 205);;
  border-radius: 10px;
  width: 100%;
  max-width: 270px;
  background: #fff;

  height: 60vh;
//   background: red;

  .img__container{
    // border: 2px solid red;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 45%;
  }

  .img__container img{
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .content{
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-radius: 10px;
    // background: red;
    background: #fff;
    width: 77.5%;
    height: 20vh;
    padding: 0 1.9rem 2rem ;
  }
`;

export const DetailWrapper = styled.section`
//   border: 2px solid red;

  .inner__wrapper{
    // border: 2px solid black;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 2rem;
  }

  .detail_content{
    // border: 2px solid blue;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
  }

  .img__cont{
    // border: 2px solid green;
    width: 50%;
  }
  .img__cont img{
    width: 100%;
    height: 100%;
    object-fit: fit;
  }

  .country__details{
    // border: 2px solid blue;
    padding: 0 3rem;
    width: 50%;
  }

  .details{
    // border: 2px solid red;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .details h5{
    font-weight: 500;
  }
  .country__details h2{
    margin-left: 1rem;
    margin-bottom: -1rem;
  }
  .country__details h4{
    margin-left: 1rem;
    // color: red;
  }
`
