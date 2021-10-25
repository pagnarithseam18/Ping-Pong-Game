const pingpong = (schedules) => {
    var arr = schedules.sort((a, b) => {
        if (a[0] == b[0])
            return a[1] - b[1]
        return a[0] - b[0]
    })
    var table = []
    var sessions = [0, 0]
    var filler1, filler2 = []

    for (let time = 9; time < 18; time++)
    {
        filler1 = arr
        filler2 = table
        filler2.forEach((element) => {
            if (element[1] <= time)
                table = table.filter((e) => e != element)
        })
        filler1.forEach((element) => {
            if(element[0] > time)
                return
            table.push(element)
            arr = arr.slice(1,)
        })
        
        if (table.length >= 2 && table.length < 4)
            sessions[0] += 1
        else if (table.length >=4)
            sessions[1] += 1
    }
    console.log(sessions)
}

pingpong([[9,10], [9,12], [13,18], [16,18], [14,18], [10,13], [15,18]])

