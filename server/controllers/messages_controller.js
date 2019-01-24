// let messages = [ {id: 0, text: 'test', time: new Date().toLocaleString()}];
// let time = new Date().toLocaleString();    <- time is always at server start-up... 
let messages = [];
let id = 0;

module.exports = {
  read: (req, res) => {
    res.status(200).send(messages);
  },

  create: (req, res) => {
    const {text, time} = req.body;
    // const time = new Date().toLocaleString()

    messages.push({id, text, time});
    id++

    res.status(200).send(messages);
  },

  update: (req, res) => {
    const {id} = req.params;
    const {text} = req.body;

    // messages.forEach(message => {
    //   if (message.id === +id) {
    //     message.text = text || messages.text;
    //     message.time = new Date().toLocaleString();
    //   }
    // })

    const index = messages.findIndex(message => message.id === +id);
    const message = messages[index];

    message.text = text || message.text;

    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const {id} = req.params;

    // messages.forEach((message, index) => {
    //   if (message.id === +id) {
    //     books.splice(index,1)
    //   }
    // })
    // messagesCopy = messages.slice();

    // messages = messages.filter(message => message.id !== +id);

    index = messages.findIndex(message => message.id === +id);
    messages.splice(index, 1);

    res.status(200).send(messages);
  }
}