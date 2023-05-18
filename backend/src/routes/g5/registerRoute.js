import express from "express";
const groupFiveRouter = express.Router();

groupFiveRouter.get("/", (req, res) => {
    res.send("Hello World");
});

groupFiveRouter.get("/search", (req, res) => {
    if (req.query.name) {
        global.connection.query(
            "SELECT * FROM tracks WHERE name LIKE ?",
            [req.query.name + "%"],
            (err, rows) => {
                // Check if cannot find the data in the database then return the error
                if (err) {
                    res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                } else {
                    // Return data to the client if success
                    return res.json({
                        success: true,
                        data: rows,
                        error: null,
                    });
                }
            }
        );
    } else {
        global.connection.query("SELECT * FROM tracks", (err, rows) => {
            // Check if cannot find the data in the database then return the error
            if (err) {
                res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                // Return data to the client if success
                return res.json({
                    success: true,
                    data: rows,
                    error: null,
                });
            }
        });
    }
});

groupFiveRouter.get("/section/:sectionId", (req, res) => {

    global.connection.query(
        "SELECT * FROM tracks WHERE id=? ",
        [req.params.sectionId],
        (err, rows) => {
            // Check if cannot find the data in the database then return the error
            if (err) {
                res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            } else {
                // Return data to the client if success
                return res.json({
                    success: true,
                    data: rows,
                    error: null,
                });
            }
        }
    );
    // res.send(req.params.sectionId);
	// console.log(req.params.sectionId);
});

export default function registerGroupFive(app) {
    app.use("/groupFive", groupFiveRouter);
}
