import styled from "styled-components";

export const Container = styled.main``;

export const Navigation = styled.nav`
  border: 2px solid rgb(242, 236, 236);
  background: rgb(255 255 255);


  .nav__nav {
    width: 100%;
    max-width: 1440px;
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

export const SearchCont = styled.div`
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
    max-width: 1440px;
    margin: 3rem auto;
  }
  .search__filter {
    display: flex;
    justify-content: space-between;
  }
`;
