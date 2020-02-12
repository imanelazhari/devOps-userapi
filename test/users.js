const {expect} = require('chai')
const configure = require('../src/configure')
const path = require('path')
const users = require('../src/users')

describe('Users', ()=> {
  it('create user', ()=> {
    config = configure()
    const user = {
        username: 'robin_d',
        firstname: 'Robin',
        lastname: 'Dutertre'
    }
    users.create(user, (err, result) => {
        expect(err).to.be.null
        expect(result).to.equal('robin_d')
    })
  })

  it('passing wrong user parameters', ()=> {
    config = configure()
    const user = {
        firstname: 'Robin',
        lastname: 'Dutertre'
    }
    users.create(user, (err, result) => {
        expect(err).to.not.be.null
        expect(result).to.be.null
    })
  })

  it('get user', ()=> {
    config = configure()
    const user = {
        username: 'robin_d',
        firstname: 'Robin',
        lastname: 'Dutertre'
    }
    users.get(user, (err, result) => {
        console.log(result)
        expect(err).to.be.null
        expect(result).to.equal(user)
    })
  })
})
