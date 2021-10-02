//  є масив юзрів (до 10), з такими полями наприклад :
//  const users = [ { name: 'maks', gender: 'female', age: 20 } ];
//  потрібно написати метод який створює файлики - де назва файлику - це імя вашого юзера (наприклад - maks.txt),
//  вміст це сам ваш юзер - { name: 'maks', gender: 'female', age: 20 }
//  перед тим створити 4 папки (програмно) - наприклад - manOlder20, manYounger20, womanOlder20, womanYounger20
//  і розподілити ваших юзерів саме по відповідних папках

const fs = require('fs');
const path = require('path');

const users = [
    {name: 'maks', gender: 'male', age: 19},
    {name: 'john', gender: 'male', age: 31},
    {name: 'karl', gender: 'male', age: 14},
    {name: 'elio', gender: 'male', age: 43},
    {name: 'galina', gender: 'female', age: 36},
    {name: 'karina', gender: 'female', age: 17},
    {name: 'oksana', gender: 'female', age: 24},
    {name: 'polina', gender: 'female', age: 55},
];

const manOlder = path.join(__dirname, 'manOlder');
const manYounger = path.join(__dirname, 'manYounger');
const womanOlder = path.join(__dirname, 'womanOlder');
const womanYounger = path.join(__dirname, 'womanYounger');

fs.mkdir(manOlder,{recursive: true}, (err) => {
   if(err) {
       console.log(err);
       return;
   }

   fs.mkdir(manYounger, {recursive: true}, (err) => {
      if(err) {
          console.log(err);
          return;
      }

      fs.mkdir(womanOlder, {recursive: true}, (err) => {
         if(err) {
             console.log(err);
             return;
         }

         fs.mkdir(womanYounger,{recursive: true}, (err) => {
             if(err) {
                 console.log(err);
                 return;
             }
             createFiles(users);
         });
      });
   });
});

const createFiles = (arr) => {
    arr.forEach(item => {
        if(item.gender === 'male' && item.age > 20) {
            fs.writeFile(path.join(manOlder, `${item.name}.json`), JSON.stringify(item), (err) => {
                if(err) {
                    console.log(err);
                }
            });
            return;
        }

        if(item.gender === 'male' && item.age <= 20) {
            fs.writeFile(path.join(manYounger, `${item.name}.json`), JSON.stringify(item), (err) => {
                if(err) {
                    console.log(err);
                }
            });
            return;
        }

        if(item.gender === 'female' && item.age > 20) {
            fs.writeFile(path.join(womanOlder, `${item.name}.json`), JSON.stringify(item), (err) => {
                if(err) {
                    console.log(err);
                }
            });
            return;
        }

        if(item.gender === 'female' && item.age <= 20) {
            fs.writeFile(path.join(womanYounger, `${item.name}.json`), JSON.stringify(item), (err) => {
                if(err) {
                    console.log(err);
                }
            });
        }
    });
}
