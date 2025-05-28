/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let node = head.next;
    let prev = head;
    while(node){
        if(prev.val == node.val){
            prev.next = node.next;
        } else {
            prev = node;
        }
        node = node.next;
    }
    return head;
};