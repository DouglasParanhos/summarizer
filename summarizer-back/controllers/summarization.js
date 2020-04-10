const Summarization = require('../models/summarization')

module.exports = app => {
    // app.get('/summarize', (req, res) => res.send("rodando o get"));

    app.post('/summarize', (req, res) => {
        Summarization.summarize(req.body, res);
    });
}