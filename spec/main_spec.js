var Vistor = require('../src/main');

var vistor = new Vistor();
vistor.fullName = "Darth Vader"

describe("Vistor",()=>{
    it("should have full name", ()=>{
        expect(vistor.fullName).toBeDefined();
    });
    it("should have age variable", ()=>{
        expect(vistor.age).toBeDefined();
    });
    it("should have date_of_visit variable", ()=>{
        expect(vistor.dateOfVisit).toBeDefined();
    });
    it("should have time_of_visit variable", ()=>{
        expect(vistor.timeOfVisit).toBeDefined();
    });
    it("should have comments variable", ()=>{
        expect(vistor.comments).toBeDefined();
    });
    it("should have name of assisted vistor variable", ()=>{
        expect(vistor.assistedBy).toBeDefined();
    });

    it("should have date_of_visit variable", ()=>{
        expect(vistor.dateOfVisit).toBeInstanceOf(Date);
    });
    
});

describe("save function in Visitor",()=>{
    //to be mocked
    it('should save vistors details in a json file',()=>{
        expect(vistor.save()).toHaveBeenCalled();
    });
});

describe("load function in Visitor",()=>{
    //to be mocked
    it('should return vistors details',()=>{
        expect(load("Darth Vader").toBe('dart vaders details'));
    });
});