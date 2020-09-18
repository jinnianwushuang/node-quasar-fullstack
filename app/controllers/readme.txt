 
 get 请求  path/path?page=1&size=50&name=ss
 const { page, size, name } = req.query;


get 请求  url 路径内代参数的  path/:id        
const id = req.params.id;

post请求  json  
req.body.name
