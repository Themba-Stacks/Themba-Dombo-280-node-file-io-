var { Visitor, load } = require('../src/main');

describe("save", () => {

    it('should have been called', () => {
        const Luke = new Visitor();
        Luke.fullName = "Luke Vader";
        saveSpy = spyOn(Luke, "save");
        Luke.save('results');
        expect(saveSpy).toHaveBeenCalled();
    });
});

describe("load", () => {
    it('should have been called', () => {
        const loaded = { load }
        loadSpy = spyOn(loaded, "load");
        loaded.load("John Vader", "results")
        expect(loadSpy).toHaveBeenCalled();
    });
});

describe("Visitor", () => {
    var Darth = new Visitor();
    beforeAll(() => {

        Darth.fullName = "Darth Vader";
        Darth.age = 21;
        Darth.dateOfVisit = "2020/12/24";
        Darth.timeOfVisit = "11:15";
        Darth.comments = "came to hangout with a friend";
        Darth.assistedBy = "Kelly"
        Darth.save('results');
    });

    afterAll(() => {
        Darth.delete('results');
    });

    it("should have full name", () => {
        expect(Darth.fullName).toBeDefined();
    });
    it("should have age variable", () => {
        expect(Darth.age).toBeDefined();
    });
    it("should have date_of_visit variable", () => {
        expect(Darth.dateOfVisit).toBeDefined();
    });
    it("should have time_of_visit variable", () => {
        expect(Darth.timeOfVisit).toBeDefined();
    });
    it("should have comments variable", () => {
        expect(Darth.comments).toBeDefined();
    });
    it("should have name of assisted visitor variable", () => {
        expect(Darth.assistedBy).toBeDefined();
    });
});
