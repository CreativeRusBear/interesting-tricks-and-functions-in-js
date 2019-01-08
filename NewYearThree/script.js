let decorate = (n, offset, lights)=>{
    let decoration, pos =[];
    decoration = Array(n+1).join('~');
    for (let i=0; i<lights;i++){
        pos.push(offset+i);
    }
    let arr =decoration.split('');
    for (let i=0; i<n; i++){
        if (pos.indexOf(i)>-1){
            arr[i]='o';
        }
    }
    decoration=arr.join('');
    return decoration;
};

let indent= (n) =>{
    let indents = '';
    for (let i=0; i<n; i++){
        indents+='&nbsp;';
    }
    return indents;
};

let tree = (height, lights)=>{
    let branch = '',
        decoPos = 1,
        offset = -lights;

    branch+=indent(height-1);
    branch+='@';
    branch+=indent(height-1);
    branch += '<br />';

    for (let i=0; i<height;i++){
        branch+=indent(height-i, ' ');
        branch+=decorate(decoPos,offset,lights);
        branch+=indent(height-i, ' ');

        decoPos+=2;
        offset+=3;
        offset%=decoPos;
        branch += '<br />';
    }
    branch+=indent(height-1);
    branch+='#';
    branch+=indent(height-1);

    return branch;
};

let i=1;
document.getElementById('tree').innerHTML=tree(25,i++);
setInterval(()=>{
    document.getElementById('tree').innerHTML = tree(25, i);
    i%=4;
    i++;
},200);