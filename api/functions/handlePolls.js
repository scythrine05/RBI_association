//NEWS POLLS HANDLER

//Importing
const pool = require("../database/dbPool");

//Get All Polls
const getAllPolls = async (id) => {
  let sql =
    'select polls.PollsID, polls.Question, pollsoption.Answer, polls.Date, polls.AuthorID, polls.Active from polls inner join (select PollsID,  JSON_ARRAYAGG(JSON_OBJECT ("option", PollsOptions, "votes", Votes)) Answer from pollsoption group by PollsID) pollsoption on polls.PollsID = pollsoption.PollsID order by Date desc';
  try {
    let requiredData = await pool.query(sql);
    for (i = 0; i < requiredData.length; i++) {
      if (requiredData[i].Active === 1) {
        let check = await checkVote(requiredData[i].PollsID, id);
        if (check.length > 0) requiredData[i]["Done"] = 1;
        else requiredData[i]["Done"] = 0;
      }
    }
    return requiredData;
  } catch (e) {
    return new Error(e);
  }
};
//Vote poll

const votePoll = async (id, data) => {
  let sql =
    "update pollsoption set Votes = Votes+1 where PollsID = ? AND PollsOptions = ?";
  let sql2 = `insert into Poll${data.PId}(SamadhanID) values(?)`;
  try {
    await pool.query(sql, [data.PId, data.Option]);
    await pool.query(sql2, [id]);
    return;
  } catch (e) {
    return new Error(e);
  }
};

//Post poll
const postPolls = async (id, question, options) => {
  let date = new Date();
  let sql =
    "insert into polls(Question, Date, AuthorID, Active) values(?,?,?,?)";
  let sql2 = "insert into pollsoption(PollsOptions, PollsID) values(?, ?)";
  try {
    let results = await pool.query(sql, [question, date, id, 1]);
    let sql3 = `create table Poll${results.insertId} (SamadhanID int not null, foreign key(SamadhanID) references approvedmember(SamadhanID))`;
    let sql4 = `create event myevt${results.insertId} on schedule at CURRENT_TIMESTAMP + INTERVAL 1 DAY do drop table if exists Poll${results.insertId}`;
    let sql5 = `create event myevt${
      results.insertId + 100
    } on schedule at CURRENT_TIMESTAMP + INTERVAL 1 DAY do update polls set Active = 0 where PollsID = ${
      results.insertId
    }`;
    await pool.query(sql3);
    await pool.query(sql4);
    await pool.query(sql5);
    for (i = 0; i < options.length; i++) {
      await pool.query(sql2, [options[i].value, results.insertId]);
    }
    return;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

//Vote poll
const checkVote = async (pid, uid) => {
  let sql = `select * from Poll${pid} where SamadhanID = ?`;
  let data = await pool.query(sql, [uid]);
  return data;
};

module.exports = {
  getAllPolls,
  votePoll,
  postPolls,
  checkVote,
};
