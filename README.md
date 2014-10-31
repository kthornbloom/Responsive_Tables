#Responsive Tables
A little JS & CSS that actively checks your tables to see if they're too big. If so, it displays them inline. No more randomly setting breakpoints that don't cover all of your tables!


##Demo
<a href="http://kthornbloom.com/responsivetables" target="_blank">Open demo in new window</a>

##Usage & Info
Include the css, or just add it into your own stylesheet:
```
<link rel="stylesheet" href="css/responsivetables.css">
```
Make sure to include and call the script after loading jQuery at the end of the page:
```
        <script type="text/javascript" src="js/responsivetables.min.js"></script>
        <script type="text/javascript">
        $(window).load( function() {
                $(document).responsiveTables({
            });
        });
```
Add a class of "rwd-table" to the tables you'd like to be responsive. Add data-title attributes to your table cells if you'd like them to have a title in mobile mode. It should look something like this:
```
<table class="rwd-table">
	<thead>
	  <tr>
	    <th>Date</th>
	    <th>Title</th>
	    <th>Room</th>
	    <th>Time</th>
	  </tr>
  </thead>
  <tr>
    <td data-title="Date">12.21.15</td>
    <td data-title="Title">Event Title</td>
    <td data-title="Room">Room 3b</td>
    <td data-title="Time">12:30PM </td>
  </tr>
</table>
```

##Help & Feedback
Connect with me on <a href="https://twitter.com/kthornbloom" target="_blank">twitter.</a>
