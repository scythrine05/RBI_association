import React, { Component } from "react";
import Navbar from "./navbar";
import Poll from "react-polls";
import CreatePoll from "./createPolls";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import { Container } from "react-bootstrap";

const styles = {
  questionBold: false,
};

const polls = [
  {
    pollQuestion: "Is react-polls best ?",
    pollAnswers: [
      { option: "Yes", votes: 8 },
      { option: "No", votes: 2 },
    ],
  },
  {
    pollQuestion: "Is there an ending to Pandemic ?",
    pollAnswers: [
      { option: "Yes", votes: 10 },
      { option: "No", votes: 10 },
    ],
  },
];

export default class Polls extends Component {
  state = {
    pollAnswers: polls.map((poll) => {
      return poll.pollAnswers;
    }),
    polls: 2,
  };

  createNewPoll = (name, options) => {
    const newPoll = {
      pollQuestion: name,
      pollAnswers: options,
    };
    polls.push(newPoll);
    this.setState((prevState) => ({
      polls: prevState + 1,
    }));
  };

  handleVote = (voteAnswer, i) => {
    const pollAnswer = polls[i].pollAnswers;
    const newPollAnswer = pollAnswer.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    this.setState((prevState) => ({
      pollAnswers: {
        ...prevState,
        [pollAnswer]: newPollAnswer,
      },
    }));
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>{" "}
        <div>
          <Jumbotron
            name={["Polls"]}
            subname="Polls and Voting"
            background={
              '"https://www.regus.co.in/work-india/wp-content/uploads/sites/86/2019/11/shutterstock_633364835_How-to-open-meeting-with-impact_resize-to-1024px-x-400px-landscape.jpg"'
            }
          />
        </div>
        <Container>
          <CreatePoll createPoll={this.createNewPoll} />
          <div>
            {" "}
            {polls.map((n, i) => {
              return (
                <Poll
                  customStyles={styles}
                  question={polls[i].pollQuestion}
                  answers={polls[i].pollAnswers}
                  onVote={(e) => {
                    this.handleVote(e, i);
                  }}
                />
              );
            })}
          </div>
        </Container>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}
