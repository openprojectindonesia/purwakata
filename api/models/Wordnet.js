/**
* Wordnet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    word : {
      type : 'string',
      required : true
    },
    tag : {
      type : 'string',
      required : true
    },
    mean : {
      type : 'string',
      required : true
    },

    imbuhan : 'json',

    toJSON: function() {
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }
  }
};

