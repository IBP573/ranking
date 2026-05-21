
const express = require("express");

const app = express();

app.get("/ranking", (req, res) => {

    const ranking = [

        {
            position: 1,
            userId: "8530006051",
            username: "Aiiin jummma",
            crown: 999
        },

        {
            position: 2,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 3,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 4,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 5,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 6,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 7,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 8,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 9,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 10,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 11,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 12,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 13,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 14,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 15,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 16,
            userId: "",
            username: "",
            crown: 0
        },

        {
            position: 17,
            userId: "",
            username: "",
            crown: 0
        }

    ];

    res.json({
        success: true,
        page: 1,
        limit: 100,
        total: ranking.length,
        ranking: ranking
    });

});

app.listen(3000, () => {

    console.log("RANK API ONLINE 🚀");

});
