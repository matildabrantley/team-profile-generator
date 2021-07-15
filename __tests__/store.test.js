const Employee = require("../libs/employee");

describe("Employee class", () => {
  describe("getName method", () => {
    it("returns name", () => {
      const employee = new Employee("Matilda Brantley", 1, "matildahbrantley@gmail.com");
      expect(employee.getName()).toBe("Matilda Brantley");
    });

  });
  describe("getId method", () => {
    it("returns id", () => {
      const employee = new Employee("Matilda Brantley", 1, "matildahbrantley@gmail.com");
      expect(employee.getId()).toBe(1);
    });

  });
  describe("getEmail method", () => {
    it("returns email", () => {
      const employee = new Employee("Matilda Brantley", 1, "matildahbrantley@gmail.com");
      expect(employee.getEmail()).toBe("matildahbrantley@gmail.com");
    });

  });
  describe("getRole method", () => {
    it("returns string Employee", () => {
      const employee = new Employee("Matilda Brantley", 1, "matildahbrantley@gmail.com");
      expect(employee.getRole()).toBe("Employee");
    });

  });
});
