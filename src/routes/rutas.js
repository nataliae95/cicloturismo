module.exports = {
    getRoutes: (req, res) => {
        let query = "SELECT * FROM `usuarios` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            
            res.render('rutas.ejs', {
               
                players: result
            });
        });
    },
};