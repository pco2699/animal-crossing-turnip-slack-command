import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest(async (req, res) => {
    if (!req.body) {
        console.log(req.body);
        const error = new Error('Invalid credentials');
        throw error;
    }
    const arg = req.body.text;
    res.send({
        text: `https://ac-turnip.com/p-${arg}.png`,
        response_type: "in_channel"
    });
});
