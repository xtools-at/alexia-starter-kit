'use strict';

module.exports = app => {

  // handle mandatory built-in Intents
  const stopUtterances = [
    'stop',
    'halt',
    'ausschalten'
  ];
  const cancelUtterances = [
    'abbrechen',
    'cancel',
    'aufhoeren'
  ];
  const helpUtterances = [
    'hilfe',
    'starte hilfe',
    'hilf mir',
    'was kann ich sagen'
  ];

  app.builtInIntent('stop', stopUtterances, () => '');

  app.builtInIntent('cancel', cancelUtterances, () => '');

  app.builtInIntent('help', helpUtterances, () => {
    var speech = '<speak>';
    speech += 'To retrieve exchange rates for the Pound, ask me for example <s>Whats the exchange rate for the Swiss Franc</s>';
    speech += 'To convert currencies, ask me <s>How much is 100 Dollar in Euro</s>';
    sppech += 'To retrieve specific exchange rates, ask me <s>Whats the exchange rate between Swiss Franc and Euro</s>';
    speech += '<s>How can I help you</s>';
    speech += '</speak>';

    return {
      ssml: true,
      text: speech,
      end: false
    };
  });
};