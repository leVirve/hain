'use strict';

var path = require('path');

var HAIN_USER_PATH = process.env.LOCALAPPDATA + '/hain-user';
var LOCAL_STORAGE_DIR = HAIN_USER_PATH + '/localStorages';

var INTERNAL_PLUGIN_REPO = path.join(__dirname, '../plugins');
var MAIN_PLUGIN_REPO = path.resolve(HAIN_USER_PATH + '/plugins');
var DEV_PLUGIN_REPO = path.resolve(HAIN_USER_PATH + '/devplugins');

var PLUGIN_REPOS = [INTERNAL_PLUGIN_REPO, MAIN_PLUGIN_REPO, DEV_PLUGIN_REPO];

module.exports = {
  INTERNAL_PLUGIN_REPO: INTERNAL_PLUGIN_REPO,
  MAIN_PLUGIN_REPO: MAIN_PLUGIN_REPO,
  DEV_PLUGIN_REPO: DEV_PLUGIN_REPO,
  LOCAL_STORAGE_DIR: LOCAL_STORAGE_DIR,
  PLUGIN_REPOS: PLUGIN_REPOS
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtlci9jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU0sT0FBTyxRQUFRLE1BQVIsQ0FBUDs7QUFFTixJQUFNLGlCQUFvQixRQUFRLEdBQVIsQ0FBWSxZQUFaLGVBQXBCO0FBQ04sSUFBTSxvQkFBdUIsaUNBQXZCOztBQUVOLElBQU0sdUJBQXVCLEtBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsWUFBckIsQ0FBdkI7QUFDTixJQUFNLG1CQUFtQixLQUFLLE9BQUwsQ0FBZ0IsMkJBQWhCLENBQW5CO0FBQ04sSUFBTSxrQkFBa0IsS0FBSyxPQUFMLENBQWdCLDhCQUFoQixDQUFsQjs7QUFFTixJQUFNLGVBQWUsQ0FDbkIsb0JBRG1CLEVBRW5CLGdCQUZtQixFQUduQixlQUhtQixDQUFmOztBQU1OLE9BQU8sT0FBUCxHQUFpQjtBQUNmLDRDQURlO0FBRWYsb0NBRmU7QUFHZixrQ0FIZTtBQUlmLHNDQUplO0FBS2YsNEJBTGU7Q0FBakIiLCJmaWxlIjoid29ya2VyL2NvbmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xyXG5cclxuY29uc3QgSEFJTl9VU0VSX1BBVEggPSBgJHtwcm9jZXNzLmVudi5MT0NBTEFQUERBVEF9L2hhaW4tdXNlcmA7XHJcbmNvbnN0IExPQ0FMX1NUT1JBR0VfRElSID0gYCR7SEFJTl9VU0VSX1BBVEh9L2xvY2FsU3RvcmFnZXNgO1xyXG5cclxuY29uc3QgSU5URVJOQUxfUExVR0lOX1JFUE8gPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcGx1Z2lucycpO1xyXG5jb25zdCBNQUlOX1BMVUdJTl9SRVBPID0gcGF0aC5yZXNvbHZlKGAke0hBSU5fVVNFUl9QQVRIfS9wbHVnaW5zYCk7XHJcbmNvbnN0IERFVl9QTFVHSU5fUkVQTyA9IHBhdGgucmVzb2x2ZShgJHtIQUlOX1VTRVJfUEFUSH0vZGV2cGx1Z2luc2ApO1xyXG5cclxuY29uc3QgUExVR0lOX1JFUE9TID0gW1xyXG4gIElOVEVSTkFMX1BMVUdJTl9SRVBPLFxyXG4gIE1BSU5fUExVR0lOX1JFUE8sXHJcbiAgREVWX1BMVUdJTl9SRVBPXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBJTlRFUk5BTF9QTFVHSU5fUkVQTyxcclxuICBNQUlOX1BMVUdJTl9SRVBPLFxyXG4gIERFVl9QTFVHSU5fUkVQTyxcclxuICBMT0NBTF9TVE9SQUdFX0RJUixcclxuICBQTFVHSU5fUkVQT1NcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
