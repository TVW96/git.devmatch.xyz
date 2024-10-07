Add the following to this `README.md` file:  
  * A short report explaining your design decisions and any challenges faced.
  * Documentation: Clear and concise documentation on how to run your application.

I used const for every variable that was able to remain as a constant while still allowing for the following code to run without error. Const is always the best way to declare variables as this will allow for more clarity in objects reference as well as a more predictable and easier to reason with code. Arrays are always genereally declared as const because they can still be edited without error. I declared all array objects as const and I used let for variables that were either made to be reassigned or would be explicitly used within one a specific block of code and no other. 