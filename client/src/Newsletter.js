import React from "react";
import Navbar from "./navbar";
import News from "./createNews";
import { CreateNewsLetter } from "./createNews";
import Jumbotron from "./jumbotron";
import { Container, Button } from "react-bootstrap";
import Footer from "./footer";

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
        <Jumbotron
          name={["News"]}
          subname="NewsLetters and Events"
          background={
            '"https://www.newstatesman.com/sites/default/files/styles/cropped_article_image/public/blogs_2020/03/gettyimages-1207482071_1_.jpg?itok=w_Wd5grM&c=b5c8b139082e3fa82aac026a4503c5bf"'
          }
        />
      </div>
      <Container>
        <Button size="lg" variant="" onClick={() => setModalShow(true)}>
          Create News
        </Button>

        <CreateNewsLetter show={modalShow} onHide={() => setModalShow(false)} />
        {news.map((n, i) => {
          return (
            <News
              heading={news[i].heading}
              paragraph={news[i].paragraph}
              date={news[i].date}
            />
          );
        })}
      </Container>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
