const remove_kth_from_end = (head, k) => {
    /// set current to head
    let cur = head

    /// start counter
    let counter = 0;

    /// k = 0 return head
    if (k == 0) {
        return head
    }

    /// loop through linked list
    while (cur.next != None) {
        /// add to counter
        counter += 1
        /// shift right
        cur = cur.next
    }

    /// if kth node is greater than the length of linked list return head
    if (k > counter) {
        return head
    }

    let n = k - 1
    let kth = counter - n

    ///reset counter
    counter = 0

    /// reset current to head
    cur = head

    /// if k = counter then remove head
    if (k == counter) {
        cur = cur.next
        return cur
    }

    /// loop through linked list until get to the node to remove
    while (cur.next != None) {
        /// if at the node before the one thats being removed
        if (counter == kth - 1) {
            /// skip next node
            cur.next = cur.next.next
            cur = cur.next
        } else {
            counter += 1
            cur = cur.next
        }
    }

    return head
}

