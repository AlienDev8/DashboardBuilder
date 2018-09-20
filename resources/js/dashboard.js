/*
 * Modified by: Roberto valles
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$("#view-main").load("gridboard.html");
$(document).ready(function(){
  new Vue({
    el:"#dashboardApp",
    data: {
      titulo:"Tablero",
      subtitulo:"Principal"
    },
  });

})
