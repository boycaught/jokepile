/* -----------------------------------------------------------------------

 Client operations

 ------------------------------------------------------------------------ */

exports.index = function(req, res){
  res.render('index', { title: 'Client API' });
  console.log()
};
