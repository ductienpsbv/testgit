solution = (a,b) => {
    let h=0,ha=0,hb=0,i=0,j=0, outa=[], outb = []; //init
    while(i < a.length || j < b.length) // chua mo het ca 2 tu
    {
        if(i < a.length) //tu a chua mo het
        {
            if(j < b.length) {
                 a[i] < b[j] ? (h+=a[i], outa.push(i+1)) : (h+=b[j], outb.push(j+1))
            }
            else {
                h+=b[j];
                outb.push(j+1)
            }
            while(ha<h) { // ngăn thứ i chỉ mở được khi chiều cao của nó >= h
                ha+=a[i];
                i++
            }
            while(hb<h) { 
                hb+=b[j];
                j++
            }
        }
        else { // a đã mở hết thì chỉ còn tủ b chưa mở hết 
            outb.push(j+1);
            j++; // không cần h nữa vì chỉ còn 1 tủ thì cứ mở hết các ngăn của nó
        }
    } 
    console.log(outa, outb)
}
solution([1,2,3,4,5],[6,4,3,2,1])