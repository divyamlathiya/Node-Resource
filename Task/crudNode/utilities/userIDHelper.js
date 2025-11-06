const fs = require('fs');
const path = require('path');

function generateUniqueId(existingIds) {
    let id;
    do {
        id = Math.floor(1000 + Math.random() * 9000).toString();
    } while (existingIds.has(id));
    return id;
};

const getExistingUserFiles = (dirPath) => {
    if (!fs.existsSync(dirPath)) return[]; 

    return fs.readdirSync(dirPath);
    
};

const checkFileExists = (filename, dirPath) => {
    const fullPath = path.join(dirPath, filename);
    return fs.existsSync(fullPath);
} 

module.exports = {
    generateUniqueId,
    getExistingUserFiles,
    checkFileExists
}