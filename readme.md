Question-1 :
What are some differences between interfaces and types in TypeScript?

Answer: 
Interface extend করা যায় এবং classes implement করতে পারে কিন্তু Type alias extend করা যায় না, তবে intersection(&) ব্যবহার করা যায়। 
Interface multiple declarations merge করতে পারে অপরদিকে Type alias merge করতে পারে না। 
সাধারণত object shape বা class contracts define করতে Interface ব্যবহার হয় কিন্তু Type; Primitive, union, intersection, tuple, function ইত্যাদি define করতে ব্যবহার হয়।



Question-2 : 
Explain the difference between any, unknown, and never types in TypeScript. 

Answer:
TypeScript-এ কিছু special types আছে, যা value safety এবং type checking-এ সাহায্য করে; any, unknown, never তাদের মধ্যে কিছু।

any ব্যবহারে কোনো type check নেই তাই সবরকমের value assign করা যায় কিন্তু এটা ব্যবহার একটু অনিরাপদ।

any এর নিরাপদ বিকল্প হলো unknown ব্যবহার করা কারণ এটি assign করা যায় ঠিকই কিন্তু ব্যবহারের আগে ঠিকই type check করতে হয়।

never মূলত Impossible value, errors বা infinite loops indicate করতে ব্যবহার হয়।
