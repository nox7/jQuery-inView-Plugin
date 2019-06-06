# jQuery-inView-Plugin
A jQuery plugin that is designed to integrate with CSS transitions. Will determine if an element is within the viewport

## HTML/CSS Only Usage
Add the class _in-view-watcher_ like shown below
```html
<div class="in-view-watcher">

</div>
```

That's it! Whenever the element is in the viewport of the browser, the class _is-in-view_ will be added by the plugin. All you have to do is write CSS to make sure to only perform your transition, or whatever changes you have in mind, when that class is there.

```css
.in-view-watcher{
    height:100px;
}

.in-view-watcher.is-in-view{
    transition:height 200ms;
    height:20px;
}
```

This would transition the height to be 20px in 200ms (0.2s) when the element comes into view. **Note**: the plugin will not ever remove the _is-in-view_ class. Once it appears, the class is there for good as far ar the plugin is concerned.

## jQuery Event Usage

The plugin also adds a new jQuery extension function called inViewWatcher() that can register an element to be watched for whether or not it is in the viewport. Then, an event called "in-view" will fire whenever that element is in the viewport. This eliminates the need to add an additional class in the HTML by default.

```html
<div id="example"></div>
```

```javascript
$("#example").on("in-view", function(){
   console.log("The element is in the viewport!");
   // Do something here
}).inViewWatcher();
```
