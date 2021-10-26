const checkValidity = (schedules) => {
    return schedules.every((element) => {
      if (!Array.isArray(element) || element[0] > element[1] || element[0] < 9 || element[0] > 18 || element[1] < 9 || element[1] > 18)
        return false
      return true
    })
  }

const pingpong = (schedules) => {
    if (Array.isArray(schedules) && checkValidity(schedules))
    {
      schedules = schedules.sort((a, b) => {
          if (a[0] == b[0])
              return a[1] - b[1]
          return a[0] - b[0]
      })
      var table = []
      var sessions = [0, 0]
      var filler1, filler2 = []
  
      for (let time = 9; time < 18; time++)
      {
        filler1 = schedules
        filler2 = table
        filler2.forEach((element) => {
            if (element[1] <= time)
                table = table.filter((e) => e != element)
        })
        filler1.forEach((element) => {
            if(element[0] > time)
                return
            table.push(element)
            schedules = schedules.slice(1,)
        })
        
        if (table.length >= 2 && table.length < 4)
            sessions[0] += 1
        else if (table.length >=4)
            sessions[1] += 1
      }
      console.log(sessions)
    }
  }

pingpong([[9,14],[15,17],[12,13],[16,18],[10,15],[14,16],[9,13],[9,15]])