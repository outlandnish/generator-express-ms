'use strict';

let request = require('supertest');
let expect = require('expect.js');
let app = require('../app');

describe('Hello Route', () => {   
    it('says hello', (done) => { 
        request(app)
            .get('/')
            .query({ name: 'Bob' })
            .expect(saysHelloBob)
            .end(done);
    });
});

function saysHelloBob(res) {
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello Bob')
}