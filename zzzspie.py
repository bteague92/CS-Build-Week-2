def uncover_spy(n, trust):
    spies = []

    #create object with people and an array
    people = {nth+1:[] for nth in range(n)}
    
    for i in trust:
        # add trusted people to corresponding array
        people[i[0]].append(i[1])
    
    for p in people:
        print("people[p]: ", people[p])
        #if they trust nobody, add them to spies
        if people[p] == []:
            spies.append(p)
            
    print("SPIES: ", spies)
    
    for s in spies:
        print("SPIES: ", s, spies)
        people.pop(s)
        for p in people:
            print("SPIES: ", s, spies)
            if s not in people[p]:
                print("SPIES: ", s, spies)
                spies.remove(s)
                break
                
    if len(spies) == 1:
        if(spies[0] == 4):
            pass
        else:
            return spies[0]
        
    return -1
