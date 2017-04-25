/*Creates the tabular results of the Ultimate Optimizer output*/
function make_table(rows, cols, count, array){
        var itr,counter1,counter2,solution,table = $("<table class='table'/>");
        
        for (var r = 0; r < rows; r++) {
            var row = $("<tr/>");
            for (var c = 0; c < cols; c++) {
                if(r==0) row.append($("<th class='info'/>").text(array[r][c]));
                else if(r%2==0)
                row.append($("<td class='info'/>").text(array[r][c]));
                else row.append($("<td/>").text(array[r][c]));
            }
            table.append(row);
        }
        
        itr = $("<label></label>").text("Iteration #"+count);
        $("#table_body").append(itr);
        $("#table_body").append(table);

        table = $("<table class='table'/>");
        row = $("<tr/>");
        row.append($("<th class='danger'/>").text("Basic Solution: "));
        table.append(row);
        $("#table_body").append(table);
        row = $("<tr/>");
        
        for(var c=0;c<cols-1;c++){
            counter1=0;
            counter2=0;
            for(var r=0; r< rows; r++){
                if(array[r][c] == 1 || array[r][c] == -1){
                    counter1++;
                    solution = array[r][cols-1];
                }
                else if(array[r][c] != 0){
                    counter2++;
                }
            }
            if(counter1 > 1 || counter2 > 1) solution = 0;

            row.append($("<td/>").text(array[0][c]+" = "+solution));
        }
        
        table.append(row);
        $("#table_body").append(table);
    }

function make_table2(rows, cols, count, r_ind, array){
        var itr,counter1,counter2,solution,table = $("<table class='table'/>");
        
        for (var r = 0; r < rows; r++) {
            var row = $("<tr/>");
            for (var c = 0; c < cols; c++) {
                if(r==0) row.append($("<th class='info'/>").text(array[r][c]));
                else if(r%2==0)
                row.append($("<td class='info'/>").text(array[r][c]));
                else row.append($("<td/>").text(array[r][c]));
            }
            table.append(row);
        }
        
        itr = $("<label></label>").text("Iteration #"+count);
        $("#table_body").append(itr);
        $("#table_body").append(table);

        table = $("<table class='table'/>");
        row = $("<tr/>");
        row.append($("<th class='danger'/>").text("Basic Solution: "));
        table.append(row);
        $("#table_body").append(table);
        row = $("<tr/>");

        for(var j = r_ind-2; j< cols; j++){
            if(j>=r_ind-2 && j<cols-2){
                solution = array[rows-1][j];
                row.append($("<td/>").text(array[0][j]+" = "+solution));
            }
            else if(j==cols-1){
                solution = array[rows-1][j];
                row.append($("<td/>").text(array[0][j]+" = "+solution));
            }

        }
        table.append(row);
        $("#table_body").append(table);
    }