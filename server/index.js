/* -----------------------------------------------------------------------

 Server operations

 ------------------------------------------------------------------------ */

exports.index = function(req, res){
  res.render('index', { title: 'Server API' });
  console.log()
};
