# test_workshop_2_reposit2

Here is the URl to the webpage for this project: https://odessso.github.io/test_workshop_2_reposit2/

## faced problems with upload: strange error in two of the file directories

in future, check index.html file and check two lines of code:

    <script src="libraries/p5.min.js"></script>
    <script src="libraries/p5.sound.min.js"></script>

### Those two lines were pointing to a folder that doesn't exist
    
Change those lines to this:

    <script src="p5.min.js"></script>
    <script src="p5.sound.min.js"></script>
    
html should now work successfully
