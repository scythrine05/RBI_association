import React from "react";
import Navbar from "./navbar";
import News from "./news";
import { CreateNewsLetter } from "./news";
import Parallax from "./parallax";
import { Container, Button } from "react-bootstrap";
import Footer from "./footer";
import Fade from "react-reveal/Fade";

const news = [
  {
    date: "29th July 1987",
    heading: "RBI ranked the Top amongst all India",
    paragraph:
      "Deserunt aute tempor nulla mollit mollit quis elit aliquip occaecat nisi qui. Duis sunt irure do dolore culpa ad veniam nulla. Sunt mollit nisi sit sunt laboris deserunt minim ad incididunt Lorem. Reprehenderit labore ut velit nisi anim ullamco pariatur ad voluptate sint. Adipisicing fugiat non fugiat do laboris laboris quis labore.",
  },
  {
    date: "29th July 2004",
    heading: "RBI ranked the Top amongst all World",
    paragraph:
      "Deserunt aute tempor nulla mollit mollit quis elit aliquip occaecat nisi qui. Duis sunt irure do dolore culpa ad veniam nulla. Sunt mollit nisi sit sunt laboris deserunt minim ad incididunt Lorem. Reprehenderit labore ut velit nisi anim ullamco pariatur ad voluptate sint. Adipisicing fugiat non fugiat do laboris laboris quis labore.",
  },
  {
    date: "29th July 2019",
    heading: "RBI ranked the Top amongst all Universe",
    paragraph:
      "Deserunt aute tempor nulla mollit mollit quis elit aliquip occaecat nisi qui. Duis sunt irure do dolore culpa ad veniam nulla. Sunt mollit nisi sit sunt laboris deserunt minim ad incididunt Lorem. Reprehenderit labore ut velit nisi anim ullamco pariatur ad voluptate sint. Adipisicing fugiat non fugiat do laboris laboris quis labore.",
  },
];

export default function Newsletter() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <React.Fragment>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>{" "}
      <div>
        <Parallax name={["Here's Your", <br />, "Newsletter"]} />
      </div>
      <Container>
        <Fade bottom>
          <Button size="lg" variant="" onClick={() => setModalShow(true)}>
            Create News
          </Button>

          <CreateNewsLetter
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          {news.map((n, i) => {
            return (
              <News
                heading={news[i].heading}
                paragraph={news[i].paragraph}
                date={news[i].date}
              />
            );
          })}
        </Fade>
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
