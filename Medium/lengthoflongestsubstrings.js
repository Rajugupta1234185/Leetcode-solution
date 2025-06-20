var lengthOfLongestSubstring = function(s) {
    let set = new Set();    // To store unique characters in current window
    let left = 0;           // Left pointer of the window
    let maxLength = 0;      // Track max length found
    
    for (let right = 0; right < s.length; right++) {
        // If s[right] is already in the set, shrink window from the left
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);  // Add new unique character
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }
    
    return maxLength;
};
