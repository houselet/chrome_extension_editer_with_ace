

var ed=ace.edit("ed");

ed.setTheme("ace/theme/twilight"); // Setting Themes
ed.session.setMode("ace/mode/c_cpp"); // Setting the Programming Language Mode
ed.setShowPrintMargin(false);
document.getElementById('ed').style.fontSize='10px'; // Set the font size
ed.getSession().setUseWrapMode(true); // Toggle word wrapping


// load last editor content
var edcontent  = localStorage.getItem("edcontent");
if (edcontent) ed.getSession().setValue(edcontent);
delete edcontent;

// waste!! but its' working...
ed.getSession().on('change', function(){ 
     localStorage.setItem("edcontent", ed.getSession().getValue());
});
