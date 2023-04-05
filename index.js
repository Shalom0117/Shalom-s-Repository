(function (window, _) {
  window.shalomRepository = window.shalomRepository || {
    numz: {
      /**
       This function calculates the distnace between two points
       * @param {object} pointA
       * @param {object} pointB
       * @param {number} pointA.x
       * @param {number} pointA.y
       * @param {number} pointB.x
       * @param {number} pointB.y
       */
      getAngleDegrees(pointA, pointB) {
        const
          distanceX = pointB.x - pointA.x,
          distanceY = pointB.y - pointA.y,
          radians = Math.atan2(distanceY, distanceX),
          degrees = radians * 180 / Math.PI;
        return degrees;
      },

      /** @param {number} degrees */
      degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
      },

      /**@param {number} radians */
      radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
      },

    },

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
          distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance;
      },

      /**
     * Returns an Object with basic properties utilized in a 
     * 2D physics system. On top of simple physical properties,
     * the body has template methods handleCollision() and update().
     * 
     * @param {String} type: A String, should be unique to your
     * system, representing the type of body.
     * @param {Object} options.
     * @param {Number} options.velocityX: The body's velocity on the x axis.
     * @param {Number} options.velocityY: The body's velocity on the y axis.
     * @param {Number} options.rotationalVelocity: The body's rotational velocity.
     * @param {Number} options.integrity: The body's integrity. 0 means the 
     * body is no longer intact and should explode or break apart, 1 means 
     * the body is fully intact.
     * @param {Number} options.density: The density of the body, can be 
     * used when calculating the force of impact of a collision, which can 
     * then be distributed to affect the kinetic energy of the colliding bodies.
     * @param {Number} options.volatility: The body's volatility, how unstable or
     * explosive it may be. Can be used as a multiplyer when calculating the 
     * force of impact of a collision.
     * @return {Object} The body.
     */
      makeBody: function (type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          /**
           * @param {Number} A number representing the force of the impact.
           * @param {Object} The other body involved in the collision.
           */
          handleCollision(impact, body) {
            // template method //
          },

          /**
           * Can be overridden in the concrete body to provide a custom update()
           * method.
           */
          update(event) {
            // template method //
          }
        };
      },
      /**
      * Updates the x and y properties of a body based on its
      * velocityX and velocityY, and, updates the rotation of
      * a body based on its rotationalVelocity.
      *
      * @param {Object} body: The body must be an Object 
      * with x, y, rotation, velocityX, velocityY, and 
      * rotationalVelocity properties.
      */
      updatePosition(body) {
        body.x += body.velocityX;
        body.y += body.velocityY;
        body.rotation += body.rotationalVelocity;
      },
    },

  };
}(window, window._));