/*Function for performing simplex method*/
function do_simplex(rows, cols, r_ind, array){
        var r_index, c_index, c_elem, min = 0, aoverb = 100000, pivot, positive = true;
        for(c=0;c<cols-1;c++){
            if(array[rows-1][c] < min){
                c_index = c;
                min=array[rows-1][c];
            }
        }
        for(r=1;r<rows;r++){
            if(array[r][c_index] > 0 && (array[r][cols-1]/array[r][c_index]) < aoverb){
                aoverb = array[r][cols-1]/array[r][c_index];
                pivot = array[r][c_index];
                r_index = r; 
            }
        }

        for(c=0;c<cols;c++){
            array[r_index][c] = array[r_index][c]/pivot;
            array[r_index][c] = +array[r_index][c].toFixed(4);
        }

        for(r=1;r<rows;r++){
            if(r!=r_index){
                c_elem = array[r][c_index];
                for(c=0;c<cols;c++){
                    array[r][c] = array[r][c] - (c_elem * array[r_index][c]);
                    array[r][c] = +array[r][c].toFixed(4);
                }
            }
        }
        count++;

        if($("#min").is(':checked')) make_table2(rows,cols,count,r_ind,array);
        else make_table(rows,cols,count,array);
        for(c=0;c<cols;c++)
            if(array[rows-1][c] < 0){
                positive = false;
            }
        
        if(!positive) do_simplex(rows,cols,r_ind,array);
}