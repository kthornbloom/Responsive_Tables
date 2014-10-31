#Responsive Tables
A great way to deal with responsive tables is to reformat the related information cells into grouped blocks in mobile view, like <a href="http://blog.apps.npr.org/2014/05/09/responsive-data-tables.html" target="_blank">these guys did</a>. The problem is that you have to set a media query to initiate this change, lets say at 400px. What if your table breaks before you get there? What if your table displays just fine under 400px? This little jQuery plugin detects when your table breaks, and only applies the 'fix' when that happens.


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
