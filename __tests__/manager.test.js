const Manager = require("../libs/manager");

describe("Manager class", () => {
  describe("getName method", () => {
    it("returns name", () => {
      const manager = new Manager("Matilda Brantley", 1, "matildahbrantley@gmail.com", "360-463-3810");
      expect(manager.getName()).toBe("Matilda Brantley");
    });
  });
  describe("getId method", () => {
    it("returns id", () => {
      const manager = new Manager("Matilda Brantley", 1, "matildahbrantley@gmail.com", "360-463-3810");
      expect(manager.getId()).toBe(1);
    });
  });
  describe("getEmail method", () => {
    it("returns email", () => {
      const manager = new Manager("Matilda Brantley", 1, "matildahbrantley@gmail.com", "360-463-3810");
      expect(manager.getEmail()).toBe("matildahbrantley@gmail.com");
    });
  });
  describe("getRole method", () => {
    it("returns string Manager", () => {
      const manager = new Manager("Matilda Brantley", 1, "matildahbrantley@gmail.com", "360-463-3810");
      expect(manager.getRole()).toBe("Manager");
    });
  });
});
