# bashjs


Linux commands port to nodejs

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
* use ampersand '&' or equivelant functionality



## Commands

Commands already implemented have a tick infront of them. Commands marked with 'native only' indicates that only a direct call to the underlying linux function is available, also i.e. not windows compatible. DISCLAIMER: I  ~~stolen~~ borrowed the listed commands from [coreutilsjs](https://github.com/piranna/coreutils.js) and intend to further 'borrow' more code to get things done. Further I'm also learning alot from [bashjs]()


### textutils
- [ ] awk
- [ ] cat
- [ ] cksum
- [ ] comm
- [ ] csplit
- [ ] cut
- [ ] expand
- [ ] fmt
- [ ] fold
- [ ] head
- [ ] join
- [ ] md5sum
- [ ] nl
- [ ] od
- [ ] paste
- [ ] pr
- [ ] ptx
- [ ] sed
- [ ] sha1sum
- [ ] sort
- [ ] split
- [ ] sum
- [ ] tac
- [ ] tail
- [ ] tr
- [ ] unexpand
- [ ] uniq
- [ ] wc

### fileutils
- [ ] chgrp
- [ ] chmod
- [ ] chown
- [ ] cp
- [ ] dd
- [ ] df
- [ ] dir
- [ ] dircolors
- [ ] du
- [ ] install
- [ ] ln
- [ ] ls
- [ ] mkdir
- [ ] mkfifo
- [ ] mknod
- [ ] mv
- [ ] rm
- [ ] rmdir
- [ ] sync
- [ ] touch
- [ ] vdir

### sh utils
- [ ] basename
- [ ] chroot
- [ ] date needs arguments
- [ ] dirname
- [ ] env
- [ ] expr
- [ ] groups
- [ ] hostname
- [ ] id
- [ ] logname
- [ ] pathchk
- [ ] printenv
- [ ] printf
- [ ] sleep
- [ ] tee
- [ ] test
- [ ] tty
- [ ] users
- [ ] who
- [ ] whoami
- [ ] yes
- [ ] nice
- [ ] nohup
- [ ] su
- [ ] stty
- [ ] uname

### [Posix](http://pubs.opengroup.org/onlinepubs/009604599/utilities/xcu_chap02.html#tag_02_09_01_01)
- [ ] alias
- [ ] bg
- [ ] cd
- [ ] command
- [ ] false
- [ ] fc
- [ ] fg
- [ ] getopts
- [ ] jobs
- [ ] kill
- [ ] newgrp
- [ ] pwd
- [ ] read
- [ ] true
- [ ] umask
- [ ] unalias
- [ ] wait

### Disk utils
- [] fdisk
- [] mkfs
- [] mkfs.ext4

