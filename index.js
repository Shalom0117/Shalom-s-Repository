(function(window, _) {
    window.myLibraryName = window.myLibraryName || {
      numz: {},
      phyz: {

        /**
         This function calculates the distnace between two points
         * @param {object} pointA 
         * @param {object} pointB 
         * @returns {number}
         */
        getDistance(pointA, pointB) {
            const
            distanceX = pointB.x - pointA.x, 
            distanceY = point.y - point.y, 
            distance = Math.sqrt(distanceX * distanceX + distnaceY * distanceY);
            return distance;
        },
      },
    };
  }(window, window._));