const controller = require("../controller/controller.js");
// const testDATA=require("../utilites.js")
const fs = require("fs")
const chai = require("chai");
const server = require("../index.js")
const chaiHttp = require("chai-http");

const {
    response
} = require("express");
const {
    ServerSession
} = require("mongodb");
const {
    it
} = require("mocha");

const rawdata = fs.readFileSync("test/utilites.json")
const jsondata = JSON.parse(rawdata);
chai.use(chaiHttp)
chai.should()

describe("task api", () => {




    describe("GET /getnote", () => {
        it("get Welcome", (done) => {
            chai.request(server).get("/").end((err, response) => {
                response.should.have.status(200)
                response.text.should.be.eq("wellcome")
                done();
            })
        })
    })


    describe("Post login", () => {
        it("login", () => {
            const data = {
                "Email":"vishal2@gamail.com",
                "Password":"rajesh"            }
            chai.request(server).post("/login").send(data).end(() => {
                response.should.have.status(200);
                done();
            })
        })
    })


    describe("Post /register", () => {
        const inputbody = jsondata.test2
        console.log("datttt", inputbody)
        it("registration", () => {
            chai.request(server).post("/register").send(inputbody).end(() => {
                response.should.have.status(200);
                response.body.should.have.property("message").eq("Registerd successfully");

                done();
            })
        })
    })



    // work without authentication

    // describe("GET /getnote",()=>{
    //     it("GET /isDelete",(done)=>{
    //         chai.request(controller.DeletedNotes).get("/isDelete").end((err,response)=>{
    //             response.should.have.status(200)
    //             done();
    //         })
    //     })
    // })


    // describe("GET /getnote", () => {
    //     it("trashed /trashnote", (done) => {
    //         chai.request(server).delete("/trashnote").end((err, response) => {
    //             response.should.have.status(200)
    //             response.body.should.be.a("object");
    //             response.body.should.have.property("message").eq("Deleted Notes Sucessfully")


    //             done();
    //         })
    //     })
    // })





})