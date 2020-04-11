const {spawn} = require('child_process');

class Summarization {
    summarize(body, res) {

        let dataToSend = 'error';
        let text = body.text;
        let compressionRate = body.compressionRate;
        
        const python = spawn('python3', ['./models/summarizationScripts/textRank.py', text, compressionRate]);

        python.stdout.on('data', data => {
            dataToSend = data.toString();
        });

        python.on('close', code => {
            code === 0 ? 
                res.status(200).json(dataToSend) : res.status(500).json(dataToSend);
        });
    }
}

module.exports = new Summarization