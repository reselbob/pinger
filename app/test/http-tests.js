'use strict';
const supertest = require('supertest');
const chai = require('chai');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;

const {server,shutdown} = require('../server');

describe('HTTP Tests: ', () => {
    after(function () {
        shutdown();
    });
    it('Can access GET ALL /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=networkInfo')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('Can access GET requestHeaders /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=requestHeaders')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('Can access GET envVars /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=envVars')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('Can access GET memoryUsage /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=memoryUsage')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                done();
            })
            .catch(done);
    });

    it('Can access GET currentTime /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=currentTime')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.a('string');
                done();
            })
            .catch(done);
    });

    it('Can access GET requestUrl /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=requestUrl')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.a('string');
                done();
            })
            .catch(done);
    });

    it('Can access GET remoteAddress /', function(done){
        //Go get all the lists
        supertest(server)
            .get('/?type=remoteAddress')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.a('string');
                done();
            })
            .catch(done);
    });
});