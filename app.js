const fs = require('fs');
const path = require('path');

const boys = path.join(__dirname, 'boys');
const girls = path.join(__dirname, 'girls');

const sortUsersByGender = (chooseGender, moveTo, gender) => {
    fs.readdir(chooseGender, (err, data) => {
        if(err) {
            console.log(err);
            return;
        }

        data.forEach(item => {
            fs.readFile(path.join(chooseGender, item), (err, data) => {
                if(err) {
                    console.log(err);
                    return;
                }

                const chosenGender = JSON.parse(data).gender;

                if(chosenGender === gender) {
                    fs.rename(path.join(chooseGender, item), path.join(moveTo, item),(err) => {
                        if(err) {
                            console.log(err);
                        }
                    });
                }
            });
        });
    });
}

sortUsersByGender(boys, girls, 'female');
sortUsersByGender(girls, boys, 'male');