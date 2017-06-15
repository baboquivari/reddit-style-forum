const getTopic = (props) => {
  let {params} = props;

  switch (true) {
    case params.hasOwnProperty('topic'):
      return params['topic'];
    case params.hasOwnProperty('article_id'): {
      let artRequest = params['article_id'];
      let article = props.articles[artRequest];
      let topic;
      
      if (!article) {
        topic = 'home';
      } else {
        topic = article['belongs_to'];
      }

      return topic;
    }

    default:
      return 'home';
  }
};

const getTime = (date) => {
  let currentDate = new Date();
  let elemDate = new Date(date);
  let diffHours = currentDate.getHours() - elemDate.getHours();
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (currentDate.toDateString() !== elemDate.toDateString()) {
    return elemDate.getDate() + ' ' + months[elemDate.getMonth()];
  } else {
    return diffHours ? diffHours + 'h' : 'less than an hour ago';
  }
};

const sortByDate = (obj) => {
  return Object.keys(obj)
    .reduce((acc, id) => {
      acc.push(obj[id]);
      return acc;
    }, [])
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
};

const resetInput = () => {
  return {
    input: ''
  };
};

const articlesByVote = (state) => {
  return Object.keys(state.articles.data)
    .reduce(function (acc, id) {
      return acc.concat(state.articles.data[id]);
    }, [])
    .sort(function (a, b) {
      return b.votes - a.votes;
    });
};

module.exports = {
  getTopic,
  getTime,
  sortByDate,
  resetInput,
  articlesByVote
};
