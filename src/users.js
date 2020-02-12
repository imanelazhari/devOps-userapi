const configure = require('../src/configure')
const path = require('path')
const fs = require('fs')
const os = require('os')

config = configure()

module.exports = {
    create: (user, callback) => {
        if (!user.username) return callback(new Error('Wrong user parameter'), null)

        //TODO check if user already exists

        strUser = `${user.username}:${user.firstname}:${user.lastname}${os.EOL}`
        fs.appendFile(path.join(config.users.db_dir,'users'), strUser, (err) => {
            if(err) throw err
            callback(null, user.username)
        })
    },

    get: (username, callback) => {
        fs.readFile(path.join(config.users.db_dir, 'users'), 'utf8',(err, data) => {
            if(err) throw err
            contents = data.split(`${os.EOL}`)
            contents.forEach(content => {
                content = content.split(':')
                if(content[0] == username){
                    const user = {
                        username: content[0],
                        firstname: content[1],
                        lastname: content[2]
                    }
                    callback(null, user)
                }
            });
        })
    }
}
