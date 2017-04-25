/*
Parse the values in the Objective Function and Constraints input fields
*/
function submit_inputs(){
        $("#table_body").empty();
        $("#table_container").hide();
        $("#table_container").fadeIn("slow");
        
        var row = 2, col = 1, match, str = $("#of").val();
        var regex = /\-*[0-9]*\.*[0-9]*\w+\d*/g, get_var = /[a-y]/g, get_var2 = /[a-z]/g;
        var get_coef = /\-*[0.9]*\.*[0-9]*/g, slack = /\<*\>*/g
        var array = new Array(row);
        str = str.replace(/\s+/g, '');
        count = 1;

        if(str.length == 0){
            $("#table_body").empty();
            $("#table_body").append($("<div class='alert alert-danger'></div>").text("ERROR: Please enter the Objetive Function."));
        }

        else{
            if($("#min").is(':checked')) col = 0;

            for(var i = 1; i<tbox_count; i++)
                if($("#cons"+i).val() != ''){
                    row++;
                    if($("#max").is(':checked')) col++;
                }

            match = str.match(regex);
            col = col + match.length;

            match = str.match(get_var);

            for (var i = 0; i < row; i++)
                array[i] = new Array(col);

            for (var i = 0; i < row; i++)
                for (var j = 0; j < col; j++)
                    array[i][j] = 0;

            for(var j=0; j<col; j++){
                if(j<(match.length))
                    array[0][j] = match[j];
                else if(j == (col-2) && $("#max").is(':checked'))
                    array[0][j] = "z";
                else if(j == (col-1))
                    array[0][j] = "Answer";
                else if($("#max").is(':checked'))
                    array[0][j] = "s" + (j-match.length+1);
            }

            for(var i = 1; i<=row-2;i++){
                str = $("#cons"+i).val();
                str = str.replace(/\s+/g, '');
                match = str.match(regex);

                if($("#max").is(':checked')){
                slack_var = str.match(slack);

                for(var temp = 0; temp<slack_var.length;temp++){
                    if(slack_var[temp] == '<')
                        for(c = 0;c<col;c++){
                            if(array[0][c] == "s"+i){
                                array[i][c] = 1;
                                break;
                            }
                        }
                    else if(slack_var[temp] == '>')
                        for(c = 0;c<col;c++){
                            if(array[0][c] == "s"+i){
                                array[i][c] = -1;
                                break;
                            }
                        }
                }
            }

                for(var j = 0; j<match.length;j++){
                    var coef = match[j].match(get_coef);
                    var variable = match[j].match(get_var2);
                    if(coef[0] == '') coef[0] = 1;
                    else if(coef[0] == '-') coef[0] = -1;

                    if(variable != null){
                        for(c = 0;c<col;c++){
                            if(array[0][c] == variable[0]){
                                array[i][c] = coef[0];
                                break;
                            }
                        }
                    }
                    else array[i][col-1] = coef[0];
                }
            }

            str = $("#of").val();
            str = str.replace(/\s+/g, '');
            match = str.match(regex);

                for(var j = 0; j<match.length;j++){
                    var coef = match[j].match(get_coef);
                    var variable = match[j].match(get_var2);
                    if(coef[0] == '') coef[0] = 1;
                    else if(coef[0] == '-') coef[0] = -1;

                    for(c = 0;c<col;c++){
                        if($("#max").is(':checked')){
                            if(array[0][c] == variable[0] && variable[0] != 'z'){
                                array[row-1][c] = (coef[0]*-1);
                                break;
                            }
                            else if(array[0][c] == variable[0] && variable[0] == 'z'){
                                array[row-1][c] = coef[0];
                                break;
                            }
                        }
                            else if(array[0][c] == variable[0]){
                                array[row-1][c] = coef[0];
                                break;
                            }
                        }
                    
                }
            if($("#min").is(':checked')){
                var min_array, r = row, c = col, index=0, var_index = 1, slack_index = 1;
                var new_row = c+1;
                var new_col = r-1+new_row-1;

                min_array = new Array(new_row);

                for (var i = 0; i < new_row; i++)
                    min_array[i] = new Array(new_col);

                for (var i = 0; i < new_row; i++)
                    for (var j = 0; j < new_col; j++)
                        min_array[i][j] = 0;

                for(var j = 0; j < new_col; j++){
                    if(j<r-2){
                        min_array[0][j] = "V"+var_index;
                        var_index++;
                    }
                    else if(j>=r-2 && j < new_col-2){
                        min_array[0][j] = "S"+slack_index;
                        slack_index++;
                    }
                    else if(j == new_col-2){
                        min_array[0][j] = "Z";
                    }
                    else min_array[0][j] = "Answer"; 
                }
                        

                for (var i = 1; i < new_row; i++){
                    for (var j = 0; j < new_col; j++){
                        if(i<col+1 && j<row-1 && j+1 != row-1)
                            min_array[i][j] = array[j+1][i-1];
                        else if(j == new_col-1)
                            min_array[i][j] = array[row-1][i-1];
                        else if(j==r-2+index)
                            min_array[i][j] = 1;
                    }
                    index++;
                }

                for(var j = 0; j<new_col; j++)
                    if((min_array[new_row-1][j])!=0 && j!=new_col-2)
                        min_array[new_row-1][j] *= -1;

                make_table2(new_row,new_col,count,r,min_array);
                do_simplex(new_row,new_col,r,min_array);
            }
            var temp = 0;
            if($("#max").is(':checked')){
                make_table(row,col,count,array);
                do_simplex(row,col,temp,array);
            }

    }

}

/*Add input fields for additional constraints*/
function add_constraints(){
        $(".buttons_div").append('<div class='+tbox_count+'><div class="input-group input-group"><span class="input-group-addon">'+ tbox_count +'</span><input type="text" id="cons'+ tbox_count +'" class="form-control" placeholder="Constraint '+ tbox_count +'"></div><br></div>');
        tbox_count++;
}

/*Remove input fields for constraints*/
function remove_constraints(){
        if(tbox_count > 5){
            $("."+(tbox_count-1)).remove();
            tbox_count--;
        }
}