$(document).on("click", ".btn-danger", function () {
        var i;
        for(i=0;i<64;i++){
          $("#tbox"+i).css('background-color','#eee');
          $("#tbox"+i).css('color','black');
        }

    });

$(document).on("click", ".diet_solver", function () {
        $("#table_container").hide();
    });

/*Change colors on image click*/
function image_click(id){
      if(!$("#cbox"+id).is(':checked')){
        $("#tbox"+id).css('background-color','#FF6600');
        $("#tbox"+id).css('color','white');
      }
      else{
        $("#tbox"+id).css('background-color','#eee');
        $("#tbox"+id).css('color','black');
      }
    }

/*Change colors of all images for select all*/
function select_all(){
    for(var i = 0; i<64; i++){
      if(!$("#cbox"+i).is(':checked')){
        $("#cbox"+i).prop('checked', true);
        $("#tbox"+i).css('background-color','#FF6600');
        $("#tbox"+i).css('color','white');
      }
    }
}

/*Main function*/
function solve_diet(){
      $("#results").empty();
      $("#results").hide();
      var checked = false;

      for(var i = 0; i<64; i++)
        if($("#cbox"+i).is(':checked')){
          checked = true;
          break;
        }

      if(checked){
        $("#results").fadeIn("slow");
        var rows, cols, temp, index, cost, food_count = 0;
        var food_list = new Array();
        var minMax = [2000,0,0,0,0,25,50,5000,50,800,10,2250,300,65,2400,300,100,100,50000,20000,1600,30];

          for(var i=0;i<64;i++){
            if($("#cbox"+i).is(":checked")){
              food_count++;
              food_list.push($("#cbox"+i).val());
            }
          }

          rows = food_count + 1;
          cols = 22+(2*food_count)+food_count+2; //22 = min/max nutrient constraints, 2*food count = min/max servings 
                                                 //food count = slack variables, 2 = z + answer columns 
          
          var array = new Array(rows);

          for (var i = 0; i < rows; i++)
              array[i] = new Array(cols);

          for (var i = 0; i < rows; i++)
              for (var j = 0; j < cols; j++)
                  array[i][j] = 0;

          var len = food_list.length, row_index;

          for(var i = 0; i< len; i++)
            for(var j = 0; j<cols; j++){
              row_index = food_list[i];
              if(j<11){
                array[i][j] = food_item[row_index][j];
              }
              else if(j>=11 && j<22){
                array[i][j] = food_item[row_index][j-11];
              }
              else if(j==22+i || j==22+i+len){
                array[i][j] = 1;
              }
              else if(j==22+(len*2)+i){
                array[i][j] = 1;
              }
              else if(j==cols-1){
                array[i][j] = food_item[row_index]["price_per_serving"];
              }
            }

          var minMax_len = minMax.length;
          for(var j = 0; j< cols; j++){
            if(j<minMax_len){
              array[rows-1][j] = minMax[j];
            }
            else if(j<minMax_len+len){
              array[rows-1][j] = 0;
            }
            else if(j<minMax_len+(len*2)){
              array[rows-1][j] = 10;
            }
            else if(j==cols-2){
              array[rows-1][j] = 1;
            }
          }

          for(var i = 0; i<rows; i++)
            for(var j = 0; j<cols; j++){
              if(j>=11 && j<22 && array[i][j] != 0){
                array[i][j] *= -1; 
              }
              else if(j>=22+len && j<22+(len*2) && array[i][j] != 0){
                array[i][j] *= -1; 
              }
          }

          for(var j=0;j<cols;j++){
            if(array[rows-1][j] != 0 && j!=cols-2)
            array[rows-1][j] *= -1;
          }

          minimize(rows,cols,array);

          text = $("<h2/>").text("DIET SOLVER RESULTS");
          $("#results").append(text);
          text = $("<label></label>").text("**The cost of this optimal diet is $"+ +array[rows-1][cols-1].toFixed(2)+" per day.");
          $("#results").append(text);
          var text, table = $("<table class='table table-bordered' style='width: 750px;'/>"), row = $("<tr/>");

          row.append($("<th class='info'/>").text("NAME"));
          row.append($("<th class='info'/>").text("SERVING"));
          row.append($("<th class='info'/>").text("COST"));
          table.append(row);

          for (var j = 0; j < cols; j++){
              if(j>=22+(len*2) && j <cols-2 && array[rows-1][j]!=0){
                row = $("<tr/>");
                temp = 22+(len*2) - j;
                index = food_list[temp*-1];
                cost = array[rows-1][j].toFixed(2) * food_item[index].price_per_serving;
                row.append($("<td/>").text(food_item[index].name));
                row.append($("<td/>").text(+array[rows-1][j].toFixed(2)));
                row.append($("<td/>").text(+cost.toFixed(2)));
                table.append(row);
              }
            }
              $("#results").append(table);

    }

    else{
      $("#results").fadeIn("slow");
      $("#results").append($("<div class='alert alert-danger' style='margin-left:-280px;'></div>").text("ERROR: You must choose at least one(1) food item."));
    }
    
}

function minimize(rows, cols, array){
        var r_index, c_index, c_elem, min = 0, aoverb = 100000, pivot, positive = true;
        for(c=0;c<cols-1;c++){
            if(array[rows-1][c] < min){
                c_index = c;
                min=array[rows-1][c];
            }
        }
        for(r=0;r<rows;r++){
            if(array[r][c_index] > 0 && (array[r][cols-1]/array[r][c_index]) < aoverb){
                aoverb = array[r][cols-1]/array[r][c_index];
                pivot = array[r][c_index];
                r_index = r; 
            }
        }

        for(c=0;c<cols;c++){
            try{
              array[r_index][c] = array[r_index][c]/pivot;
            }
            catch(e){
              var text = $("<h2/>").text("DIET SOLVER RESULTS: The problem is infeasible");
              $("#results").append(text);
              text = $("<label/>").text("**It is not possible to meet the nutritional constraints with the food that you have selected.");
              $("#results").append(text);
              $("#results").show();
              break;
            }
        }

        for(r=0;r<rows;r++){
            if(r!=r_index){
                c_elem = array[r][c_index];
                for(c=0;c<cols;c++){
                    array[r][c] = array[r][c] - (c_elem * array[r_index][c]);
                }
            }
        }

        for(c=0;c<cols;c++)
            if(array[rows-1][c] < 0){
                positive = false;
            }

        if(!positive) minimize(rows,cols,array);
}