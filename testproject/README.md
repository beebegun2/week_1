# testproject

Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\beebe\OneDrive\Desktop\testproject> echo "# testproject" >> README.md
>> git add README.md
>> git commit -m "first commit"
>> git branch -M main
>> git push -u origin main
Initialized empty Git repository in C:/Users/beebe/OneDrive/Desktop/testproject/.git/
[master (root-commit) 3ba22c4] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 249 bytes | 249.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/beebegun2/testproject.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\beebe\OneDrive\Desktop\testproject> git add .
PS C:\Users\beebe\OneDrive\Desktop\testproject> git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   index.html

PS C:\Users\beebe\OneDrive\Desktop\testproject> git commit -m "first commit"
[main b7c6c0e] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 index.html
PS C:\Users\beebe\OneDrive\Desktop\testproject> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 284 bytes | 284.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/beebegun2/testproject.git
   3ba22c4..b7c6c0e  main -> main
PS C:\Users\beebe\OneDrive\Desktop\testproject>