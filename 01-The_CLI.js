                          //----Anatomy of the Command----// 

// pwd

// pwd

// pwd--help

// clear

                                    //-----------//

// cd / home

// pwd

// cd / home / arman

// cd..

// pwd

// cd / home / arman

// cd../..

// pwd

// pwd

// pwd 

// cd home

// cd arman

// cd..

// cd../ arman



                         //-----CLI Directory & Arguments----//

// ls

// cd .. 
// pwd

// ls


// pwd

// ls home

// ls --help

// ---- Usage: ls [OPTION]... [FILE]...
// 
// clear

// ----------------------------------------------------

// echo hi

// echo welcome to frontend masters

// echo "welcome to frontend masters"



// which ls

// cd /bin   // ------ bin directories

// ls


// cd /home

// pwd

// clear 




                              //-----Flags-----//

// pwd --help

// clear

// ---------

// echo --help

// man echo

// echo --help

// clear

                                      //------//

// /home$ ls 

// /home$ ls -l

// /home$ ls -l

// /home$ ls -l -a

// /home$ touch .hidden-file

// /home$ cd arman/

// /home$ touch .hidden-file

// /home$ ls -l -a

// /home$ ls -l

// /home$ clear

                              //-----------//

// /home$ ls -h

// /home$ ls -- help

// /home$ ls -- all

// /home$ ls -- all -a

// /home$ ls -a

// /home$ ls -l -a

// /home$ ls -al

// /home$ ls -la

// /home$ ls --all -l

// clear

                                    //------------//

// :~$ ls

// :~$ ls --ignore=snap

// :~$ ls --ignore snape

// :~$ ls --ignore snap

// :~$ ls --ignore=snap --ignore=Home 

// :~$ clear

                                      //-------//

// :~$ ls -lsah

// :~$ ls --help

// :~$ clear 

                       //------------//


// :~$ ls --ignore snap

// :~$ ls -I snap

// :~$ ls --help 

// :~$ clear

                          //---------------//


// :~$ pwd 

// :~$ ls snap/

// :~$ ls -lsah snap

// :~$ ls snap -lash 

// :~$ ls -lash snap

// :~$ 





                             //-----CLI Search-----//

// :~$ pwd

// :~$ cd /

// :/$ ls

// :/$ pwd

// :/$ cd ~

// :/$ pwd 

// :/$ cd ~/snap

// :/sanp$ pwd

// :/home$ cd ~

// :/$ cd ..

// :/home$ cd ..

// :/$ cd ~

// :/$ cd snap/ 

// :/snap$ cd ..

// :/$ cd /

// :/$ pwd

// :/$ cd ~

// :/$  clear


                                  //----------------//


// :/$   ls -lsah snap

// :/$   clear


                                //--------------------//


// :/$   cd home/

// :/$   cd ..

// :/$   ls

// :/$   cd home/akram/

// :/$   cd home/akram/snap/multipass-sshfs/

// :/$   ls

// :/$   py

// :/$   pyth

// :/$   git describe


// ---- if you hit Ctrl+R    ---> ls -lsah snap

// ---- if you hit Ctrl+R    ---> ls snap/



                        //-----Bash History-----//


// :/$   tail ~/.bash_history

// :/$   pwd

// :/$   ls -a

// :/$   ls -a

// :/$   clear


                                 //---------------//

// :/$   ls -a

// :/$   !!

// :/$   clear


                         //---------//


// :/$   ls

// :/$   Ctrt+L   -----> it also does clear.     // ctrl+N -> No idea



// -------> Copy and paste on the command line <-------- //


// == ----> Ctrl+Shift+C     and    Ctrl+Shift+V. <---- == //



                                //-----CLI Short cuts-----//



// - Ctrl +  A - takes you to the beginning of the line

// - Ctrl +  E - takes you to end of the line

// - Ctrl +  K - "yank" everything after the cursosr

// - Ctrl +  U - "yank" everything before the cursosr

// - Ctrl +  Y - "paste" (paste in quotes because it doesn't actually go inti your system clipboard ) everything you yanked 

// - Ctrl +  L - clear the screen 

// - Ctrl +  R - reverse search through history



//                       //-----Signal-----//


// - Ctrl + C - SIGINT

/* ==---> So go type yes into your terminal, You'll find yourself with an infinite wall of 
          ever-spamming y s in front of you. To stop it, hit Ctrl + C and it'll stop immediately. */


// :/$   tail -f .bash_history


// :/$   yes

// - Ctrl + C 

// - Ctrl + D



// - Ctrl + D - SIGINT


                      //-----------//


// :/$   ps aux

// :/$   ps aux | grep yes

// :/$   clear 


                            // ---------------------------//


// :/$   yes > /dev/null &

// :/$   pas aux | grep yes

// :/$   kill -9 1465

// :/$   kill -l

// :/$   kill -SIGKILL 1467

// :/$   clear

// ----------------------------

// :/$   kill -l