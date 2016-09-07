Feature('My First Test');
Scenario('add Class on body', (I) => {
    I.amOnPage('/');
    I.click('Test');
    I.seeElement('.btn-toggle');
});
