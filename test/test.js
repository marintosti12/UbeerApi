var assert = require('assert');
const frisby = require('frisby');
const {expect} = require("chai");


describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});


it('should be user 1', function () {
    return frisby.get('http://localhost:3000/api/beers/1')
        .then(function (res) {
            expect(res.json.id).equal(1),
            expect(res.json.name).equal("Spered")
        });
});