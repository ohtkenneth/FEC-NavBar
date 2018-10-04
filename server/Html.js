// this file acts as html template to send with styles and bundle
// returns template literal
const Html = (body, styles) => {
  return (`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css">
        <title>NavBar</title>
        ${styles}
      </head>
      <body type="margin:0">
        <div id="navbar">${body}</div>
        <script>
          console.log('hello world');
        </script> 
        <script src="https://s3-us-west-1.amazonaws.com/fec-imdb/app/bundle.js"></script> 
      </body>
    </html>
  `);
}

export default Html;