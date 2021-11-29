"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.allInvoices = exports.createInvoice = void 0;
require("dotenv").config();
var zohoApi_1 = require("../apis/zohoApi");
var _a = require("../data/datadb"), query = _a.query, addInvoice = _a.addInvoice;
//Create the table in SQL if is not exist
query("CREATE TABLE IF NOT EXISTS invoices (\n        invoice_id      VARCHAR(255) NOT NULL,\n        contact_id    VARCHAR(255) NOT NULL,\n        total    INT(200) NOT NULL,\n        created_date  DATE DEFAULT (CURRENT_DATE),\n        PRIMARY KEY(invoice_id))").then(function () { return console.log("Table Invoice Created"); })["catch"](function (err) { return console.log(err); });
function createInvoice(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, clientId, description, total, invoice, newInvoice, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, clientId = _a.clientId, description = _a.description, total = _a.total;
                    invoice = {
                        "customer_id": clientId,
                        "line_items": [
                            {
                                "item_id": "227465000000045237",
                                "item_order": 1,
                                "bcy_rate": total,
                                "rate": total,
                                "quantity": 1
                            }
                        ],
                        "header_name": "Testing invoices",
                        "reason": description
                    };
                    return [4 /*yield*/, new zohoApi_1.ZohoApi(req.token).createInvoice("invoices", invoice)
                        //Add the invoice in SQL
                    ];
                case 1:
                    newInvoice = _b.sent();
                    //Add the invoice in SQL
                    return [4 /*yield*/, addInvoice(newInvoice.data.invoice.invoice_id, clientId, total)];
                case 2:
                    //Add the invoice in SQL
                    _b.sent();
                    res.end();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1);
                    res.status(500).send(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createInvoice = createInvoice;
function allInvoices(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var invoicesInfo, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, new zohoApi_1.ZohoApi(req.token).getAllInvoices("invoices")];
                case 1:
                    invoicesInfo = _a.sent();
                    res.send(invoicesInfo.data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    res.status(500).send(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.allInvoices = allInvoices;
