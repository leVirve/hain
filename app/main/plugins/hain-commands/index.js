'use strict';

var COMMANDS = ['/restart', '/quit', '/about'];
var NAME = 'hain-commands';

module.exports = function (context) {
  var app = context.app;
  var matchutil = context.matchutil;
  var toast = context.toast;

  function search(query, res) {
    var query_lower = query.toLowerCase();
    if (query_lower === '/restart') {
      return res.add({
        id: 'restart',
        title: 'Restart Hain',
        desc: NAME
      });
    }
    if (query_lower === '/about') {
      return res.add({
        id: 'about',
        title: 'Hain by Heejin Lee &lt;monster@teamappetizer.com&gt;',
        desc: NAME
      });
    }
    if (query_lower === '/quit') {
      return res.add({
        id: 'quit',
        title: 'Quit Hain',
        desc: NAME
      });
    }
    return res.add(_makeCommandsHelp(query));
  }

  function execute(id, payload) {
    if (id === 'restart') {
      toast.enqueue('Hain will be restarted, it will takes seconds');
      setTimeout(function () {
        return app.restart();
      }, 1000);
      app.setInput('');
    } else if (id === 'quit') {
      app.quit();
    } else if (id === 'about') {
      toast.enqueue('Thank you for using Hain');
      app.setInput('');
    }
  }

  function _makeCommandsHelp(query) {
    var ret = matchutil.head(COMMANDS, query, function (x) {
      return x;
    }).map(function (x) {
      return {
        redirect: x.elem,
        title: matchutil.makeStringBoldHtml(x.elem, x.matches),
        desc: NAME
      };
    });
    return ret;
  }

  return { search: search, execute: execute };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvaGFpbi1jb21tYW5kcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNLFdBQVcsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQixRQUF0QixDQUFYO0FBQ04sSUFBTSxPQUFPLGVBQVA7O0FBRU4sT0FBTyxPQUFQLEdBQWlCLFVBQUMsT0FBRCxFQUFhO0FBQzVCLE1BQU0sTUFBTSxRQUFRLEdBQVIsQ0FEZ0I7QUFFNUIsTUFBTSxZQUFZLFFBQVEsU0FBUixDQUZVO0FBRzVCLE1BQU0sUUFBUSxRQUFRLEtBQVIsQ0FIYzs7QUFLNUIsV0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCLEdBQXZCLEVBQTRCO0FBQzFCLFFBQU0sY0FBYyxNQUFNLFdBQU4sRUFBZCxDQURvQjtBQUUxQixRQUFJLGdCQUFnQixVQUFoQixFQUE0QjtBQUM5QixhQUFPLElBQUksR0FBSixDQUFRO0FBQ2IsWUFBSSxTQUFKO0FBQ0EsZUFBTyxjQUFQO0FBQ0EsY0FBTSxJQUFOO09BSEssQ0FBUCxDQUQ4QjtLQUFoQztBQU9BLFFBQUksZ0JBQWdCLFFBQWhCLEVBQTBCO0FBQzVCLGFBQU8sSUFBSSxHQUFKLENBQVE7QUFDYixZQUFJLE9BQUo7QUFDQSxlQUFPLHNEQUFQO0FBQ0EsY0FBTSxJQUFOO09BSEssQ0FBUCxDQUQ0QjtLQUE5QjtBQU9BLFFBQUksZ0JBQWdCLE9BQWhCLEVBQXlCO0FBQzNCLGFBQU8sSUFBSSxHQUFKLENBQVE7QUFDYixZQUFJLE1BQUo7QUFDQSxlQUFPLFdBQVA7QUFDQSxjQUFNLElBQU47T0FISyxDQUFQLENBRDJCO0tBQTdCO0FBT0EsV0FBTyxJQUFJLEdBQUosQ0FBUSxrQkFBa0IsS0FBbEIsQ0FBUixDQUFQLENBdkIwQjtHQUE1Qjs7QUEwQkEsV0FBUyxPQUFULENBQWlCLEVBQWpCLEVBQXFCLE9BQXJCLEVBQThCO0FBQzVCLFFBQUksT0FBTyxTQUFQLEVBQWtCO0FBQ3BCLFlBQU0sT0FBTixDQUFjLCtDQUFkLEVBRG9CO0FBRXBCLGlCQUFXO2VBQU0sSUFBSSxPQUFKO09BQU4sRUFBcUIsSUFBaEMsRUFGb0I7QUFHcEIsVUFBSSxRQUFKLENBQWEsRUFBYixFQUhvQjtLQUF0QixNQUlPLElBQUksT0FBTyxNQUFQLEVBQWU7QUFDeEIsVUFBSSxJQUFKLEdBRHdCO0tBQW5CLE1BRUEsSUFBSSxPQUFPLE9BQVAsRUFBZ0I7QUFDekIsWUFBTSxPQUFOLENBQWMsMEJBQWQsRUFEeUI7QUFFekIsVUFBSSxRQUFKLENBQWEsRUFBYixFQUZ5QjtLQUFwQjtHQVBUOztBQWFBLFdBQVMsaUJBQVQsQ0FBMkIsS0FBM0IsRUFBa0M7QUFDaEMsUUFBTSxNQUFNLFVBQVUsSUFBVixDQUFlLFFBQWYsRUFBeUIsS0FBekIsRUFBZ0MsVUFBQyxDQUFEO2FBQU87S0FBUCxDQUFoQyxDQUEwQyxHQUExQyxDQUE4QyxVQUFDLENBQUQsRUFBTztBQUMvRCxhQUFPO0FBQ0wsa0JBQVUsRUFBRSxJQUFGO0FBQ1YsZUFBTyxVQUFVLGtCQUFWLENBQTZCLEVBQUUsSUFBRixFQUFRLEVBQUUsT0FBRixDQUE1QztBQUNBLGNBQU0sSUFBTjtPQUhGLENBRCtEO0tBQVAsQ0FBcEQsQ0FEMEI7QUFRaEMsV0FBTyxHQUFQLENBUmdDO0dBQWxDOztBQVdBLFNBQU8sRUFBRSxjQUFGLEVBQVUsZ0JBQVYsRUFBUCxDQXZENEI7Q0FBYiIsImZpbGUiOiJwbHVnaW5zL2hhaW4tY29tbWFuZHMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBDT01NQU5EUyA9IFsnL3Jlc3RhcnQnLCAnL3F1aXQnLCAnL2Fib3V0J107XHJcbmNvbnN0IE5BTUUgPSAnaGFpbi1jb21tYW5kcyc7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgYXBwID0gY29udGV4dC5hcHA7XHJcbiAgY29uc3QgbWF0Y2h1dGlsID0gY29udGV4dC5tYXRjaHV0aWw7XHJcbiAgY29uc3QgdG9hc3QgPSBjb250ZXh0LnRvYXN0O1xyXG5cclxuICBmdW5jdGlvbiBzZWFyY2gocXVlcnksIHJlcykge1xyXG4gICAgY29uc3QgcXVlcnlfbG93ZXIgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKHF1ZXJ5X2xvd2VyID09PSAnL3Jlc3RhcnQnKSB7XHJcbiAgICAgIHJldHVybiByZXMuYWRkKHtcclxuICAgICAgICBpZDogJ3Jlc3RhcnQnLFxyXG4gICAgICAgIHRpdGxlOiAnUmVzdGFydCBIYWluJyxcclxuICAgICAgICBkZXNjOiBOQU1FXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHF1ZXJ5X2xvd2VyID09PSAnL2Fib3V0Jykge1xyXG4gICAgICByZXR1cm4gcmVzLmFkZCh7XHJcbiAgICAgICAgaWQ6ICdhYm91dCcsXHJcbiAgICAgICAgdGl0bGU6ICdIYWluIGJ5IEhlZWppbiBMZWUgJmx0O21vbnN0ZXJAdGVhbWFwcGV0aXplci5jb20mZ3Q7JyxcclxuICAgICAgICBkZXNjOiBOQU1FXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHF1ZXJ5X2xvd2VyID09PSAnL3F1aXQnKSB7XHJcbiAgICAgIHJldHVybiByZXMuYWRkKHtcclxuICAgICAgICBpZDogJ3F1aXQnLFxyXG4gICAgICAgIHRpdGxlOiAnUXVpdCBIYWluJyxcclxuICAgICAgICBkZXNjOiBOQU1FXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcy5hZGQoX21ha2VDb21tYW5kc0hlbHAocXVlcnkpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGV4ZWN1dGUoaWQsIHBheWxvYWQpIHtcclxuICAgIGlmIChpZCA9PT0gJ3Jlc3RhcnQnKSB7XHJcbiAgICAgIHRvYXN0LmVucXVldWUoJ0hhaW4gd2lsbCBiZSByZXN0YXJ0ZWQsIGl0IHdpbGwgdGFrZXMgc2Vjb25kcycpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGFwcC5yZXN0YXJ0KCksIDEwMDApO1xyXG4gICAgICBhcHAuc2V0SW5wdXQoJycpO1xyXG4gICAgfSBlbHNlIGlmIChpZCA9PT0gJ3F1aXQnKSB7XHJcbiAgICAgIGFwcC5xdWl0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnYWJvdXQnKSB7XHJcbiAgICAgIHRvYXN0LmVucXVldWUoJ1RoYW5rIHlvdSBmb3IgdXNpbmcgSGFpbicpO1xyXG4gICAgICBhcHAuc2V0SW5wdXQoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX21ha2VDb21tYW5kc0hlbHAocXVlcnkpIHtcclxuICAgIGNvbnN0IHJldCA9IG1hdGNodXRpbC5oZWFkKENPTU1BTkRTLCBxdWVyeSwgKHgpID0+IHgpLm1hcCgoeCkgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlZGlyZWN0OiB4LmVsZW0sXHJcbiAgICAgICAgdGl0bGU6IG1hdGNodXRpbC5tYWtlU3RyaW5nQm9sZEh0bWwoeC5lbGVtLCB4Lm1hdGNoZXMpLFxyXG4gICAgICAgIGRlc2M6IE5BTUVcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IHNlYXJjaCwgZXhlY3V0ZSB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
