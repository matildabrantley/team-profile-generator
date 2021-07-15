const Engineer = require("../libs/engineer");

describe("Engineer class", () => {
  describe("getName method", () => {
    it("returns name", () => {
      const engineer = new Engineer("Matilda Brantley", 1, "matildahbrantley@gmail.com", "matildabrantley");
      expect(engineer.getName()).toBe("Matilda Brantley");
    });
  });
  describe("getId method", () => {
    it("returns id", () => {
      const engineer = new Engineer("Matilda Brantley", 1, "matildahbrantley@gmail.com", "matildabrantley");
      expect(engineer.getId()).toBe(1);
    });
  });
  describe("getEmail method", () => {
    it("returns email", () => {
      const engineer = new Engineer("Matilda Brantley", 1, "matildahbrantley@gmail.com", "matildabrantley");
      expect(engineer.getEmail()).toBe("matildahbrantley@gmail.com");
    });
  });
  describe("getGithub method", () => {
    it("returns email", () => {
      const engineer = new Engineer("Matilda Brantley", 1, "matildahbrantley@gmail.com", "matildabrantley");
      expect(engineer.getGithub()).toBe("matildabrantley");
    });
  });
  describe("getRole method", () => {
    it("returns string Engineer", () => {
      const engineer = new Engineer("Matilda Brantley", 1, "matildahbrantley@gmail.com", "matildabrantley");
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});
