const fs = require("fs");
const path = require("path");

module.exports = (folder_name, file_extension, callback) => {
    fs.readdir(folder_name, (err, data) => {
        if (err) {
            return callback(err)
        } else {
            const res = data.filter((file) => path.extname(file) === `.${file_extension}`)
            callback(null, res)
        }
    })
}