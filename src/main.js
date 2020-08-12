class Vistor {
    constructor(fullName){
        this.fullName = fullName;
    };

    save(){
        return 'saved'    
    }

    load(nameInput){
        console.group(nameInput)
    }
};



module.exports = Vistor;