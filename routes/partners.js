exports.show = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err) 
            return next(err);
        connection.query('SELECT * from partners', [], function(err, results) {
            if (err) return next(err);

            res.render( 'partners', {
                partners : results,
            });
      });
    });
  };

exports.add = function (req, res, next) {
    req.getConnection(function(err, connection){
        if (err){ 
            return next(err);
        }
        
        var input = JSON.parse(JSON.stringify(req.body));

        console.log("***********************");
        console.log(input);

        var data = {
                    name : input.name,
                    surname : input.surname,
                    id_number : input.id_number,
                    cell_number : input.cell_number,
                    licence_number: input.licence_number,
                    email : input.email

            };

        console.log("***********************");
        console.log(data);

        connection.query('insert into partners set ?', data, function(err, results) {
                if (err)
                        console.log("Error inserting : %s ",err );
         
                res.redirect('/partners');
            });
    });
};

exports.get = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM partners WHERE id = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.render('Editpartners',{page_title:"Edit Customers - Node.js", data : rows[0]});      
        }); 
    });
};

exports.update = function(req, res, next){

    var data = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    var input = JSON.parse(JSON.stringify(req.body));
        var data = {
                    name : input.name,
                    surname : input.surname,
                    id_number : input.id_number,
                    cell_number : input.cell_number,
                    licence_number: input.licence_number,
                    email : input.email

            };
        req.getConnection(function(err, connection){
            connection.query('UPDATE partners SET ? WHERE id = ?', [data, id], function(err, rows){
                if (err){
                        console.log("Error Updating : %s ",err );
                }
                res.redirect('/partners');
            });
            
    });
};

exports.delete = function(req, res, next){
    var id = req.params.id;
    req.getConnection(function(err, connection){
        connection.query('DELETE FROM partners WHERE id = ?', [id], function(err,rows){
            if(err){
                    console.log("Error Selecting : %s ",err );
            }
            res.redirect('/partners');
        });
    });
};
