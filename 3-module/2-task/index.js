let calendar = {
    from: new Date('2018-01-02T15:09:10Z'),
    to: new Date('2018-02-02T10:09:10Z')
};


calendar[Symbol.iterator]=function() {
    let current = +this.from;
    let last = +this.to;

    return {
        next() {
            if (current <= last) {
                let strDate = (new Date(current));
                let day=strDate.getDay();
                let date=strDate.toISOString().slice(8,10);
                let str = (day==6 || day==0) ? `[${date}]` : ''+date;
                current+=1000*60*60*24;
                return {
                    done: false,
                    value: str
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
}




