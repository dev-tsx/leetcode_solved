function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    let slow = head, fast = head.next;

    while (fast && fast.next) {
        if (fast == slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
}