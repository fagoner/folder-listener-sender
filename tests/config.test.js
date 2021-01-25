const config = require('../src/lib/config');

const d = require('jest');

test('path should be setted', () => {
    expect(config.path).toBeTruthy;
    expect(config.filter).toBeTruthy;
});

test('filter should be setted', () => {
    expect(config.filter).toBeTruthy;
});