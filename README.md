bashjs
============



Trying to mimic the functionality of bash to nodejs. Writing bash scripts is a great way to get things done and prtobably will remain unmatched by any programming language. 
But while writing tons of bash scripts for different purposes, I came upon some problems that are almost unsolvable by bash, example

* Bash is not a programming language, i.e. loops, conditions, variables, math etc.. is very primitive
* No debugging
* No logging
* No modularity or a packaging system
* No easy try/catch strucutre and no error callbacks

But as mentioned, bash is extremely powerful in its command. For this reason I'd like to take a shot at implementing some of those functions and provide an easy way of deflecting to call an unimplemented bash command inside nodejs and still benefit from nodejs capabilities as a programming language.

I'm looking forward to implement the list of commands listed below and would appreciate any help. Surely some other people are stuck as well with bash and would like to enhance their quality of life.
More important than writing infinite bash functions is to layout an elegant way for this framework, mainly the user should be able to:

* easily switch between the nodejs and the native implementation
* give whatever bash string to be executed directly as a process/subprocess
* pipe/chain commands
* use ampersand '&' or equivelant






