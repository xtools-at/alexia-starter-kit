/**
 * Register HelloIntent
 * Example invocation 1:
 *      - 'Alexa, ask <my-app-name> to say hello'
 *
 * Example invocation 2:
 *      - 'Alexa, start <my-app-name>'
 *      - 'hello'
 */
module.exports = app => {

  // Hello
  const helloUtterances = [
    'Hallo',
    'Hallo Hermann'
  ];

  app.intent('HelloIntent', helloUtterances, () => {
    return {
      text: 'Hallo, wer auch immer du bist',
      end: false
    };
  });

};
