import styled from 'styled-components';

const colorOrange = '#ff6b6b';
const colorBlack = '#222';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85px;
  margin: 15px 0px 0px 0px;
  padding: 0px 25px;
  border-radius: 50px;
  background: ${colorOrange};
  background: linear-gradient(90deg, ${colorOrange} 0%, ${colorOrange} 37%, rgba(85, 98, 112, 1) 100%);
`;

const BoxForTitleAndHome = styled.div`
  display: flex;
  align-items: center;
`;

const SiteTitle = styled.h1`
  padding: 7px 11px 7px 16px;
  color: ${colorBlack};
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 100px 0px 0px 100px;

  &:hover {
    color: ${colorOrange};
    background-color: ${colorBlack};
  }
`;

const HomePageLink = styled.div`
  padding: 7px 15px 7px 8px;
  color: ${colorBlack};
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 0px 100px 100px 0px;
  border-left: 5px solid ${colorBlack};

  &:hover {
    color: ${colorOrange};
    background-color: ${colorBlack};
  }

  &:active {
    transform: translate(10px);
  }
`;

const AddPostPageLink = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 137px 0px 0px;
  padding: 6px 10px;
  color: ${colorBlack};
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.5s;
  border-radius: 30px;
  border: 4px solid ${colorBlack};

  &:hover {
    background-color: ${colorBlack};
    color: ${colorOrange};
  }

  & span {
    transition: 0.5s;
  }

  & div {
    transition: 0.5s;
  }

  &:hover span {
    transform: translateX(-38px);
  }

  &:hover div {
    transform: translateX(123px);
  }

  &:active {
    transform: rotate(15deg);
  }
`;

const BoxForIconAddPost = styled.div`
  display: inline-block;
  margin: 0px 5px 0px 0px;
  font-size: 1.3em;
`;

const ProfilePageLink = styled.div`
  padding: 7px 13px 4px;
  color: ${colorBlack};
  font-weight: bold;
  font-size: 1.65em;
  transition: 0.8s;
  border-bottom: 5px solid ${colorBlack};

  &:hover {
    color: #556270;
    background-color: ${colorBlack};
    border-radius: 100px;
    border-bottom: 5px solid #333;
  }

  &:active {
    transform: scale(1.3);
  }
`;

const Main = styled.main`
  flex: 1 1 auto;
  margin: 15px 0px;
  padding: 0px 30px;
`;

const StyledLayout = {
  Wrapper,
  Header,
  Main,
  BoxForTitleAndHome,
  SiteTitle,
  HomePageLink,
  AddPostPageLink,
  BoxForIconAddPost,
  ProfilePageLink,
};
export default StyledLayout;
