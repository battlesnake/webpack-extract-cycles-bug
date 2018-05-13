This bug can be triggered by reference cycles.

Since each reference is just resolved to a filename rather than the target's contents (unless hashes are present in filenames), it should be possible for it to work properly.

The fairly common case of several web pages all referring to each other via a link-bar can trigger this (and is how I've come across it).


In src/index.pug, there is a reference to src/other/index.pug.

In src/other/index.pug, there is a reference to src/index.pug.


If delete the output `dist` folder then run `webpack`, I get no files emitted.

But if I comment out the reference back to the src/index.pug in src/other/index.pug, then the build works, generating both pages.
