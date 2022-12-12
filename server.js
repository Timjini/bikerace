app.get("*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) 
    url = url.substring(1);
   res.sendFile(url);
 });