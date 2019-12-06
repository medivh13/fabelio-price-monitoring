var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();
chai.use(chaiHttp);

describe ("CRUD OPERATIONS", function(){

    var products = [{
        "imgUrls": ["https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/w/h/white_02_1.jpg",
    "https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/w/h/white_01_1.jpg",
    "https://m2fabelio.imgix.net/catalog/product/cache/image/700x350/e9c3970ab036de70892d86c6d221abfe/w/h/white_2seater_01_1.jpg"],
        "url": "https://fabelio.com/ip/michelle-sofa-modular-1-seater-custard.html",
        "name": "Sofa 1 Kursi Modular Michelle - Custard",
        "description": '<div id="description"><p dir="ltr"><strong>Teman Melepas Penat dan Mencari Inspirasi</strong></p><p dir="ltr">Bagi Kalian yang memiliki mimpi yang tinggi, terkadang dihalangi oleh pikiran-pikiran yang membuat kepala pusing. Letih dan lelah dapat diobati dengan menyenderkan badan kepada sebuah sofa. Singgahkan waktu sejenak bersama&#xA0;<strong>Modular Michelle Sofa 1 Seater</strong>.</p><p dir="ltr">Dengan bahan yang berkualitas tinggi dan bantal besar yang empuk serta tidak memiliki sandaran tangan membuat Modular Michelle Sofa 1 seater menjadi pilihan bagi kalian yang menyukai fleksibelitas. Memiliki dimensi 90cm x 180cm x 65cm serta bantal dengan bahan Foam/Dacron yang sangat nyaman, ukuran yang pas dapat diletakkan dimanapun serta warna yang dapat membangkitkan semangat.</p><p><em><br></em></p><p><em>NB:&#xA0;Untuk produk yang memerlukan perakitan, akan dilakukan beberapa hari setelah produk dikirim. Apabila telah melebih dari 7 (tujuh) hari setelah produk dikirim belum ada tim kami yang menghubungi jadwal perakitan, Mohon segera hubungi tim Customer Service kami.</em></p></div>',
        "prices":[{
            "price":1274000,
            "at": Date.now
        }]
    }];

    it("Should add Product in DB", (done) => {
        for ( var product in products) {
            chai.request(server)
                .post("/")
                .send(products[product])
                .end((err, res) => {
                    res.should.have.status(200);
                    console.log("Response Body:", res.body);
                        
                });
        }
        done();
    });

    it ("Should Fecth all the Products", (done)=>{
        chai.request(server)
            .get("/")
            .end((err, result)=>{
                result.should.have.status(200);
                console.log ("Got",result.body.data, " docs");
                done();
            });
    });

});

