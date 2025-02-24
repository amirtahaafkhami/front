import AboutMe from "../Files/AboutMe";
import Main from "./Main";

export default function Content(props) {
  switch (props.currentPage) {
    case "Main":
      return (
        <Main />
      )
    case "AboutMe":
      return (
        <AboutMe />
      )
  }
}