var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    // constructor
    function Car(regNo) {
        this.regNo = regNo;
    }
    return Car;
}());
var Maruti = /** @class */ (function (_super) {
    __extends(Maruti, _super);
    function Maruti() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // implementing abstract method
    Maruti.prototype.brakingSystem = function () {
        console.log("Braking system of Maruti car having registrtion no. " + this.regNo + " has been applied.");
    };
    return Maruti;
}(Car));
var Suzuki = /** @class */ (function (_super) {
    __extends(Suzuki, _super);
    function Suzuki() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // implementing abstract method
    Suzuki.prototype.brakingSystem = function () {
        console.log("Braking system of Suzuki car having registrtion no. " + this.regNo + " has been applied.");
    };
    return Suzuki;
}(Car));
var mc = new Maruti(9065);
mc.brakingSystem();
var sc = new Suzuki(8075);
sc.brakingSystem();
