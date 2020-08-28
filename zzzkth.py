def remove_kth_from_end(head, k):
    cur = head
    next = cur
    prev = cur
    
    for i in range(k):
        if next == None:
            return cur
        next = next.next
        
    while next is not None:
        prev = cur
        cur = cur.next
        next = next.next
    
    if cur == next:
        prev.next = None
    else:
        prev.next = cur.next
        
    print(head)
        
    return head