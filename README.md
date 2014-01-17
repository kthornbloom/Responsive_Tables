#Responsive Tables
A 2KB jQuery solution for large tables in responsive designs


##Demo
<a href="http://kthornbloom.com/responsivetables" target="_blank">Open demo in new window</a>

##Usage & Info
Make sure to include and call the script after loading jQuery:
```
        <script type="text/javascript" src="js/responsivetables.min.js"></script>
        <script type="text/javascript">
        $(window).load( function() {
                $(document).responsiveTables({
                });
        });
```
Then, add a class of rwd-table to each table you'd like this plugin to keep an eye on. If it detects that a table will break your layout, it will be removed and replaced with a button that launches it in a new window.

##Help & Feedback
Connect with me on <a href="https://twitter.com/kthornbloom" target="_blank">twitter.</a>
