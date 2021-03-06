var fs = require('fs');

class Visitor {
    
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, assistedBy){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.assistedBy = assistedBy;
    };
    
    save(filePath = "../results"){
        let saveObject = {full_name:this.fullName, age:this.age, date_of_visit:this.dateOfVisit, time_of_visit:this.timeOfVisit, comments:this.comments, assisted_by:this.assistedBy};
        let saveJSON = JSON.stringify(saveObject);

        let saveName = this.fullName.toLowerCase().replace(' ','_');        
        fs.writeFile(`${filePath}/visitor_${saveName}.json`, saveJSON, function (err) {
            if (err) throw err;
            console.log('saved!');
          });
    }

    delete(filePath = "../results"){
        let deleteName = this.fullName.toLowerCase().replace(' ','_');        
        fs.unlink(`${filePath}/visitor_${deleteName}.json`,  function (err) {
            if (err) throw err;
            let name = deleteName.split('_')
            console.log(`${name[0]} file deleted!`);
          });
    }

};

function load (fullNameInput,filePath = "../results") {
    let personName = fullNameInput.toLowerCase().replace(' ','_');
    let personObject='';
    fs.readFile(`${filePath}/visitor_${personName}.json`, (err, data)=>{
        if (err) throw err;
        console.log("file read successful");
        personObject = JSON.parse(data);
        console.log(personObject);
    })
};


module.exports = { Visitor, load};
