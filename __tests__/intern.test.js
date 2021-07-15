const Intern = require("../libs/intern");

describe("Intern class", () => {
  describe("getName method", () => {
    it("returns name", () => {
      const intern = new Intern("Matilda Brantley", 1, "matildahbrantley@gmail.com", "Georgia Tech Bootcamp");
      expect(intern.getName()).toBe("Matilda Brantley");
    });
  });
  describe("getId method", () => {
    it("returns id", () => {
      const intern = new Intern("Matilda Brantley", 1, "matildahbrantley@gmail.com", "Georgia Tech Bootcamp");
      expect(intern.getId()).toBe(1);
    });
  });
  describe("getEmail method", () => {
    it("returns email", () => {
      const intern = new Intern("Matilda Brantley", 1, "matildahbrantley@gmail.com", "Georgia Tech Bootcamp");
      expect(intern.getEmail()).toBe("matildahbrantley@gmail.com");
    });
  });
  describe("getSchool method", () => {
    it("returns email", () => {
      const intern = new Intern("Matilda Brantley", 1, "matildahbrantley@gmail.com", "Georgia Tech Bootcamp");
      expect(intern.getSchool()).toBe("Georgia Tech Bootcamp");
    });
  });
  describe("getRole method", () => {
    it("returns string Intern", () => {
      const intern = new Intern("Matilda Brantley", 1, "matildahbrantley@gmail.com", "Georgia Tech Bootcamp");
      expect(intern.getRole()).toBe("Intern");
    });
  });
});
